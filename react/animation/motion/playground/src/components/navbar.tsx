"use client";
import {useState} from "react"
import {motion} from "motion/react"
import { Link } from "react-router-dom"

export default function Navbar(){

const navItems =[
    {
        title:"Home",
        href:"/"
    },
    {
        title:"About",
        href:"/about"
    },
    {
        title:"Contact",
        href:"/contact"
    },
    {
        title:"Login",
        href:"/login"
    }
]
const [hovered,setHovered]= useState<number | null>(null);

return(
    <div className="py-40">
        <nav className="max-w-4xl mx-auto bg-gray-100 rounded-full px-2 py-1 flex">
            {navItems.map((item, index) => (
                <Link key={index} to={item.href} className="py-3 relative w-full inline-block text-center text-xs text-neutral-500"
                onMouseEnter={()=>setHovered(index)}
                onMouseLeave={()=>setHovered(null)}
                >
                    {hovered===index && (
                        <motion.div 
                        layoutId="Hover"
                        className="absolute inset-0 rounded-full w-full h-full bg-black  "></motion.div>
                    )

                    }
                    <span className="relative group-hover:text-white">{item.title}</span>
                </Link>
            ))}
        </nav>
    </div>


)}