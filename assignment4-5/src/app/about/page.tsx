import Image from "next/image"
import mypic from "../../../data/cropped.jpg"
export default function About() {
    return (
        <div className="aboutMain">
            <div className="aboutContainer">
                <div className="aboutHeading">
                    Hey! <br />
                    My Name is <span>Ahmed Raza</span> <br/>
                    I am <span>Frontend Developer. </span>
                    <div className="aboutPara">
                    a senior web development student at GIAIC with a focus on HTML, CSS, TypeScript, and Python. I am passionate about Web 3.0, Generative AI, and the Metaverse, and I am constantly learning new skills like Next.js to stay ahead in the IT world. Currently, I am building Fruits Valley, a health blog about the benefits of fruits, alongside other web projects that showcase my creativity and technical expertise.
                    </div>
                </div>
                <div className="aboutPicContainer">
                    <Image src={mypic} alt="Mypic" className="aboutPicture"/>
                </div>
            </div>
        </div>
    )
}