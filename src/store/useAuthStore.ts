import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null, // for dev only
      token: null,
      isAuthenticated: false,

      // Login and get token
      login: async (email, password) => {
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

          if (!res.ok) {
            return false;
          }

          const data = await res.json();

          set({
            user: data.user,
            token: data.token,
            isAuthenticated: true,
          });

          return true;
        } catch (error) {
          console.error('Login error:', error);
          return false;
        }
      },

      // Fetch current user with Bearer token
      fetchUser: async () => {
        const token = get().token;

        if (!token) {
          console.warn('No token available');
          set({ user: null, isAuthenticated: false });
          return;
        }

        try {
          const res = await fetch('/api/profile', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!res.ok) throw new Error('Failed to fetch user');

          const data = await res.json();

          set({
            user: data,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error('Error fetching user:', error);
          set({
            user: null,
            token: null,
            isAuthenticated: false,
          });
        }
      },

      // Logout
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage', // Persist key in localStorage
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);




    //    login: (email, password) => {
    //     const user = users.find(
    //       (u) => u.email === email && u.password === password
    //     );

    //     if (user) {
    //       set({
    //         user,
    //         token: 'fake-token-123', // Simulate token
    //         isAuthenticated: true,
    //       });
      
    //   login: () => {
            
    //             const userLocalStorage = localStorage.getItem('accessToken');
    //             if (userLocalStorage) {
    //                 // verify the token here
    //                 if( userLocalStorage == "token-access"){
    //                   set({ isAuthenticated: true });
    //                 }else{
    //                   set({isAuthenticated:false})
    //                 }
                
    //             }else{
    //               //call the login url to get the token and set the accessToken and refreshTooken
    //               // if response is ok set the userLocalStorage
    //               const user = users.find(
    //                 (u) => u.email === email && u.password === password
    //               );

    //               if (user){
    //                 localStorage.setItem("accessToken","token-access")
    //                 set({isAuthenticated:true})
    //               }  else{
    //                 set({isAuthenticated:false})
    //               }
   
    //             }
    //         },
    //         logout: () => {
    //             set({ isAuthenticated: false });
    //             localStorage.clear();
    //         },
    //     }),
    //     {
    //         name: 'userLoginStatus',
    //     }
//     )
// );
