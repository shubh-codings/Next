import AddNewBlog from "@/components/addBlog/AddNewBlog";
import BlogCards from "@/components/blogCards/BlogCards";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";

async function addBlog(data) {
  "use server";
  const apiResponse = await fetch("http://localhost:3000/api/addBlog", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await apiResponse.json();
  revalidatePath('/blogs')
  // console.log(result)
  return result;
}
async function deleteBlog(id) {
  "use server";
  const apiResponse = await fetch(`http://localhost:3000/api/delete-blog?id=${id}`, {
    method: "DELETE",
  });
  const result = await apiResponse.json();
  revalidatePath('/blogs')
  // console.log(result)
  return result;
}
async function editBlog(id,data) {
  "use server";
  const apiResponse = await fetch(`http://localhost:3000/api/update-blog?id=${id}`, {
    method: "PUT",
    body:JSON.stringify(data),
  });
  const result = await apiResponse.json();
  revalidatePath('/blogs')
  // console.log(result)
  return result;
}
async function fetchBlogData() {
  // "use server";
  const apiResponse = await fetch("http://localhost:3000/api/blogs", {
    method: "GET",
    cache: "no-store",
  });
  const result = await apiResponse.json();
  console.log(result.data);
  return result.data;
}

export default async function Blogs() {
  const blogData = await fetchBlogData();
  return (
    <div className="flex min-h-screen flex-col items-start justify-start p-10">
      <div className="flex justify-start items-end gap-40">
        <h2 className="text-5xl text-gray-100">Blogs</h2>
        <Link href={"/"} className="text-2xl font-bold text-gray-500 underline">
          Home
        </Link>
      </div>
      {/* add Blog  */}
      <div className="p-4 mt-4">
        <AddNewBlog addNewBlog={addBlog} />
      </div>
        <Suspense fallback="Loading...">
          <BlogCards blogData={blogData} deleteBlog={deleteBlog} editBlog={editBlog}/>
        </Suspense>
    </div>
  );
}
