import { FaCss3Alt, FaDatabase, FaHtml5, FaJava, FaJsSquare, FaPhp } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiPowerbi, SiUipath } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"
import { GiDuration } from "react-icons/gi"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div>
      <div className="pb-24">
        <motion.h2
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}>
                <FaJava className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4">
                <FaHtml5 className="text-7xl text-orange-600" title="HTML5" />

            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <FaCss3Alt className="text-7xl text-blue-600" title="CSS3" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
            <FaJsSquare className="text-7xl text-yellow-500" title="JavaScript" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)}
            className="p-4">
            <FaPhp className="text-7xl text-purple-600" title="PHP" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3.5)}
            className="p-4">
            <FaDatabase className="text-7xl text-blue-800" title="MySQL" />
            </motion.div>
            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4">
            <SiUipath className="text-7xl text-blue-400" title="UiPath" />
            </motion.div>
            <motion.div 
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4">
            <SiPowerbi className="text-7xl text-yellow-600" title="Power BI" />
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
