"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Password, Button, Input, Text } from "rizzui";
import { useMedia } from "@/hooks/use-media";
import { Form } from "@/components/ui/form";
import { routes } from "@/config/routes";
import { signInSchema, SignInSchema } from "@/utils/validators/signin.schema";

const initialValues: SignInSchema = {
  email: "",
  password: "",
};

export default function SignInForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const [reset, setReset] = useState({});
  const onSubmit: SubmitHandler<SignInSchema> = (data) => {
    console.log(data);
    setReset({ ...initialValues });
  };

  return (
    <React.Fragment>
      <Form<SignInSchema>
        validationSchema={signInSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="email"
              size={isMedium ? "lg" : "xl"}
              label="Email"
              placeholder="Enter your email"
              className="[&>label>span]:font-medium"
              {...register("email")}
              error={errors.email?.message}
            />
            <Password
              label="Password"
              placeholder="Enter your password"
              size={isMedium ? "lg" : "xl"}
              {...register("password")}
              className="[&>label>span]:font-medium"
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between">
              <div></div>
              <Link
                href={routes.auth.forgotPassword1}
                className="text-sm font-semibold text-gray-700 transition-colors hover:text-primary"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              className="w-full"
              type="submit"
              size={isMedium ? "lg" : "xl"}
            >
              Sign In
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        Don&apos;t have an account?{" "}
        <Link
          href={routes.auth.signUp}
          className="font-semibold text-gray-700 transition-colors hover:text-primary"
        >
          Sign Up
        </Link>
      </Text>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        <Link
          href={routes.dashboard}
          className="font-semibold text-gray-700 transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
      </Text>
    </React.Fragment>
  );
}
