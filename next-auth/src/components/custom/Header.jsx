import Link from "next/link";
import AuthButton from "./AuthButton";

export default function Header({getSession}) {
    const user = getSession?.user;
    return (
        <div className=" px-5 min-w-full flex justify-between items-center shadow-md bg-slate-900" >
            <div className="p-5">
                <h1 className="text-3xl">Shoppy</h1>
            </div>
            
            <div className="flex justify-center items-center space-x-8">
                {user && <div className="text-xl flex justify-center items-center space-x-8">{user.name}</div>}
            <ul className="flex justify-center items-center space-x-8">
                <li>
                    <Link className="text-xl" href={'/products'}>Products</Link>
                </li>
                <li>
                    <Link className="text-xl" href={'/cart'}>Cart</Link>
                </li>
            </ul>
            <div>
                <AuthButton getSession={getSession}/>
            </div>
            </div>
        </div>
    );
}