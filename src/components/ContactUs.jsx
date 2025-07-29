import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { connectData } from "../assets/assets";
import { z } from "zod";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';
import Title from "./Title"
import toast from "react-hot-toast";

const ContactUs = () => {
  const formEle = useRef();
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const serviceId = import.meta.env.VITE_EMAIL_SERVICES_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const schema = z.object({
    user_name: z.string().min(2, "Username must be at least 3 characters").max(100, "Username must be less than 100 characters"),
    user_email: z.string().email({ message: "Please type a valid email." }),
    message: z.string().min(2, "Username must be less than 2 characters")
  })

  // Send Message Handler 
  const sendMessageHandler = (event) => {
    event.preventDefault()
    setLoading(true);
    const formData = {
      user_name: userName,
      user_email: userEmail,
      message: message
    }
    const validation = schema.safeParse(formData)
    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      return null;
    }
    emailjs.send(serviceId, templateId, formData, {
      publicKey: publicKey
    }).then(
      (result) => { toast.success("Message Has Been Sent"); setLoading(false) },
      (error) => { toast.error("Failed:" + error.text); console.log(error); setLoading(false) }
    ).finally(() => { formEle.current.reset() })
  }

  return (
    <div id="contact" className="py-15 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]">
      <Title title={"Get in touch"} />

      <div className="flex flex-col md:flex-row items-start gap-10">

        {/* text */}
        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-[45%] flex flex-col gap-5">
          <h3 className="w-fit text-4xl font-semibold text-color">Let's talk</h3>
          <p className="text-[#111] dark:text-gray-100">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-[#111] dark:text-gray-100 text-xl">
              <MdEmail className="text-2xl" />
              <p>mostafayassin292@gmail.com</p>
            </div>
            <div className="flex items-center gap-3 text-[#111] dark:text-gray-100 text-xl">
              <FaPhoneVolume className="text-2xl" />
              <p>+201156378208</p>
            </div>
            <div className="flex items-center gap-3 text-[#111] dark:text-gray-100 text-xl">
              <FaLocationDot className="text-2xl" />
              <p>Egypt, Cairo</p>
            </div>
          </div>

          {/* Connect Links */}
          <div className="flex items-center gap-4 flex-wrap">
            {
              connectData.map((link, index) => (
                <a href={link.path} key={index} className="inline-block w-12 h-12 bg-[#ddd] border-2 border-[#454545] p-2 rounded-full transition-all duration-300 hover:scale-105">
                  <img src={link.image} alt={link.alt} />
                </a>
              ))
            }
          </div>

        </motion.div>

        {/* Form */}
        <motion.form initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={sendMessageHandler} ref={formEle} className="w-full md:flex-1 flex flex-col gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-600 font-semibold dark:text-gray-200">Your Name</label>
            <input onChange={(event) => { setUserName(event.target.value) }} value={userName}
              required type="text" id="name" placeholder="Enter your name" name="your_name"
              className="block w-full py-4 px-3 rounded-md bg-[#32323c] text-gray-200 placeholder:text-gray-400 outline-none" />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-gray-600 font-semibold dark:text-gray-200">Your Email</label>
            <input onChange={(event) => { setUserEmail(event.target.value) }} value={userEmail}
              required type="email" id="email" placeholder="Enter your email" name="your_email"
              className="block w-full py-4 px-3 rounded-md bg-[#32323c] text-gray-200 placeholder:text-gray-400 outline-none" />
          </div>
          {/* TextArea */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-gray-600 font-semibold dark:text-gray-200">Write your message here</label>
            <textarea onChange={(event) => { setMessage(event.target.value) }} value={message}
              required type="text" id="message" name="message" placeholder="Enter your message"
              className="block w-full py-4 px-3 rounded-md bg-[#32323c] text-gray-200 placeholder:text-gray-400 outline-none h-[150px]"></textarea>
          </div>

          {/*  Submit Input */}
          <button type="submit" disabled={loading && true} className={`w-[160px] h-[45px] text-white font-semibold bg-color py-2.5 px-7 rounded-md transition-all duration-300 hover:rounded-xl ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>
            {
              loading ? "Loading ..." : "Send Message"
            }
          </button>
        </motion.form>

      </div>

    </div>
  )
}

export default ContactUs