import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function SocialLoginButtons() {
  return (
    <div className="mb-6">
      <p className="text-center text-gray-500 mb-4">Sign in with</p>
      <div className="flex justify-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
          <FcGoogle className="w-5 h-5" />
          Google
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition">
          <BsFacebook className="w-5 h-5 text-blue-600" />
          Facebook
        </button>
      </div>
    </div>
  );
}
