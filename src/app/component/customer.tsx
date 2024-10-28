import Image from "next/image";
import fmem from "../../../public/fmem.png"
import fomen from "../../../public/fomen.png"
import fvmem from "../../../public/fvmem.png"
import { IoIosArrowForward } from "react-icons/io";

export default function Customer (){
    return(
        <section className=" bg-white max-w-screen-2xl mx-auto">
            <div className="pt-16 pb-32">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="md:ml-24 px-6 ml-10">
                        <div className="border-4 border-yellow-600 mr-96 mb-6 "></div>
                        <h2 className="text-4xl font-bold pb-2 text-black">Customer Feedbacks</h2>
                        <p className="font-semibold text-gray-700">Don t Just Take Our Word for it; Hear Directly Form Our Valued Clients</p>
                    </div>
                    <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="border-2 border-yellow-300  flex m-10 mr-16 md:ml-28 ml-14 md:mr-32 font-semibold text-yellow-600 hover:bg-yellow-200 p-1 pr-4 pl-4 gap-3 rounded">See All <IoIosArrowForward className="mt-1 text-yellow-400"/></button></a>
                </div>
                <div className="flex flex-col items-center text-center md:text-start md:flex-row md:justify-around mt-5 mx-28">
                    <div>
                        <Image src={fmem} alt="threePic" width={50} height={30} className="mt-14 rounded-full mb-4 mx-36 md:mx-1"/>
                        <p className="text-gray-600 pb-4 font-semibold">I Recently Had The Privilege of Having<br />[Constraction Company Name] Build My Dream <br />Home, And I Couldn t Be Happier Wiht The <br />Results. The Entire Process.</p>
                        <span className="text-gray-800 font-bold">-Mary Johnson <br /></span>
                        <span className="text-gray-600 font-semibold">Homeonwer</span>
                    </div>
                    <div>
                        <Image src={fomen} alt="threePic" width={50} height={30} className="mt-14 rounded-full mb-4 mx-36 md:mx-1"/>
                        <p className="text-gray-600 pb-4 font-semibold">I Recently Had The Privilege of Having<br />[Constraction Company Name] Build My Dream <br />Home, And I Couldn t Be Happier Wiht The <br />Results. The Entire Process.</p>
                        <span className="text-gray-800 font-bold">-David Lee <br /></span>
                        <span className="text-gray-600 font-semibold">Property Developer</span> 
                    </div>      
                    <div className="">
                        <Image src={fvmem} alt="threePic" width={50} height={30} className="mt-14 rounded-full mb-4 mx-36 md:mx-1"/>
                        <p className="text-gray-600 pb-4 font-semibold">I Recently Had The Privilege of Having<br />[Constraction Company Name] Build My Dream <br />Home, And I Couldn t Be Happier Wiht The <br />Results. The Entire Process.</p>
                        <span className="text-gray-800 font-bold">-Sarah Miller <br /></span>
                        <span className="text-gray-600 font-semibold">Hotel Onwer</span>
                    </div>         
                </div>
            </div>    
        </section>
    )
}