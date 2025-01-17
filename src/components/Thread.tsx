"use client";

import { createPost, incrementLikes } from "@/server/actions/post";
import { useOptimistic, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";

type Message = {
  message: string;
};

export function Thread({ messages }: { messages: Message[] }) {
  //   const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(
  //     messages,
  //     // @ts-ignore
  //     (state: Message[], newMessage: string) => [
  //       ...state,
  //       { message: newMessage },
  //     ]
  //   );

  return (
    <div>
      {messages.map((m, k) => (
        <div key={k}>{m.message}</div>
      ))}

      <form
        action={async (formData: FormData) => {
          const message = formData.get("message");
          //   addOptimisticMessage(message);
          // @ts-ignore
          await createPost(message);
        }}
      >
        <input type="text" name="message" className="input input-bordered" />
        <button type="submit">Send</button>

        <Loading />
      </form>
    </div>
  );
}

function Loading() {
  const { pending } = useFormStatus();

  return <div>{pending && "loading..."}</div>;
}

export function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);

  const [isPending, startTransition] = useTransition();

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLikes();

          startTransition(() => {
            setLikes(updatedLikes);
          });
        }}
      >
        Like
      </button>
    </>
  );
}
