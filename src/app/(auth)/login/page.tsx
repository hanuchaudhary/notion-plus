"use client";
import { useRouter } from "next/navigation";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/types/types";

export default function LoginPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async () => {
    try {
      // Perform login logic here
      // For example, call an API to authenticate the user
      // If successful, redirect to the dashboard page
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return <div>LoginPage</div>;
}
