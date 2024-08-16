import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <h2 className="text-4xl text-gray-100 font-bold mb-4">Browse Our Blog Collections</h2>
      <Link href={'blogs'} className=" p-2 border border-solid border-slate-500 bg-slate-50 text-2xl rounded font-bold text-gray-500">Explore Blogs</Link>
    </main>
  );
}
