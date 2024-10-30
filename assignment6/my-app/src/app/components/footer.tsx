import Image from "next/image"
import logo from "../../../data/logo2.png"
import Link from "next/link"
import map from "../../../data/VectorMap.png"
import call from "../../../data/VectorCall.png"
import message from "../../../data/VectorMessage.png"
import facebook from "../../../data/facebook.png"
import twitter from "../../../data/twitter.png"
import linkedin from "../../../data/Linked In.png"
import pinterest from "../../../data/pininterest.png"

export default function Footer(){
    return(
        <div className="footer">
        <div className="footerBody">
            <div className="footerSec1">
            <Image src={logo} alt="headerlogo" />
            </div>
            <div className="footerSec2">
            <ul>
                <li className="listHead">Information</li>
                <Link href={"/"}><li>Main</li></Link>
                <Link href={"galary"}><li>Gallery</li></Link>
                <Link href={"projects"}><li>Projects</li></Link>
                <Link href={"certifications"}><li>Certifications</li></Link>
                <Link href={"contact"}><li>Contacts</li></Link>
            </ul>
            </div>
            <div className="footerSec3">
            <ul>
                <li className="listHead">Contact</li>
                <li> <Image src={map} alt="mapLogo" className="listImage"/> 1234 Sample Street Austin Texas 78705</li>
                <li> <Image src={call} alt="mapLogo" className="listImage"/> 512.333.2222</li>
                <li> <Image src={message} alt="mapLogo" className="listImage"/> sampleemail@gmail.com</li>
            </ul>
            </div>
            <div className="footerSec4">
                <h1>Social Media</h1>
                <div className="icons">
                    <Link href={"/"}><Image src={facebook} alt="facebookLogo" className="socialIcon"/></Link>
                    <Link href={"/"}><Image src={twitter} alt="twitterLogo" className="socialIcon"/></Link>
                    <Link href={"/"}><Image src={linkedin} alt="linkedinLogo" className="socialIcon"/></Link>
                    <Link href={"/"}><Image src={pinterest} alt="pinterestLogo" className="socialIcon"/></Link>
                </div>
            </div>
        </div>
        <div className="footerEnd">
        © 2021 All Rights Reserved
        </div>
        </div>
    )
}