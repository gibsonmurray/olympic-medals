import { motion } from "framer-motion"
import { data } from "./data.ts"

const medalColors = {
    gold: {
        topBg: "bg-[#FCC861]",
        baseBg: "bg-[#FBB832]",
        border: "border-[#FA9B10]/60",
        text: "text-[#FA9B10]",
    },
    silver: {
        topBg: "bg-[#C7C7C7]",
        baseBg: "bg-[#B8B8B8]",
        border: "border-[#9A9A9A]/60",
        text: "text-[#9A9A9A]",
    },
    bronze: {
        topBg: "bg-[#DEB289]",
        baseBg: "bg-[#CE9A5E]",
        border: "border-[#BF7424]/60",
        text: "text-[#BF7424]",
    },
}

const medalLetter = {
    gold: "G",
    silver: "S",
    bronze: "B",
}

const delay = {
    gold: 0,
    silver: 0.2,
    bronze: 0.4,
}

function Cylinder(props: {
    medal: "gold" | "silver" | "bronze"
    countryIdx: number
    active?: boolean
    height?: number
}) {
    return (
        <motion.div
            className={`relative w-11 ${medalColors[props.medal].baseBg} perspective-500`}
            animate={{
                height: props.active ? props.height : 0,
                opacity: props.active ? 1 : 0,
            }}
            transition={{
                delay: 0.2 + delay[props.medal],
            }}
        >
            <span className="absolute w-full -translate-y-8 text-center text-sm tracking-normal text-zinc-700">
                {data[props.countryIdx][props.medal]}
            </span>
            <div
                className={`center absolute h-11 w-full rounded-full border ${medalColors[props.medal].border} ${medalColors[props.medal].topBg} rotate-x-[65deg] -translate-y-[22px]`}
            >
                <span
                    className={`text-xl font-bold tracking-normal ${medalColors[props.medal].text}`}
                >
                    {medalLetter[props.medal]}
                </span>
            </div>
        </motion.div>
    )
}

export default Cylinder
