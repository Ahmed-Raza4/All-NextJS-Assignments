import Image from "next/image"
import logo from "../../../data/logo.png"
import Link from "next/link"
export default function Header(){
    return(
        <div className="navbar">
            <div className="logo">
                <a href="/">
             <Image src={logo} alt="logo" />
             </a>
            </div>
            <div className="list">
                <ul>
                    <Link href={"/"}>
                    <li>Home</li>
                    </Link>
                    <Link href="#blogSection">
                    <li>Blog</li>
                    </Link>
                    <Link href={"/about"}>
                    <li>About</li>
                    </Link>
                    <Link href={"/contact-us"}>
                    <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}