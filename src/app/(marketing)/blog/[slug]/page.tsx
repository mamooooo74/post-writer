import Mdx from "@/components/Mdx";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { allPosts, Post } from "contentlayer/generated";
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
const getPostFromSlug = async (slug: string) => {
  return allPosts.find((post) => post.slugAsParams === slug);
};

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const page = await getPostFromSlug(slug);
  if (!page) {
    return {};
  }
  return {
    title: page.title,
    description: page.description,
  };
};

const PostPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const post = await getPostFromSlug(slug);
  if (!post) {
    notFound();
  }
  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && (
          <time>Published on {format(post.date, "yyyy/MM/dd")}</time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 border rounded-md bg-muted"
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12 " />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          全ての記事を見る
        </Link>
      </div>
    </article>
  );
};

export default PostPage;
