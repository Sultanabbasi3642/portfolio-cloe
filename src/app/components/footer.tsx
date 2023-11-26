import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram } from 'lucide-react';



export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={"/WhatsApp Image 2023-11-13 at 9.56.41 PM.jpeg"}
              height={40}
              width={40}
              alt={"logo"}
              className="rounded-full"
            />
            <span className="ml-3 text-xl">WS-Educates</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4  ">
            © 2023 ws-educates
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500"></a>
            <Link target="_blank" href={" https://rb.gy/h0ev50"}>
              <Instagram className=" text-3xl hover:text-black" />
            </Link>
          </span>
        </div>
      </footer>
    </div>

    
    
  );
}