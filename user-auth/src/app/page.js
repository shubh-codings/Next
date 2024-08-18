import { getAuthenticatedUser } from "@/actions";
import Logout from "@/components/logoutButton";
import { redirect } from "next/navigation";


export default async function Home() {
  const user = await getAuthenticatedUser();
  console.log(user)

  if(!user.success)redirect('/sign-in')
  const data = user.data;
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-10">
      <h1 className="text-4xl">User Authentication Home Page</h1>

      <h4 className="text-xl">{data?.userName}</h4>
      <p>{data?.email}</p>

      <Logout/>
    </div>
  );
}
