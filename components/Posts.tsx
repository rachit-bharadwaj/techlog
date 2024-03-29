import React from "react";
import Post from "../props/Post";

type Props = {};

const Posts = (props: Props) => {
  return (
    <div className="m-8 gap-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1"
        postTitle="GitHub copilot now has a better AI model and new capabilities"
        postDate="Feb 14"
        readTime="4"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/833a4f4c589e3caa2dfba8dc2706a3f2"
      />
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/2c710db2750a4a70835862534cb7c9d4"
        postTitle="Why Tailwind is better"
        postDate="Feb 16"
        readTime="2"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/486229c0779affa623bff26f701600d7"
      />
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/dccd08a62991401ea8354868b1292ea2"
        postTitle="useSignal() is the future of web Frameworks"
        postDate="Feb 16"
        readTime="1"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/50b844db621e21b19fa6a2575f2a836d"
      />
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/medium"
        postTitle="Object-oriented programming (OOP) in JavaScript"
        postDate="Yesterday"
        readTime="6"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/2cc5f6e1cb235e739860e6984301642d"
      />
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/kdnuggets"
        postTitle="GPT-4 Everything you need to know"
        postDate="March 15"
        readTime="6"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/8de30e8a7e5daaf9e71e5c433e549acc"
      />
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/kdnuggets"
        postTitle="GPT-4 Everything you need to know"
        postDate="March 15"
        readTime="6"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/8de30e8a7e5daaf9e71e5c433e549acc"
      />
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/kdnuggets"
        postTitle="GPT-4 Everything you need to know"
        postDate="March 15"
        readTime="6"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/8de30e8a7e5daaf9e71e5c433e549acc"
      />
      <Post
        sourceLogo="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/kdnuggets"
        postTitle="GPT-4 Everything you need to know"
        postDate="March 15"
        readTime="6"
        postImage="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/8de30e8a7e5daaf9e71e5c433e549acc"
      />
    </div>
  );
};

export default Posts;
