import { IPost } from "@/server/database/models/post";
import Link from "next/link";
import React from "react";

type Props = {
  type: "Create" | "Update";
  post: IPost;
  setPost: React.Dispatch<IPost>;
  submitting: boolean;
  onSubmit: () => Promise<void>;
};

export default function Form(props: Props) {
  const { post, setPost, submitting, type, onSubmit } = props;

  return (
    <section className="flex flex-col w-full gap-12 pt-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Create Prompt</h1>
        <p className="text-gray-800">
          Create and share amazing prompts with the world, and let your
          imagination run wild with any AI-powered platform.
        </p>
      </div>

      <form
        action=""
        className="flex flex-col rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5 gap-5"
      >
        <div>
          <label htmlFor="prompt" className="font-bold">
            Your AI Prompt
          </label>
          <textarea
            name="prompt"
            id="prompt"
            placeholder="Write your prompt here..."
            required
            className="input input-bordered w-full mt-2 h-40 resize-none"
            onChange={(e) => {
              setPost({
                ...post,
                prompt: e.target.value,
              });
            }}
          />
        </div>

        <div>
          <label htmlFor="prompt" className="font-bold">
            tag{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </label>
          <input
            name="tag"
            id="tag"
            placeholder="Specify the prompt tags"
            required
            className="w-full input input-bordered mt-2"
            onChange={(e) => {}}
          />
        </div>

        <div className="flex justify-end items-center gap-5">
          <Link href="/" className="btn">
            Cancel
          </Link>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="btn btn-primary px-8"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}
