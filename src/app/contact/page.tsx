import Image from "next/image";
import contact from "../../../public/contact.png";
import Footer from "../component/footer";

export default function Contact() {
  return (
    <section className="max-w-screen-2xl mx-auto">
    <div className="flex flex-col lg:flex-row md:pr-40 lg:pr-20 pb-32 bg-stone-800">
      <div className="flex-1 flex items-center justify-center lg:pl-52 lg:pt-24 md:pl-52 md:pt-24 pt-24 pl-6 bg-stone-800">
        <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input className="border border-gray-300 rounded-lg p-2 w-full" type="text" id="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input className="border border-gray-300 rounded-lg p-2 w-full" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea className="border border-gray-300 rounded-lg p-2 w-full" id="message" required></textarea>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white p-2 pl-10 pr-10 text-lg font-semibold rounded-md hover:bg-blue-600">
            Send
          </button>
          <p className=" text-center pt-5 font-semibold text-gray-600 ">Or reach out to directly at:</p>
          <p className="text-center font-semibold text-lg ">moizqureshi782008@gmail.com</p>
        </form>
      </div>
      <div className="flex-1 pt-24 sm:pl-52 lg:pl-3 mx-32 md:mx-1 hidden md:block lg:block xl:block ">
        <Image src={contact} alt="Contact Image" width={320} height={200} className="rounded "/>
      </div>
    </div>
    <Footer/>
    </section>
  );
}