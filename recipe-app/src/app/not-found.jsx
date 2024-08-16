import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen space-y-10">
            <h4 className="text-6xl text-red-900">404:Page not Found</h4>
            <Link href={'/'} className="text-blue-900 underline text-3xl">Home</Link>
        </div>
    );
}