import Title from './Title';
import { motion } from 'motion/react';

const AboutMe = () => {
  return (
    <div id='about' className='py-20 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw] flex flex-col items-center'>

      <Title title={"About Me"} />

      <div className='p-5 overflow-hidden w-full lg:w-[1000px] bg-[#13141b] rounded-md shadow-md shadow-[#171717]'>
        <code className='text-[18px] flex flex-col gap-2'>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5}} 
          ><span className='text-[#9cdcfe]'>1.</span> <span className='text-fuchsia-600'>export default</span> <span className='text-blue-700'>function</span> <span className='text-amber-600'>AboutMe() {"{"}</span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:0.2}} 
          ><span className='text-[#9cdcfe]'>2.</span> <span className='text-blue-700'>Let</span> <span className='text-green-600'>WhoAmI</span> <span className='text-[#9cdcfe]'>=</span> <span className='text-fuchsia-600'>{"{"}</span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:0.4}} 
          ><span className='text-[#9cdcfe]'>3.</span> <span className='text-sky-400'>myName:</span> <span className='text-[#E99287]'>"Mostafa AboElenein"</span> </motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:0.6}} 
          ><span className='text-[#9cdcfe]'>4.</span> <span className='text-sky-400'>aboutMe:</span> <span className='text-[#9cdcfe]'>{"["}</span> </motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:0.8}} 
          ><span className='text-[#9cdcfe]'>5.</span> <span className='text-[#E99287]'>"I'm a passionate Frontend Developer with a strong focus <br></br>&nbsp;&nbsp;&nbsp; on creating interactive, user-friendly web applications<br></br>&nbsp;&nbsp;&nbsp; using modern technologies like React.js,Next.js, Tailwind CSS,<br></br>&nbsp;&nbsp;&nbsp; and JavaScript. I enjoy transforming creative designs into responsive<br></br>&nbsp;&nbsp;&nbsp; and functional interfaces."</span> </motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:1}} 
          ><span className='text-[#9cdcfe]'>6.</span> <span className='text-[#E99287]'>"In addition to my frontend expertise, I also have working <br></br>&nbsp;&nbsp;&nbsp; knowledge of backend technologies including Node.js,<br></br>&nbsp;&nbsp;&nbsp; Express.js, and MongoDB — which allows me to collaborate effectively<br></br>&nbsp;&nbsp;&nbsp; across the full stack."</span> </motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:1.2}} 
          ><span className='text-[#9cdcfe]'>7.</span> <span className='text-[#E99287]'>I'm always eager to learn new tools, improve my skills, and<br></br>&nbsp;&nbsp;&nbsp; build clean, efficient, and scalable web experiences."</span> </motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:1.4}} 
          ><span className='text-[#9cdcfe]'>8.</span> <span className='text-[#9cdcfe]'>{"]"}</span> </motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:1.6}} 
          ><span className='text-[#9cdcfe]'>9.</span> <span className='text-sky-400'>skills: <span className='text-[#9cdcfe]'>{"{"}</span></span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:1.7}} 
          ><span className='text-[#9cdcfe]'>10.</span> <span className='text-[#9cdcfe]'>&nbsp;Programming Languages:</span> <span className='text-[#9cdcfe]'>{"["}</span> <span className='text-[#E99287]'>"JavaScript", "TypeScript"</span> <span className='text-[#9cdcfe]'>{"]"},</span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:1.8}} 
          ><span className='text-[#9cdcfe]'>11.</span> <span className='text-[#9cdcfe]'>&nbsp;frontEnd:</span> <span className='text-[#9cdcfe]'>{"["}</span> <span className='text-[#E99287]'>"HTML5", "CSS3", "Saas" , "BootStrap", "Tailwind",<br></br>&nbsp;&nbsp;&nbsp; "JS", "jQuery","React.js", "Next.js",<br></br>&nbsp;&nbsp;&nbsp; "Redux Toolkit", "ContextAPI", "Framer Motion"</span> <span className='text-[#9cdcfe]'>{"]"},</span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:1.9}} 
          ><span className='text-[#9cdcfe]'>12.</span> <span className='text-[#9cdcfe]'>&nbsp;backEnd:</span> <span className='text-[#9cdcfe]'>{"["}</span> <span className='text-[#E99287]'>"Node.js", "Express.js", "MongoDB"</span> <span className='text-[#9cdcfe]'>{"]"}</span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:2}} 
          ><span className='text-[#9cdcfe]'>12.</span> <span className='text-sky-400'>&nbsp;&nbsp;<span className='text-[#9cdcfe]'>{"}"}</span></span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:2.2}} 
          ><span className='text-[#9cdcfe]'>13.</span> <span className='text-fuchsia-600'>&nbsp;{"}"}</span></motion.div>
          <motion.div initial={{x:-100, opacity: 0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5, delay:2.4}} 
          ><span className='text-[#9cdcfe]'>14.</span>  <span className='text-amber-600'>{"}"}</span></motion.div>

        </code>
      </div>

    </div>
  )
}

export default AboutMe