import React from "react";
import Image from "next/image";

// Mock data to simulate static content
const mockData = {
  title: "Static Title",
  desc: "Static Description",
  img: "/1.jpg",
  username: "Static Username",
  content: "Static Content   Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt deserunt corporis impedit, omnis dignissimos repellendus dolore excepturi ratione eaque deleniti fuga sit quasi nesciunt laborum, nobis suscipit, eveniet repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sunt deserunt corporis impedit, omnis dignissimos repellendus dolore excepturi ratione eaque deleniti fuga sit quasi nesciunt laborum, nobis suscipit, eveniet repudiandae.",
};

const BlogPost = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h1 className="text-4xl font-bold">{mockData.title}</h1>
            <p className="text-lg mt-2">{mockData.desc}</p>
            <div className="flex items-center mt-4">
              <Image
                src={mockData.img}
                alt=""
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2">{mockData.username}</span>
            </div>
          </div>
          <div className="imageContainer relative h-96">
            <Image
              src={mockData.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-justify mt-6">
            <p className="text-lg">{mockData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
