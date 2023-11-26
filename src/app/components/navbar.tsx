import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DownloadCloud } from 'lucide-react';
import Projects from "../projects/page";


export default function Navbar() {
  return (
    <div className="-m-2 sticky top-0 z-50 bg-gray-200 ">
      <header className="text-gray-600 body-font">
        <div className=" container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-blue-600 mb-4 md:mb-0">
            <Image
              src={"/WhatsApp Image 2023-11-13 at 9.56.41 PM.jpeg"}
              height={60}
              width={60}
              alt={"logo"}
              className="rounded-full"
            />
            <span className="ml-3 text-xl bg-gradient-to-r from-black to-yellow-700 p-2 rounded-md text-white ">
              WS-Educates
            </span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-5 text-black hover:text-gray-900 hover:underline font-semibold"
            >
              Home
            </Link>
            <div><Projects /></div>
          
            <Link
              href={"./About"}
              className="mr-5 text-black hover:text-gray-900 hover:underline font-semibold"
            >
              About
            </Link>

            <Link
              href={"./contacts"}
              className="mr-5 text-black hover:text-gray-900 hover:underline font-semibold"
            >
              Contacts
            </Link>
          </nav>

          <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded-md text-base mt-4 md:mt-0 bg-indigo-700 font-semibold text-white">
            <a href="/My_CV.pdf">Download CV</a>
            <DownloadCloud className="text-xl ml-2" />
          </button>
        </div>
      </header>
    </div>

    // ==========================================================================================

    // <div className="bg-gradient-to-r from-purple-300 to-cyan-200 h-[100px] flex  ">
    //   <div className="flex items-center">
    //     <Image
    //       className=" rounded-full  ml-6"
    //       src={"/WhatsApp Image 2023-11-13 at 9.56.41 PM.jpeg"}
    //       height={60}
    //       width={60}
    //       alt="baap ha tera"
    //     />
    //     <div className="flex ml-4 font-bold text-2xl rounded-md p-3 bg-gradient-to-r from-yellow-500 to-black">
    //       <p className="text-white">WS-Educates</p>
    //     </div>
    //   </div>
    //   <div className=" ml-20 flex items-center justify-between w-[300px] ">
    //     <Link href={"/"} className="font-semibold hover:underline text-lg">
    //       Home
    //     </Link>
    //     <Link href={"#"} className="font-semibold hover:underline text-lg">
    //       Projects
    //     </Link>
    //     <Link href={"#"} className="font-semibold hover:underline text-lg">
    //       About
    //     </Link>
    //     <Link href={"#"} className="font-semibold hover:underline text-lg">
    //       Contacts
    //     </Link>
    //   </div>
    //   <div className="bg-green-400 ml-[460px] flex items-center rounded-lg text-white font-bold hover:bg-green-800 h-fit mt-7 p-3  ">
    //       <button>DOWNLOAD CV</button>
    //     <Link href={"/My_CV.pdf"}>
    //       <FaCloudDownloadAlt className="ml-2 text-xl" />
    //     </Link>
    //   </div>
    // </div>
  );
}