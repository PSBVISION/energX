// // src/pages/Signup.jsx
// import Background from "../components/Background";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { SignUp } from '@clerk/clerk-react'


export default function SignUpPage() {
  return <SignUp path="/sign-up" />
}