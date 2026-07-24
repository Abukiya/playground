import * as motion from "motion/react-client"

export default function Rotate() {
    return (
        <motion.div className="mb-30"
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
        />
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#6366f1",
    borderRadius: 5,
}
