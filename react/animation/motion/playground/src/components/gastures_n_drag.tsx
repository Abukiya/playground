import {motion} from "motion/react";

export default function GesturesAndDrag(){
    return(
        <div className="relative w-full h-screen overflow-hidden bg-zinc-950 flex items-center justify-center">
            <div className="w-80 h-80 border-2 border-blue-600 flex items-center justify-center">
                <motion.div 
                whileHover={{scale:1.2}}
                whileTap={{boxShadow:"0px 0px 8px rgb(255,255,255)", scale:.9}}
                whileDrag={{scale:1.1, rotateZ:10}}

                drag
                dragConstraints={{top:-40, left:-40, right:40, bottom:40}}
                className="box bg-blue-600 w-20 h-20 justify-center items-center flex">
                    HI
                </motion.div>
            </div>
        </div>
    )
}
