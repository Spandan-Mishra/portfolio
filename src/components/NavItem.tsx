"use client"

import { usePathname, useRouter } from "next/navigation"
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
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = async (e: React.MouseEvent) => {
        if (/^https?:\/\//.test(href)) return

        e.preventDefault()

        const [pathPart, hash] = href.split("#")
        const targetPath = pathPart === "" ? "/" : pathPart
        console.log(pathPart, hash, targetPath)

        if (pathname === targetPath) {
            if (hash) {
                document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" })
            }
            return
        }

        await router.push(href)
        if (hash) {
            setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
            }, 50)
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const isExternal = /^https?:\/\//.test(href)

    return (
        <Tooltip>
            <TooltipTrigger>
                <motion.div
                    initial={{ scale: 1.5, paddingInline: "8px", fontWeight: "normal" }}
                    whileHover={{ scale: 1.8, paddingInline: "15px", fontWeight: "bold" }}
                >
                    {isExternal ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                            {icon}
                        </a>
                    ) : (
                        <a href={href} onClick={handleClick}>
                            {icon}
                        </a>
                    )}
                </motion.div>
            </TooltipTrigger>
            <TooltipContent>
                {title}
            </TooltipContent>
        </Tooltip>
    )
}

export default NavItem