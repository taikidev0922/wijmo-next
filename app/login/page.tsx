"use client";
import * as Yup from "yup"; // Yup import
import { yupResolver } from "@hookform/resolvers/yup"; // hookform import
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { ApiClient } from "@/lib/api-client";
import TextFieldForm from "@/components/TextFieldForm";
function page() {
  const router = useRouter();
  const returnUrl = useSearchParams().get("returnUrl") || "/";
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm(formOptions);

  async function onSubmit(data: { email: string; password: string }) {
    try {
      await fetch("http://localhost:3001/api/sanctum/csrf-cookie", {
        method: "GET",
        headers: { referer: "http://localhost:3001" },
        credentials: "include",
      });
      await ApiClient.auth.login.$post({ body: data });
      router.push(returnUrl);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="p-8 bg-white rounded shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6">
          <TextFieldForm
            id="email"
            type="email"
            label="email"
            control={control}
          />
        </div>
        <div className="mb-8">
          <TextFieldForm
            id="password"
            type="password"
            label="password"
            control={control}
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" // Increased padding for a slightly larger button
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default page;
