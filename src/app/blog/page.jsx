import React from "react";
import Link from "next/link";
import Image from "next/image";
import "tailwindcss/tailwind.css";

async function getData() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item) => (
        <Link href={`/blog/${item._id}`} key={item.id}>
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="image-container">
              <Image
                src={item.img}
                alt=""
                width={400}
                height={250}
                className="w-full"
              />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.desc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;