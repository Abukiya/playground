import { motion, } from "motion/react"

export default function Fadenslide(){
    return (
        <div className="relative w-full h-screen overflow-hidden bg-zinc-950 flex items-center justify-center">
        <motion.div className ="h-30 w-30 bg-blue-600 justify-center flex items-center "
        initial={{opacity:0, y:90}}
        animate={{opacity:1, y:0}}
        transition={{duration:1,}}
        >
            <p>
                hi
            </p>

        </motion.div>
        </div>
    )
}

