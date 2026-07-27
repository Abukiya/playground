import { motion,stagger } from "motion/react"
import { useState } from "react"

export default function OnclickScale(){
    // function onclick(){setState(!state)}
    const list = {
        hidden:{
            opacity:0,
            scale:0,
            transition:{
                when:"afterChildren",
                delayChildren : stagger(0.15 ,{ from: "last" } )
            }
            
        },
        visible:{
            opacity:1,
            scale:1,
            transition:{
                when:"beforeChildren",
                delayChildren : stagger(0.15)
            }
        }
    }
    const items ={
        hidden:{opacity:0,y:20},
        visible:{opacity:1,y:0}
    }
    const [isvisible, setisvisible] = useState(true)
    return (
        <div className="relative w-full h-screen overflow-hidden bg-zinc-950 flex items-center justify-center gap-2">
            <motion.ul className="bg-blue-100 gap-1.5 flex flex-wrap  p-2 rounded-lg "
            variants={list}
            animate={isvisible ? "visible" : "hidden"}
            >
                {[0,1,2,3,4].map((i)=>(
                    <motion.li className="w-20 h-20 bg-blue-500 flex items-center justify-center rounded-lg text-white text-2xl font-bold"
                    variants={items}
                    whileHover={{scale:1.2}}
                    whileTap={{scale:.9}}
                    >
                        <p>
                            {i + 1}
                        </p>
                    </motion.li> 
                ))}

            </motion.ul>

            <motion.button className="absolute bottom-10 bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={()=>setisvisible(!isvisible)}
            >
                {isvisible ? "Hide" : "Show"}
            </motion.button>



        </div>
    )
}

