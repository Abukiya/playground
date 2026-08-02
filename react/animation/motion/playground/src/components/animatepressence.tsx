import {motion,AnimatePresence,} from "motion/react"
import {useState } from "react"

export default function Animate_pressence(){
    const [isvisible,setisvisble] = useState(false)
    const modalVariants = {
        visible: { opacity: 1,scale:1,
            ease: "sync",
         },
        hidden: { opacity: 0,scale:0,ease: "sync"}

}

    return(
        <div
        className="relative w-full h-screen overflow-hidden bg-zinc-950 flex flex-col items-center justify-center gap-2"
        >
            <AnimatePresence>
                {
                    isvisible?
                    <motion.div 
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{duration:0.5}}
                    className="box w-20 h-20 bg-blue-700 rounded-md justify-center items-center flex text-white">
                        hello

                    </motion.div>
                    :null
                }

            </AnimatePresence>
            <motion.button
            className="bg-blue-700 px-6 py-2 rounded-md text-white absolute mt-35 cursor-pointer"
            whileTap={{y:2}}
            onClick={()=>setisvisble(!isvisible)}
            >
                {isvisible ? "Hide" : "Show"}

            </motion.button>
        </div>
    )
}