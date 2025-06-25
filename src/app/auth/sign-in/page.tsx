import AuthWrapperFour from '@/app/shared/auth-layout/auth-wrapper';
import SignInForm from '@/app/shared/auth-layout/sign-in-form';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign In 4'),
};

export default function SignInPage() {
  return (
    <AuthWrapperFour
      title={
        <>
          Welcome Back! <br /> Sign in with your credentials.
        </>
      }
      isSignIn
      isSocialLoginActive={true}
    >
      <SignInForm />
    </AuthWrapperFour>
  );
}
