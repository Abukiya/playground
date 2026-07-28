import {motion,stagger} from "motion/react"
import { useState } from "react"

export default function Menu(){
    const [isvisible, setisvisible] = useState(true)
    const items = [1,2,3,4,5]

    const listVariants = {
        hidden:{
            opacity:0,
            scale:0,
            transition:{
                when:"afterChildren",
                delayChildren:stagger(0.3, {from:"last"})
            }
        },
        visible:{
            opacity:1,
            scale:1,
            transition:{
                when:"beforeChildren",
                delayChildren:stagger(0.3)}
        }
    }
    const itemVariants = {
        hidden:{
            opacity:0,
            x:25
        },
        visible:{
            opacity:1,
            x:0,
        } 
    }

    return (
        <div>
            <motion.ul className="w-50 h-70 bg-blue-300 flex flex-col gap-4"
            variants={listVariants}
            animate={isvisible? "visible":"hidden"}
            
            >
                {items.map((item)=>(
                    <motion.li className="bg-slate-300 hover:bg-slate-400 cursor-pointer py-2 px-4 rounded-lg"
                    
                    // animate={isvisible? "visible":"hidden"}
                    variants={itemVariants}
                    whileHover={{scale:1.2}} 
                    whileTap={{scale:0.9}}>
                        <p>
                            {item}
                        </p>
                    </motion.li>
                    )
                )
                }
            </motion.ul>

            <motion.button className="absolute bottom-10 bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={()=>setisvisible(!isvisible)}
            >
                {isvisible ? "Hide" : "Show"}
            </motion.button>

        </div>
    )
}