import Image from "next/image";
import men from "../../public/men.png"
import Customer from "./component/customer";
import Showcase from "./component/showcase";

export default function Hero (){
  return(
    <main className="bg-stone-800 text-white max-w-screen-2xl mx-auto">
      <div className="flex flex-col items-center md:flex-row pt-20 pb-20 md:justify-around">
        <Image src={men} alt="menImage" width={500} height={400} className="md:hidden"/>
        <div>
          <h2 className="text-6xl font-bold pt-3 pb-12">Crafting <br />Architectural <br />Wonders</h2>
          <p className="text-gray-300 pb-8 font-semibold">Your Ideas & Dreams Are Treansformed by us Into Long-<br />Lesting, Engineered Buildings.</p>
          <div>
            <a href="/contact"><button className="border-2 border-yellow-600 p-2 pr-12 pl-12 ml-7 mb-5 text-black font-semibold bg-yellow-500 hover:bg-stone-800 hover:text-white">Contect Us</button></a>
            <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank"><button className="border-2 border-yellow-600 p-2 pr-8 pl-7 ml-6 font-semibold bg-stone-800 hover:bg-yellow-500 hover:text-black">Free Consultation</button></a>
            <p className="pt-7 text-gray-300"><span className="text-yellow-600">*</span> All Our Projects Are Curated by Experts.</p>
          </div>
        </div>
        <Image src={men} alt="menImage" width={500} height={400} className="hidden md:block"/>
      </div>
      <Customer/>
      <Showcase/>
    </main>
  )
}