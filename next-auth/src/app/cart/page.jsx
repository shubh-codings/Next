import { auth } from "@/auth";
import CartItems from "@/components/custom/CartItems";
import { redirect } from "next/navigation";

export default async function CartPage() {
    const getSession = await auth();
    if(!getSession?.user) redirect('/')
    return (
        <div className="flex justify-center items-center mx-auto py-10"> 
            <CartItems/>
        </div>
    );
}