import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはnext.js
            AppRouterで作られたものです。ユーザーは自由のポストを投稿することができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンなスッタクを使って作られたWebアプリケーションです。
            Next.jsAppRouterやcontentlayerを利用してマークダウン形式でブログ投稿ができます。
          </p>
        </div>
        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px] md:h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosNextjsIcon0"
                    x1="55.633%"
                    x2="83.228%"
                    y1="56.385%"
                    y2="96.08%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="logosNextjsIcon1"
                    x1="50%"
                    x2="49.953%"
                    y1="0%"
                    y2="73.438%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
                </defs>
                <mask id="logosNextjsIcon3" fill="#fff">
                  <use href="#logosNextjsIcon2" />
                </mask>
                <g mask="url(#logosNextjsIcon3)">
                  <circle cx="128" cy="128" r="128" />
                  <path
                    fill="url(#logosNextjsIcon0)"
                    d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                  />
                  <path
                    fill="url(#logosNextjsIcon1)"
                    d="M163.556 76.8h17.067v102.4h-17.067z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px] md:h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosNextjsIcon0"
                    x1="55.633%"
                    x2="83.228%"
                    y1="56.385%"
                    y2="96.08%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="logosNextjsIcon1"
                    x1="50%"
                    x2="49.953%"
                    y1="0%"
                    y2="73.438%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
                </defs>
                <mask id="logosNextjsIcon3" fill="#fff">
                  <use href="#logosNextjsIcon2" />
                </mask>
                <g mask="url(#logosNextjsIcon3)">
                  <circle cx="128" cy="128" r="128" />
                  <path
                    fill="url(#logosNextjsIcon0)"
                    d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                  />
                  <path
                    fill="url(#logosNextjsIcon1)"
                    d="M163.556 76.8h17.067v102.4h-17.067z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px] md:h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosNextjsIcon0"
                    x1="55.633%"
                    x2="83.228%"
                    y1="56.385%"
                    y2="96.08%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="logosNextjsIcon1"
                    x1="50%"
                    x2="49.953%"
                    y1="0%"
                    y2="73.438%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
                </defs>
                <mask id="logosNextjsIcon3" fill="#fff">
                  <use href="#logosNextjsIcon2" />
                </mask>
                <g mask="url(#logosNextjsIcon3)">
                  <circle cx="128" cy="128" r="128" />
                  <path
                    fill="url(#logosNextjsIcon0)"
                    d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                  />
                  <path
                    fill="url(#logosNextjsIcon1)"
                    d="M163.556 76.8h17.067v102.4h-17.067z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px] md:h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosNextjsIcon0"
                    x1="55.633%"
                    x2="83.228%"
                    y1="56.385%"
                    y2="96.08%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="logosNextjsIcon1"
                    x1="50%"
                    x2="49.953%"
                    y1="0%"
                    y2="73.438%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
                </defs>
                <mask id="logosNextjsIcon3" fill="#fff">
                  <use href="#logosNextjsIcon2" />
                </mask>
                <g mask="url(#logosNextjsIcon3)">
                  <circle cx="128" cy="128" r="128" />
                  <path
                    fill="url(#logosNextjsIcon0)"
                    d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                  />
                  <path
                    fill="url(#logosNextjsIcon1)"
                    d="M163.556 76.8h17.067v102.4h-17.067z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px] md:h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosNextjsIcon0"
                    x1="55.633%"
                    x2="83.228%"
                    y1="56.385%"
                    y2="96.08%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="logosNextjsIcon1"
                    x1="50%"
                    x2="49.953%"
                    y1="0%"
                    y2="73.438%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
                </defs>
                <mask id="logosNextjsIcon3" fill="#fff">
                  <use href="#logosNextjsIcon2" />
                </mask>
                <g mask="url(#logosNextjsIcon3)">
                  <circle cx="128" cy="128" r="128" />
                  <path
                    fill="url(#logosNextjsIcon0)"
                    d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                  />
                  <path
                    fill="url(#logosNextjsIcon1)"
                    d="M163.556 76.8h17.067v102.4h-17.067z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px] md:h-[160px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosNextjsIcon0"
                    x1="55.633%"
                    x2="83.228%"
                    y1="56.385%"
                    y2="96.08%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="logosNextjsIcon1"
                    x1="50%"
                    x2="49.953%"
                    y1="0%"
                    y2="73.438%"
                  >
                    <stop offset="0%" stopColor="#FFF" />
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
                  </linearGradient>
                  <circle id="logosNextjsIcon2" cx="128" cy="128" r="128" />
                </defs>
                <mask id="logosNextjsIcon3" fill="#fff">
                  <use href="#logosNextjsIcon2" />
                </mask>
                <g mask="url(#logosNextjsIcon3)">
                  <circle cx="128" cy="128" r="128" />
                  <path
                    fill="url(#logosNextjsIcon0)"
                    d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68L199.11 234.446a128.433 128.433 0 0 0 13.524-10.418Z"
                  />
                  <path
                    fill="url(#logosNextjsIcon1)"
                    d="M163.556 76.8h17.067v102.4h-17.067z"
                  />
                </g>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post Writerはログインするとブログ投稿ができるようになります
          </p>
        </div>
      </section>
      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしもWebサービスが気に入った場合は下記xからDMでご連絡ください。
            <br />
            お仕事の連絡を待ってます。
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はxまで
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
