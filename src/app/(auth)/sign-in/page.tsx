import Logo from "@/components/icons/sahara-logo";
import SignInForm from "./sign-in-form";

export default function SignInPage() {
  return (
    <div className="max-w-sm mx-auto mt-10">
    <Logo/>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Welcome Back,
        <br />
        Sign in with your credentials.
      </h1>
      <SignInForm />
    </div>
  );
}
