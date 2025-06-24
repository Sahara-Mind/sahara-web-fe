import Logo from "@/components/icons/sahara-logo";
import SignInForm from "./sign-in-form";
import SocialLoginButtons from "@/components/icons/social-buttons";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded shadow">
        <Logo />
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          Welcome Back!
        </h2>
        <p className="text-base text-gray-500 mb-4 text-center">
          Sign in with your credentials.
        </p>
        <SocialLoginButtons />
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-4 text-gray-400 text-sm whitespace-nowrap">
            or, sign in with your email
          </span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
