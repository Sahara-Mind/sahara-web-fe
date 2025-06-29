import AuthWrapperFour from "@/app/shared/auth/auth-wrapper";
import SignUpForm from "@/app/shared/auth/sign-up-form";
import { metaObject } from "@/config/site.config";

export const metadata = {
  ...metaObject("Sign Up 4"),
};

export default function SignUpPage() {
  return (
    <AuthWrapperFour
      title="Join us today! Get special benefits and stay up-to-date."
      isSocialLoginActive={true}
    >
      <SignUpForm />
    </AuthWrapperFour>
  );
}
