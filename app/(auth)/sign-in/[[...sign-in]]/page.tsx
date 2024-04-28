import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div>
      <SignIn path="/sign-in" />
    </div>
  );
};

export default SignInPage;
