import Image from "next/image";
import Link from "next/link";
import Image4 from "@/assets/Images/ImageLogo.png";
import Hero from "@/components/landingpage/Hero";
import Tagline from "@/components/landingpage/Tagline";
import Nft from "@/components/landingpage/Nft";
import Authors from "@/components/landingpage/Authors";
import Banner from "@/components/landingpage/Banner";
import Community from "@/components/landingpage/Community";
import Partener from "@/components/landingpage/Partener";
import Footer from "@/components/landingpage/Footer";

export default function landing() {
  return (
     <>
               <div className="flex justify-between h-16 items-center">
                 <div className="flex items-center">
                   <Link href="/">
                     <span className="flex items-center cursor-pointer">
                       <Image
                         src={Image4}
                         alt="Logo"
                         width={24}
                         height={24}
                         className="h-9 w-9"
                       />
                       {/* </div> */}
                       <span className="ml-2 text-[#0F265C] text-lg font-medium">
                         ChainLib
                       </span>
                     </span>
                   </Link>
                 </div>
     
                 {/* Desktop Navigation */}
                 <nav className="hidden md:flex space-x-8">
                   <Link href="/" className="text-gray-500 hover:text-gray-900">
                     Home
                   </Link>
                   <Link href="/books" className="text-gray-500 font-medium hover:text-gray-900">
                     Books
                   </Link>
                   <Link href="/how-it-works" className="text-gray-500 font-medium hover:text-gray-900">
                     How It Works
                   </Link>
                   <Link
                     href="/about-us"
                     className="text-gray-500 hover:text-gray-900"
                   >
                     About ChainLib
                   </Link>
                 </nav>
     
                 <div className="hidden md:flex items-center space-x-4">
                   <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                     Log In
                   </button>
                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                     Sign Up
                   </button>
                 </div>
               </div>

       <Hero />
       <Tagline />
       <Nft />
       <Banner />
       <Authors />
       <Community />
       <Partener />
       <Footer />
     </>
  );
}