import { allPosts } from "contentlayer/generated";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogPafe = () => {
  const posts = allPosts;
  return (
    <div className="container max-w-4xl py-6 lg:0y-10">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
            Blog🚀
          </h1>
          <p className="text-muted-foreground text-xl">
            ContentLayerとMDXで書いています
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid sm:grid-cols-2 gap-10">
        {posts.map((post) => (
          <article key={post._id} className="relative flex flex-col space-y-2">
            <Link href={post.slug}>
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  height={804}
                  width={452}
                  className="rounded-md border bg-muted"
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {format(post.date, "yyyy/MM/dd")}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogPafe;
