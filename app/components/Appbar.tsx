"use client";
import { signIn ,signOut, useSession} from "next-auth/react";
import Link from "next/link";

export default function Appbar() {
    const session=useSession();

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">My App</div>
      <div className="flex space-x-9">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        <div>  {session.data?.user && <button className="text-xl rounded-xl m-px-8 bg-slate-700 hover:text-gray-400 cursor-pointer" onClick={() => signOut()}>Logout</button>}
        {!session.data?.user && <button className="text-xl rounded-xl m-px-8 bg-slate-700 hover:text-gray-400 cursor-pointer" onClick={() => signIn()}>Login/Create</button>}
        </div>
      </div>
    </div>
  );
}
// This is a simple Appbar component using Tailwind CSS for styling.