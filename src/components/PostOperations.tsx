import { Post } from "@prisma/client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Icon } from "./icon";
import Link from "next/link";

interface PostOperationsProps {
  post: Pick<Post, "id" | "title">;
}

const PostOperations: React.FC<PostOperationsProps> = ({ post }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Icon.ellipsis className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href={`/editor/${post.id}`} className="w-full">
              編集
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive cursor-pointer focus:text-destructive">
            削除
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default PostOperations;
