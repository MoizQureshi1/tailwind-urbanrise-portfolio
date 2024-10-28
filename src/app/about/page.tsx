import Image from "next/image";
import fourpic from "../../../public/fourpic.png"
import Footer from "../component/footer";
export default function Aboutpage (){
    return(
        <main className=" bg-white text-black  max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center md:flex-row md:justify-around pt-24 mr-16 ml-10 pb-20">
                <Image src={fourpic} alt="fourPic" width={500} height={300}/>
                <div className="pl-10 text-center md:text-start">
                    <div className="border-4 mr-96 border-black mt-14"></div>
                    <h3 className="text-black text-5xl font-bold pt-9">Take a Glimpse Into Our<br /> Contraction Voyage</h3>
                    <p className="text-gray-600 font-semibold pt-10">A Traiblazer in the Contraction Industry. Our Journey is One of Passion,<br /> Dedication, And A Relentless Pursuit of Excellence.</p>
                    <div className="flex justify-between mr-16 mt-8">
                        <div>
                            <h2 className="text-3xl font-bold">600+</h2>
                            <p className="text-gray-600">Worked With 600+ <br/>Companies</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">800+</h2>
                            <p className="text-gray-600">Projects Completed <br/>Successfully</p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold">99%</h2>
                            <p className="text-gray-600">We Stand With 99% <br/>Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}