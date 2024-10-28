import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

export default function Footer (){
    return(
        <footer className="bg-white max-w-screen-2xl mx-auto">
            <hr />
            <div className="pt-12 pb-6 flex flex-col items-center md:flex-row justify-around">
                <div className="text-center md:text-start">
                    <h2 className="text-3xl font-bold text-black">Urban<span className="text-yellow-500">Rise</span></h2>
                    <p className="text-gray-600 font-semibold pt-2">We Are More than Just Builders; We Are Creators <br /> of Architectural Marveis. With a Passion For <br />Excellence And An Unwavering Commitment To <br />Quality</p>
                </div>
                <div className="flex gap-10 mt-6 text-gray-500 font-semibold">
                    <div className="pr-8">
                        <h2 className="text-xl font-bold text-gray-800 pb-4">Company</h2>
                        <a href="/about" className="hover:underline">About Us</a><br />
                        <a href="/project" className="hover:underline">Projects</a><br />
                        <a href="/services" className="hover:underline">Services</a><br />
                        <a href="/member" className="hover:underline">Our Team</a>
                    </div>
                    <div className="pr-8">
                        <h2 className="text-xl font-bold text-gray-800 pb-4">Help</h2>
                        <a href="/contact" className="hover:underline">Contact Us</a><br />
                        <a href="/contact" className="hover:underline">FAQs</a><br />
                        <a href="/contact" className="hover:underline">Support</a><br />
                        <a href="/contact" className="hover:underline">Feedback</a>
                    </div>
                    <div className="pr-8">
                        <h2 className="text-xl font-bold text-gray-800 pb-4">Orders</h2>
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="hover:underline">Privacy</a><br />
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="hover:underline">Terms</a><br />
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="hover:underline">Cookie</a><br />
                        <a href="https://freeuiresources.com/free-construction-landing-page-template-figma/" className="hover:underline">Policies</a>
                    </div>    
                </div>
            </div>
            <div className="flex flex-col items-center md:items-start md:ml-40">
            <div className="flex gap-5 py-4 text-2xl">
                <a href="https://www.facebook.com/profile.php?id=100089981983705" target="blank" className="border-2 text-black border-gray-500 hover:bg-gray-300 p-2 rounded-full"><FaFacebookF /></a>
                <a href="https://www.linkedin.com/in/moiz-qureshi-0884592b9/" target="blank" className="border-2 text-black border-gray-500 hover:bg-gray-300 p-2 rounded-full"><FaLinkedinIn /></a>
                <a href="https://www.youtube.com/@solve-swift" target="blank" className="border-2 text-black border-gray-500 hover:bg-gray-300 p-2 rounded-full"><ImYoutube2 /></a>
            </div>
            <p className="md:ml-80 md:mb-10 md:text-lg text-md text-gray-600 font-bold">Copyright &copy; 2024 Adventour.</p>
            </div>
        </footer>
    )
}