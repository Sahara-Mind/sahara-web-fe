"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Password, Checkbox, Button, Input, Text } from "rizzui";
import { useMedia } from "@/hooks/use-media";
import { Form } from "@/components/ui/form";
import { routes } from "@/config/routes";
import { signUpSchema, SignUpSchema } from "@/utils/validators/signup.schema";

const initialValues: SignUpSchema = {
  firstName: "",
  email: "",
  password: "",
  confirmPassword: "",
  isAgreed: false,
};

export default function SignUpForm() {
  const isMedium = useMedia("(max-width: 1200px)", false);
  const [reset, setReset] = useState({});
  const onSubmit: SubmitHandler<SignUpSchema> = (data) => {
    console.log(data);
    setReset({ ...initialValues, isAgreed: false });
  };

  return (
    <React.Fragment>
      <Form<SignUpSchema>
        validationSchema={signUpSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="space-y-5 lg:space-y-6">
            <Input
              type="text"
              size={isMedium ? "lg" : "xl"}
              label="First Name"
              placeholder="Enter your first name"
              className="[&>label>span]:font-medium"
              {...register("firstName")}
              error={errors.firstName?.message}
            />
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
            <Password
              label="Confirm Password"
              placeholder="Confirm your password"
              size={isMedium ? "lg" : "xl"}
              {...register("confirmPassword")}
              className="[&>label>span]:font-medium"
              error={errors.confirmPassword?.message}
            />
            <div className="col-span-2 flex items-start text-gray-700">
              <Checkbox
                {...register("isAgreed")}
                className="[&>label.items-center]:items-start [&>label>div.leading-none]:mt-0.5 [&>label>div.leading-none]:sm:mt-0 [&>label>span]:font-medium"
                label={
                  <Text as="span" className="ps-1 text-gray-500">
                    By signing up you have agreed to our{" "}
                    <Link
                      href="/"
                      className="font-semibold text-gray-700 transition-colors hover:text-primary"
                    >
                      Terms
                    </Link>{" "}
                    &{" "}
                    <Link
                      href="/"
                      className="font-semibold text-gray-700 transition-colors hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                  </Text>
                }
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              size={isMedium ? "lg" : "xl"}
            >
              Create Account
            </Button>
          </div>
        )}
      </Form>
      <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
        Don’t have an account?{" "}
        <Link
          href={routes.auth.signIn}
          className="font-semibold text-gray-700 transition-colors hover:text-primary"
        >
          Sign In
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
