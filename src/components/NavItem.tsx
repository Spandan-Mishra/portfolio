"use client"

import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/src/components/ui/tooltip"
import { motion } from "motion/react"

type NavItemsProps = {
    title: string
    icon: any
    href: string
}

const NavItem = ({
    title,
    icon,
    href,   
}: NavItemsProps) => {
    return (
        <Tooltip>
            <TooltipTrigger>
                <motion.div
                    initial={{ scale: 1.5, paddingInline: "8px", fontWeight: "normal" }}
                    whileHover={{ scale: 1.8, paddingInline: "15px", fontWeight: "bold" }}
                >
                    <Link href={href}>{icon}</Link>
                </motion.div>
            </TooltipTrigger>
            <TooltipContent>
                {title}
            </TooltipContent>
        </Tooltip>
    )
}

export default NavItem