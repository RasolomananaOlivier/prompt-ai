"use client";

import Form from "@/components/Form";
import { Prompt } from "@/types";
import React, { useState } from "react";

function CreatePrompts() {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Prompt>({
    id: 0,
    tag: "",
  });

  const handleCreatePrompt = async () => {
    console.log(post);
  };

  return (
    <div>
      <Form
        post={post}
        setPost={setPost}
        submitting={submitting}
        type="Create"
        onSubmit={handleCreatePrompt}
      />
    </div>
  );
}

export default CreatePrompts;
