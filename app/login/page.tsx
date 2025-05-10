"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import LoginComponent from "@/components/authentication/LoginComponent";
import SignupComponent from "@/components/authentication/SignupComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Page() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter(); // Initialize useRouter

  return (
    <main className="flex min-h-screen">
      {/* Left Section */}
      <section className="hidden md:flex w-1/2 items-center justify-center bg-black">
        <Image
          src="/logo.png"
          alt="company-logo"
          width={300}
          height={300}
          className="object-cover"
        />
      </section>

      {/* Right Section */}
      <section className="relative w-full md:w-1/2 flex items-center justify-center p-4">
        {/* Top-right Buttons */}
        <div className="absolute top-4 right-8 space-x-1">
          <Button
            variant="outline"
            className="hover:bg-black hover:text-white"
            onClick={() => router.push("/")} // Navigate to home route
          >
            Home
          </Button>
          <Button
            variant="outline"
            className="hover:bg-black hover:text-white"
            onClick={() => setIsLogin(!isLogin)} // Toggle between login and signup
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Button>
        </div>

        {/* Conditional Rendering */}
        {isLogin ? <LoginComponent /> : <SignupComponent />}
      </section>
    </main>
  );
}

export default Page;
