import { motion, } from "motion/react"
import { useState } from "react"

export default function OnclickScale(){
    const [state,setState] =useState(false);
    // function onclick(){setState(!state)}
    return (
        <div className="relative w-full h-screen overflow-hidden bg-zinc-950 flex items-center justify-center gap-2">
        <motion.div className ="h-30 w-30 bg-blue-600 justify-center flex items-center "
        animate={ {scale: state?1:2,transition:{duration:1}}}
        onClick={() => setState(!state)}
        >
            <p>
                hi
            </p>

        </motion.div>
        </div>
    )
}

