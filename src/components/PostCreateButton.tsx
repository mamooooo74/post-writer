"use client";
import React, { useState } from "react";
import { buttonVariants, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";

interface PostCreateButtonProps extends ButtonProps {}

const PostCreateButton: React.FC<PostCreateButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setIsLoading(true);
    const response = await fetch("api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        title: "untitled post",
      }),
    });
    setIsLoading(false);
    if (!response.ok) {
      return toast({
        title: "問題が発生しました。",
        description: "投稿が作成されませんでした。もう一度お試しください。",
        variant: "destructive",
      });
    }
    const post = await response.json();
    router.refresh();
    router.push(`editor/${post.id}`);
  };
  return (
    <button
      className={cn(
        buttonVariants({ variant }),
        { "cursor-not-allowed opacity-60": isLoading },
        className
      )}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Icon.add className="mr-2 h-4 w-4" />
      )}
      新しい投稿
    </button>
  );
};

export default PostCreateButton;
