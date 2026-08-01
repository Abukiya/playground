import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export default function Saredlayout(){
    const items = [1, 2, 3, 4]
    const [isgrid, setisgrid] = useState(false)
    const [Selected, setSelected] = useState<number | null>(null);

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 px-6 py-10 text-slate-100">
            <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                <div className="flex w-full items-center justify-between">
                    <h2 className="text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">Shared Layout</h2>

                    <motion.button
                        className="rounded-xl border border-sky-300/30 bg-sky-400/15 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-sky-100 uppercase shadow-md shadow-sky-900/40 transition-colors hover:bg-sky-400/25"
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setisgrid(!isgrid)}
                    >
                        {isgrid ? "stack" : "grid"}
                    </motion.button>
                </div>

                <div className={`relative ${isgrid ? "grid grid-cols-2 sm:grid-cols-4" : "flex flex-col"} w-full gap-3 sm:gap-4`}>
                {
                    items.map((index) => (
                        <motion.div
                        className="flex h-20 items-center justify-center rounded-2xl border border-sky-200/20 bg-linear-to-br from-sky-500/25 to-blue-700/30 shadow-lg shadow-blue-950/50"
                        layoutId={`card-${index}`}
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                        key={index}
                        whileHover={{ rotateX: 25,
                            rotateY: 10,
                            transition: { duration: 0.2, ease: "easeInOut" }
                         }}
                        style={{ translateZ: 100 }}
                        whileTap={{ scale: 0.98 }}
                        drag
                        onClick={() => setSelected(index)}
                        >
                            <motion.span className="text-xl font-semibold text-sky-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            >
                                {index}
                            </motion.span>
                        </motion.div>
                    ))
                }
                </div>
            </div>

            {/* full-screen backdrop */}
            <AnimatePresence>
                {Selected && (
                    <motion.div
                        className="fixed inset-0 z-20 bg-black/60 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    />
                )}
            </AnimatePresence>

            {/* expanded card */}
            <AnimatePresence>
                {Selected && (
                    <motion.div
                        layoutId={`card-${Selected}`}
                        className="fixed inset-0 z-30 m-auto flex h-64 w-full max-w-3xl flex-col items-center justify-center gap-2 rounded-3xl border border-sky-300/40 bg-slate-950/85 shadow-2xl shadow-sky-900/40 backdrop-blur-md"
                    >
                        <motion.span className="text-6xl font-bold text-sky-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {Selected}
                        </motion.span>
                        <motion.p className="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            highlight
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
