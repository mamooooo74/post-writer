import Editor from "@/components/Editor";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { Post, User } from "@prisma/client";
import { notFound, redirect } from "next/navigation";
import React from "react";
interface EditorProps {
  params: { postId: string };
}

const getPostForUser = async (postId: Post["id"], userId: User["id"]) => {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
  return post;
};

const EditorPage: React.FC<EditorProps> = async ({ params }) => {
  const user = await getCurrentUser();
  const { postId } = params;
  if (!user) {
    redirect("/login");
  }
  const post = await getPostForUser(postId, user.id!);
  if (!post) {
    notFound();
  }
  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
};

export default EditorPage;
