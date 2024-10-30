import Image from "next/image"
import logo from "../../../data/Group 11.png"
import Link from "next/link"
export default function Header(){
    return(
        <div className="mainHeaderBody">
            <div className="headerLogo">
            <Image src={logo} alt="headerlogo" />
            </div>
            <div className="headerList">
                <ul className="nav">
                    <Link href={"/"}><li id="main">MAIN</li></Link>
                    <Link href={"/galary"}><li>GALARY</li></Link>
                    <Link href={"/projects"}><li>PROJECTS</li></Link>
                    <Link href={"/certifications"}><li>CERTIFICATIONS</li></Link>
                    <Link href={"/contact"}><li>CONTACT</li></Link>
                </ul>
            </div>
        </div>
    )
}