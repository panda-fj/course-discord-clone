import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
    <div>
        This is a Protected Routes.
        <UserButton/>
    </div>
  );
}