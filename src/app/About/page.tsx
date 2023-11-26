import React from 'react'
import { PhoneOutgoing } from 'lucide-react';
import Link from 'next/link';

export default function About () {
  return (
    <div><section className="text-gray-600 body-font bg-gradient-to-b from-blue-800 to-blue-400">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
     About me
        </h1>
        <p className="mb-8 leading-relaxed font-serif text-stone-300">
        I am a dynamic Full Stack Developer equipped with a versatile skill set that spans across multiple domains of technology. Proficient in Python, I bring a robust understanding of blockchain technology, coupled with expertise in AI and TypeScript. My mastery extends to crafting seamless user interfaces using HTML, CSS, Tailwind CSS, and leveraging the power of frameworks like Next.js 13 for cutting-edge web development.

Beyond code, my toolkit includes a keen eye for design, as demonstrated by my proficiency in Figma and Shadcn UI. This holistic approach enables me to create not just functional, but visually captivating digital experiences.

My commitment to staying at the forefront of technology ensures that I am adept at harnessing the latest tools and frameworks. With a passion for innovation and a track record of successful projects, I am poised to bring a unique blend of technical prowess and design finesse to any development team.
        </p>
        <Link href={"https://api.whatsapp.com/send?phone=923115281717"} target='_blank' >
        <div className="flex justify-center rounded-md">
                
          <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-400 rounded text-xl">
            Whatsapp 
            <PhoneOutgoing className='text-sm ml-2 '/>
           
            
          </button>
          
        </div>
        </Link>
      </div>
      <div className=" h-[350px] mr-10 ">
        <img
          className="object-cover object-center rounded-2xl h-[300px] w-[250px] "
          alt="hero"
          src="/sultan.jpg"
        />
        <h2 className=' text-black font-serif w-[180px] flex justify-center shadow-2xl shadow-slate-700 rounded-xl mt-3 ml-9  bg-slate-300 p-2'>Ameer Sultan Abbasi</h2>
      </div>
    </div>
  </section>
  </div>

  )
}

