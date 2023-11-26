"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="">
      <section className="text-gray-600 body-font bg-center  bg-cover custom-image h-[600px] ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white ">
              <p className="text">I AM</p>
              <Typewriter
                options={{
                  strings: [
                    "AI-EXPERT",
                    "BLOCK-CHAIN DEVELOPER",
                    "UI/UX DESIGNER",
                    "WEB-DEVELOPER",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-white font-semibold">
              Copper mug try-hard pitchfork pour-over freegan heirloom <br />
              air plant cold-pressed tacos poke beard tote bag. Heirloom <br />
              park mlkshk tote bag selvage hot chicken authentic tumeric <br />
              truffaut hexagon try-hard chambray.
            </p>
            <Link href={"./Contacts"

            }> 
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-lg">
                Contact Us
              </button>
            </div>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-12">
            <Image
              className="object-cover object-center  ml-24 mt-6 mx-auto w-[15rem] h-[15rem]  rounded-full shadow-2xl shadow-current "
              alt="hero"
              width={500}
              height={300}
              src="/sultan.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  ); 
}