import { FetchAllProducts } from "@/action";
import { auth } from "@/auth";
import ProductList from "@/components/custom/ProductList";
import { redirect } from "next/navigation";

export default async function Products() {

    const getSession = await auth();
    if (!getSession?.user) redirect('/')
    const productList = await FetchAllProducts();
    return (
        <div className="lg:w-[80%] mx-auto my-10">
            <ProductList products={productList}/>
        </div>
    );
}