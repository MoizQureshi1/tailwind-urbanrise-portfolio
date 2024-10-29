import { IoIosArrowForward } from "react-icons/io";
import { PiBuildingsDuotone } from "react-icons/pi";
import Footer from "../component/footer";


export default function Services(){
    return(
        <section className=" bg-white text-black max-w-screen-2xl mx-auto">
            <div className="pt-16 pb-24">
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="md:ml-24 px-6 ml-10">
                        <div className="border-4 border-yellow-600 mr-96 mb-6"></div>
                        <h2 className="text-4xl font-bold pb-2">Our Services</h2>
                        <p className="font-semibold text-gray-700">Take A Look At The Variety of Services We Prpvide To Make Your Dreams A Reality</p>
                    </div>
                    <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="border-2 border-yellow-300 flex m-10 md:ml-28 ml-14 md:mr-32  mr-32 font-semibold text-yellow-600 hover:bg-yellow-200 p-1 pr-4 pl-4 gap-3 rounded">See All <IoIosArrowForward className="mt-1 text-yellow-400"/></button></a>
                </div>
                <div className="flex flex-col items-center text-center md:text-start md:flex-row md:justify-around mt-20 ml-3">
                    <div className="md:ml-20">
                        <PiBuildingsDuotone className="text-5xl text-gray-400 mx-32 md:mx-1"/>
                        <h2 className="text-2xl font-bold pt-2 pb-1">Residential</h2>
                        <p className="text-gray-600 pb-4 font-semibold">Degisn And Constraction of Custon Homes,<br />Villas, Apartments, And Townhouses</p>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="text-yellow-600 font-semibold">Learn More</button></a>
                    </div>
                    <div className="py-5">
                        <PiBuildingsDuotone className="text-5xl text-gray-400 mx-32 md:mx-1"/>
                        <h2 className="text-2xl font-bold pt-2 pb-1">Commercial</h2>
                        <p className="text-gray-600 pb-4 font-semibold">Building Offices, Retail Spaces, And Restaurants, <br />Wherehouses, Commercial Structures</p>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="text-yellow-600 font-semibold">Learn More</button></a>
                    </div>
                    <div className="md:mr-20">
                        <PiBuildingsDuotone className="text-5xl text-gray-400 mx-32 md:mx-1"/>
                        <h2 className="text-2xl font-bold pt-2 pb-1">Renovations</h2>
                        <p className="text-gray-600 pb-4 font-semibold">Quality Refurbishment, Renovation, And <br />Modernization Of Your Existing Properties</p>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="text-yellow-600 font-semibold">Learn More</button></a>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center md:text-start md:flex-row md:justify-around mt-20 ml-3">
                    <div className="md:ml-20">
                        <PiBuildingsDuotone className="text-5xl text-gray-400 mx-32 md:mx-1"/>
                        <h2 className="text-2xl font-bold pt-2 pb-1">Landscaping</h2>
                        <p className="text-gray-600 pb-4 font-semibold">Creating Beautiful Outdoor Landscaping, <br />Gardens, And Creational Areas.</p>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="text-yellow-600 font-semibold">Learn More</button></a>
                    </div>
                    <div className="mr-5 py-5 ml-3">
                        <PiBuildingsDuotone className="text-5xl text-gray-400 mx-32 md:mx-1"/>
                        <h2 className="text-2xl font-bold pt-2 pb-1">Interiors Designs</h2>
                        <p className="text-gray-600 pb-4 font-semibold">Design And Constraction of Offices Interious, <br />Retial Stores, And Commercial Spaces.</p>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="text-yellow-600 font-semibold">Learn More</button></a>
                    </div>
                    <div className="md:mr-10 ml-2">
                        <PiBuildingsDuotone className="text-5xl text-gray-400 mx-32 md:mx-1"/>
                        <h2 className="text-2xl font-bold pt-2 pb-1">Structural Repair</h2>
                        <p className="text-gray-600 pb-4 font-semibold">Fully Strengthening And Repairing Your Existing <br />Structures for Safety And Longevity.</p>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" target="blank"><button className="text-yellow-600 font-semibold">Learn More</button></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )
}