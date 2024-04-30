import React from "react";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async () => {
  const data = await getData();
  console.log("🚀 ~ BlogPost ~ data:", data)

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
