import Image from "next/image";
import boypic from "../../../public/boypic.png"
import Footer from "./footer";

export default function Showcase () {
    return(
        <section className="bg-stone-800  max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center md:flex-row md:justify-around md:mr-24 text-white">
                <div className="pt-32 md:p-20">
                    <div className="border-4 border-yellow-600 mr-96 mb-6"></div>
                    <h2 className="text-4xl font-bold pb-2">Let s Build Together</h2>
                    <p className="font-semibold text-gray-300">Contact Us If You Have Anything In Mind, We Will Help You Build.</p>
                    <a href="/contact"><button className="border-2 border-yellow-600 p-2 pr-12 pl-12 text-black font-semibold bg-yellow-500 hover:bg-stone-800 hover:text-white md:ml-8 mt-10">Contect Us</button></a>
                    <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank"><button className="border-2 border-yellow-600 p-2 pr-8 pl-7 ml-7 font-semibold bg-stone-800 hover:bg-yellow-500 hover:text-black mt-10">Free Consultation</button></a>
                </div>
                <Image src={boypic} alt="Boypic" width={300} className="mt-16 mb-16"/>
            </div>
            <Footer/>
        </section>
    )
}