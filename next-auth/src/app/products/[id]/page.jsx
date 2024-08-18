import { FetchProductDetail } from "@/action";
import { auth } from "@/auth";
import ProductDetail from "@/components/custom/ProductDetail";
import { redirect } from "next/navigation";

export default async function ProductDetails({params}) {
    const getSession = await auth();
    if(!getSession?.user) redirect('/')

        const product = await FetchProductDetail(params.id);
    return (
        <div className="flex  justify-center items-center p-4">
            <ProductDetail product={product}/>
        </div>
    );
}