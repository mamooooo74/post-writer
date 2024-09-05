import DashboardHeader from "@/components/DashboardHeader";
import DashBoardShell from "@/components/DashBoardShell";
import PostCreateButton from "@/components/PostCreateButton";
import PostItem from "@/components/PostItem";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }
  const posts = await db.post.findMany({
    where: {
      authorId: user?.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <DashBoardShell>
      <DashboardHeader heading="記事投稿" text="記事の投稿と管理">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts.length ? (
          <div className=" divide-y border rounded-md">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="ml-2">投稿がありません</div>
        )}
      </div>
    </DashBoardShell>
  );
};

export default page;
