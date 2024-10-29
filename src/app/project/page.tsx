import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import fshow from "../../../public/fshow.png"
import sshow from "../../../public/sshow.png"
import tshow from "../../../public/tshow.png"
import foshow from "../../../public/foshow.png"
import { MdOutlineArrowForward } from "react-icons/md";
import Footer from "../component/footer";

export default function Project (){
    return(
        <main className="h-screen bg-stone-800 text-black  max-w-screen-2xl mx-auto">
            <div className="pt-14 pb-48 bg-stone-800">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="md:ml-24 px-6 ml-10">
                        <div className="border-4 border-yellow-600 mr-96 mb-6"></div>
                        <h2 className="text-4xl font-bold pb-2 text-white">Recent Projects</h2>
                        <p className="font-semibold text-gray-400">Recent Project Showcasing Our Craftsmanship And Innovation In Constraction</p>
                    </div>
                    <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="border-2 border-gray-400 flex m-10 md:ml-28 ml-14 md:mr-32  text-gray-400 hover:bg-yellow-200 p-1 pr-4 pl-4 gap-3 font-semibold rounded">See All <IoIosArrowForward className="mt-1 text-gray-600"/></button></a>
                </div>
                <div className="flex flex-col items-center text-center md:text-start lg:flex-row lg:justify-around mt-10 mr-4">
                    <div className="flex flex-col items-center md:text-start md:flex-row md:justify-between bg-white p-5 ml-6 lg:mt-10">
                        <Image src={fshow} alt="showcasing" width={200} height={100}/>
                        <div className="ml-4">
                            <h2 className="text-4xl font-bold">Interiors Designs</h2>
                            <p className="text-gray-700 font-semibold pt-5">Step Into A World of Captivating <br />Commercial Spaces Designed To <br />Elevate Your Businees.</p>
                            <div className="text-gray-700 font-semibold pt-12">
                                <span>Interrior</span>
                                <span className="pl-5 pr-5">*</span>
                                <span>Oct 2024</span>
                                <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="border-2 border-yellow-300 text-yellow-500 hover:bg-yellow-200 ml-14 mr-20 md:mr-0 mt-4 md:mt-0 p-1 pl-6 pr-6 rounded text-2xl"><MdOutlineArrowForward /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:text-start md:flex-row md:justify-between bg-white p-5 ml-4 mt-10">
                        <Image src={sshow} alt="showcasing" width={200} height={100}/>
                        <div className="ml-4">
                            <h2 className="text-4xl font-bold">Residential Building</h2>
                            <p className="text-gray-700 font-semibold pt-5">Step Into A World of Captivating <br />Commercial Spaces Designed To <br />Elevate Your Businees.</p>
                            <div className="text-gray-700 font-semibold pt-12">
                                <span>Building</span>
                                <span className="pl-5 pr-5">*</span>
                                <span>Oct 2024</span>
                                <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="border-2 border-yellow-300 text-yellow-500 hover:bg-yellow-200 ml-14 mr-20 md:mr-0 mt-4 md:mt-0 p-1 pl-6 pr-6 rounded text-2xl"><MdOutlineArrowForward /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center md:text-start lg:flex-row lg:justify-around mt-10 mr-4">
                    <div className="flex flex-col items-center md:text-start md:flex-row md:justify-between bg-white p-5 ml-6 lg:mt-10">
                        <Image src={tshow} alt="showcasing" width={200} height={100}/>
                        <div className="ml-4">
                            <h2 className="text-3xl font-bold">Commercial Complex</h2>
                            <p className="text-gray-700 font-semibold pt-5">Step Into A World of Captivating <br />Commercial Spaces Designed To <br />Elevate Your Businees.</p>
                            <div className="text-gray-700 font-semibold pt-12">
                                <span>Complex</span>
                                <span className="pl-5 pr-5">*</span>
                                <span>Oct 2024</span>
                                <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="border-2 border-yellow-300 text-yellow-500 hover:bg-yellow-200 ml-14 mr-20 md:mr-0 mt-4 md:mt-0 p-1 pl-6 pr-6 rounded text-2xl"><MdOutlineArrowForward /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center md:text-start md:flex-row md:justify-between bg-white p-5 ml-5 mt-10">
                        <Image src={foshow} alt="showcasing" width={200} height={100}/>
                        <div className="ml-4">
                            <h2 className="text-4xl font-bold">Structural Repair</h2>
                            <p className="text-gray-700 font-semibold pt-5">Step Into A World of Captivating <br />Commercial Spaces Designed To <br />Elevate Your Businees.</p>
                            <div className="text-gray-700 font-semibold pt-12">
                                <span>Complex</span>
                                <span className="pl-5 pr-5">*</span>
                                <span>Oct 2024</span>
                                <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="border-2 border-yellow-300 text-yellow-500 hover:bg-yellow-200 ml-14 mr-20 md:mr-0 mt-4 md:mt-0 p-1 pl-6 pr-6 rounded text-2xl"><MdOutlineArrowForward /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}