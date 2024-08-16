import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-4">Welcome to Recipe App</h1>
      <Link href='recipe-list' className=" text-4xl hover:underline text-blue-700">Explore Recipes</Link>
    </div>
  );
}
