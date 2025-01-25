"use client";

import Form from "@/components/Form";
// import { createPost } from "@/server/actions/post";
import { IPost } from "@/server/database/models/post";
import React, { useState } from "react";

function CreatePrompts() {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({});

  const handleCreatePrompt = async () => {
    // const result = await createPost(post);
    // console.log(result);
  };

  return (
    <div>
      {/* <Form
        post={post}
        setPost={setPost}
        submitting={submitting}
        type="Create"
        onSubmit={handleCreatePrompt}
      /> */}
    </div>
  );
}

export default CreatePrompts;
