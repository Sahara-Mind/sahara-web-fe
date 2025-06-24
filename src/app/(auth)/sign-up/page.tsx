import SignUpForm from "./sign-up-form";
import Logo from "@/components/icons/sahara-logo";
import SocialLoginButtons from "@/components/icons/social-buttons";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white rounded shadow">
        <Logo/>
        <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
          Join Us Today!
        </h2>
        <p className="text-base text-gray-500 mb-4 text-center">
          Sign up to get started.
        </p>
        <SocialLoginButtons/>
        <SignUpForm />
      </div>
    </div>
  );
}
