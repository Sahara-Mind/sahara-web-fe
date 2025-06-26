import AuthWrapperFour from "@/app/shared/auth/auth-wrapper";
import SignInForm from "@/app/shared/auth/sign-in-form";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Sign In"),
};

export default function SignInPage() {
  return (
    <AuthWrapperFour
      title="Welcome back! Please sign in to your account."
      isSocialLoginActive={true}
      isSignIn={true}
    >
      <SignInForm />
    </AuthWrapperFour>
  );
}
