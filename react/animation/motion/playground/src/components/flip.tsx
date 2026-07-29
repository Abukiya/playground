import {motion } from "motion/react"
import {useState } from "react"
const items =[1,2,3,4,4,5,]
//
export default function Flip(){
    const [grid,setGrid] = useState(false)
    return(
        <div className="relative w-full h-screen overflow-hidden bg-zinc-950 flex flex-col gap-2">
            <div 
            className={`${grid ? "grid grid-cols-3" : "flex flex-col"} gap-.5 bg-blue-100`}>
                {items.map((item,index)=>(
                    <motion.div 
                    key={index}
                    
                    className="box  h-15 bg-blue-700 rounded-lg justify-center items-center flex text-white m-1"
                    layout
                    transition={{duration:1}}
                    >
                        

                    </motion.div>
                    ))
                }
            </div>
            <motion.button
            className="bg-blue-700 px-6 py-2 rounded-md text-white mt-3 cursor-pointer"
            whileTap={{y:2}}
            onClick={()=>setGrid(!grid)}
            layout
            >
                {grid ? "flex" : "grid"}
            </motion.button>
        </div>
    )
}