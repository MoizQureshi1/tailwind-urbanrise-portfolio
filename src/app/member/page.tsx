import Image from "next/image";
import fmem from "../../../public/fmem.png"
import sman from "../../../public/sman.png"
import tmem from "../../../public/tmem.png"
import fomen from "../../../public/fomen.png"
import fvmem from "../../../public/fvmem.png"
import sixmem from "../../../public/sixmem.png"
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../component/footer";

export default function Member(){
    return(
        <section className=" bg-white text-black max-w-screen-2xl mx-auto">
            <div className="pt-10 pb-24">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="md:ml-24 px-6 ml-10">
                        <div className="border-4 border-yellow-600 mr-80 mb-6"></div>
                        <h2 className="text-4xl font-bold pb-2">Team Members</h2>
                        <p className="font-semibold text-gray-700">Meet The Collaborative Minds of Our Constraction Team</p>
                    </div>
                    <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/"><button className="border-2 border-yellow-300 flex m-10 md:ml-28 ml-14 md:mr-32 mr-32 font-semibold text-yellow-600 hover:bg-yellow-200 p-1 pr-4 pl-4 gap-3 rounded">See All <IoIosArrowForward className="mt-1 text-yellow-400"/></button></a>
                </div>
                <nav className="md:ml-20 ml-1 pt-2 text-center md:text-start">
                    <button className="text-gray-500 hover:text-black focus:border-2 focus:border-black focus:text-black focus:rounded-xl font-semibold p-1 pl-2 pr-2">Civil Engineers</button>
                    <button className="text-gray-500 hover:text-black focus:border-2 focus:border-black focus:text-black focus:rounded-xl font-semibold p-1 pl-2 pr-2 ml-3">Architect</button>
                    <button className="text-gray-500 hover:text-black focus:border-2 focus:border-black focus:text-black focus:rounded-xl font-semibold p-1 pl-2 pr-2 ml-3">Sturactural Engineer</button>                            
                    <button className="text-gray-500 hover:text-black focus:border-2 focus:border-black focus:text-black focus:rounded-xl font-semibold p-1 pl-2 pr-2 ml-3">Interior Designer</button>
                    <button className="text-gray-500 hover:text-black focus:border-2 focus:border-black focus:text-black focus:rounded-xl font-semibold p-1 pl-2 pr-2 ml-3">Project Manager</button>
                </nav>
                <div className="mt-20">
                    <div className="flex flex-col items-center text-center md:text-start md:flex-row md:justify-around">
                        <div className="border-2 flex flex-col items-center md:text-start md:flex-row md:justify-between border-gray-100 rounded-lg hover:border-gray-500 p-4 pr-14">
                            <Image src={fmem} alt="team member" width={70} className="rounded-md"/>
                            <span className="ml-4">
                            <span className="text-2xl font-bold pb-2 ">Ethan Walker <br /></span>
                            <span className="text-gray-500 font-semibold">Civil Engineer</span>
                            </span>
                        </div>
                        <div className="border-2 flex flex-col items-center md:text-start md:flex-row md:justify-between  border-gray-100 rounded-lg hover:border-gray-500 p-4 pr-14 my-8">
                            <Image src={sman} alt="team member" width={70} className="rounded-md"/>
                            <span className="ml-4">
                            <span className="text-2xl font-bold pb-2 ">Eva Mitchell <br /></span>
                            <span className="text-gray-500 font-semibold">Project Engineer</span>
                            </span>
                        </div>
                        <div className="border-2 flex flex-col items-center md:text-start md:flex-row md:justify-between  border-gray-100 rounded-lg hover:border-gray-500 p-4 pr-8">
                            <Image src={tmem} alt="team member" width={70} className="rounded-md"/>
                            <span className="ml-4">
                            <span className="text-2xl font-bold pb-2 ">Jackson Thompson <br /></span>
                            <span className="text-gray-500 font-semibold">Senior Civil Engineer</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center md:text-start md:flex-row md:justify-around mt-20 md:mt-1">
                        <div className="border-2 flex flex-col items-center md:text-start md:flex-row md:justify-between  border-gray-100 rounded-lg hover:border-gray-500 p-4 pr-8">
                            <Image src={fomen} alt="team member" width={70} className="rounded-md"/>
                            <span className="ml-4">
                            <span className="text-2xl font-bold pb-2 ">Williams Carie <br /></span>
                            <span className="text-gray-500 font-semibold">Materials Engineer</span>
                            </span>
                        </div>
                        <div className="border-2 flex flex-col items-center md:text-start md:flex-row md:justify-between  border-gray-100 rounded-lg hover:border-gray-500 p-4 pr-5 my-8">
                            <Image src={fvmem} alt="team member" width={70} className="rounded-md"/>
                            <span className="ml-4">
                            <span className="text-2xl font-bold pb-2 ">Benjamin Carter <br /></span>
                            <span className="text-gray-500 font-semibold">Project Engineer</span>
                            </span>
                        </div>
                        <div className="border-2 flex flex-col items-center md:text-start md:flex-row md:justify-between  border-gray-100 rounded-lg hover:border-gray-500 p-4 pr-8 mr-5">
                            <Image src={sixmem} alt="team member" width={70} className="rounded-md"/>
                            <span className="ml-4">
                            <span className="text-2xl font-bold pb-2 ">Sophia Robinson <br /></span>
                            <span className="text-gray-500 font-semibold">Serveyor</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>        
    )
}