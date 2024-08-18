import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const getSession = await auth();
  if(!getSession?.user) {
    return (
      <div className="flex justify-center items-center min-w-full min-h-[600px]">
        <h1 className="text-3xl">User not Authenticated! Please Login First.</h1>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-[600px] gap-8">
      <h1 className="text-3xl">Welcome {getSession?.user?.name} </h1>
      <Link href={'/products'} className="text-xl">Explore Products</Link>
    </div>
  );
  
}
