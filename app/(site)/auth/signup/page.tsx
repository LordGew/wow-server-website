import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear una cuenta | Storm Reign wow",

  // other metadata
  description: "Create an account to access Private Server",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
