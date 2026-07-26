import {motion} from "motion/react";


export default function session(){
    return(
        <motion.div className="h-50 w-50 bg-blue-600 mt-5"
        initial ={{scale:0, opacity:0}}
        animate ={{scale:1, opacity:1}}
        // transition={{duration:1,}}
        whileHover={{scale:1.3}}
        whileTap={{scale:.8}}

        >
            

        </motion.div>

        

    );
}
