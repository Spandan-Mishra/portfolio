
import NavItem from "./NavItem"
import { CodeIcon, GitHubLogoIcon, HomeIcon, LayersIcon, LinkedInLogoIcon, PersonIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

const Navbar = () => {
    const navitems = [
        {
            title: "Home",
            icon: <HomeIcon />,
            href: "/"
        },
        {
            title: "Projects",
            icon: <CodeIcon />,
            href: "/projects"
        },
        {
            title: "Blogs",
            icon: <LayersIcon />,
            href: "/blogs"
        },
        {
            title: "Github",
            icon: <GitHubLogoIcon />,
            href: "https://github.com/Spandan-Mishra"
        },
        {
            title: "LinkedIn",
            icon: <LinkedInLogoIcon />,
            href: "https://www.linkedin.com/in/spandan-mishra-a584b7302/"
        },
        {
            title: "X",
            icon: <TwitterLogoIcon />,
            href: "https://twitter.com/spandev_"
        }
    ]

    return (
        <nav className="fixed top-1 flex gap-6 items-center justify-center w-2/3 py-6 my-4 shadow shadow-black rounded-md">
            {navitems.map((item, index) => {
                return (
                    <NavItem key={index} title={item.title} icon={item.icon} href={item.href} />
                )
            })}
        </nav>
    )
}

export default Navbar