import Link from "next/link";
import React from "react";
import { MdEmail, MdPassword } from "react-icons/md";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-3 justify-center bg-primary rounded-xl text-white px-8">
        <div className="font-bold text-4xl">Prompt-AI</div>
        <p>
          Get access to posting and editing your own prompts with the world
          easily
        </p>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center w-full h-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-4xl">Login to your account</h1>
          <div>
            Don't have an account?{" "}
            <Link href="/auth/register" className="font-bold">
              Sign up
            </Link>
          </div>

          <button className="btn btn-outline">Sign in with Google</button>
          <button className="btn btn-outline">Sign in with Github</button>

          <div className="flex flex-row justify-center items-center gap-2 text-gray-700 w-full">
            <div className="border border-gray-300 h-[1px] w-full"></div>
            <span>Or</span>
            <div className="border border-gray-300 h-[1px] w-full"></div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="prompt" className="font-bold">
                Email
              </label>
              <div className="input input-bordered flex items-center gap-2">
                <MdEmail />
                <input
                  name="tag"
                  id="email"
                  placeholder="johndoe@exemple.com"
                  required
                  className="grow"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between ">
                <label htmlFor="prompt" className="font-bold">
                  Password
                </label>

                <Link href="#" className="text-gray-700">
                  Forgot password ?
                </Link>
              </div>

              <div className="input input-bordered flex items-center gap-2">
                <MdPassword />
                <input name="tag" id="email" required className="grow" />
              </div>

              <div className="form-control">
                <label htmlFor="rememberMe" className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="checkbox checkbox-sm"
                    defaultChecked
                  />
                </label>
              </div>
            </div>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
