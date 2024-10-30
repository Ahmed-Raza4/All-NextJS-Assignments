import Image from "next/image";
import main from "../../data/Rectangle 6.png";
import arrow from "../../data/arrow-2-right-long.svg"
import building1 from "../../data/Rectangle 8.png"
import building2 from "../../data/Rectangle 9.png"
import building3 from "../../data/Rectangle 10.png"
import project1 from "../../data/Rectangle 12.png"
import project2 from "../../data/Rectangle 17.png"
import project3 from "../../data/image 15.png"
import project4 from "../../data/image 16.png"
import project5 from "../../data/image 17.png"
import project6 from "../../data/image 18.png"
import whitearrow from "../../data/whitearrow.png"
import image12 from "../../data/image 12.png"
import arrowleft from "../../data/arrow left.png"
import arrowright from "../../data/arrow right.png"
import date from "../../data/slide-numbers.png"


export default function Home() {
  return (
    <div className="mainBody">
      <div className="heroSection1">
        <div className="hero1Left">
          <div className="hero1LeftText">
            <h1>Project</h1>
            <p>Lorum</p>
          </div>
          <div className="hero1Arrow">
            <Image src={arrowleft} alt="arrowleft" />
            <Image src={arrowright} alt="arrowright" />
          </div>
          <div className="hero1Number">
            <Image src={date} alt="date" />
          </div>
        </div>
        <div className="hero1Right">
          <Image src={main} alt="mainPic" height={829} width={770} />
          <button className="hero1RightButton"><p> View Project </p>
            <Image src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="heroSection2">
        <div className="hero2Left">
          <Image src={building1} alt="rectangle8" height={265} width={270} className="rectangle8" />
          <Image src={building2} alt="rectangle9" height={345} width={270} className="rectangle9" />
          <Image src={building3} alt="rectengle10" height={140} width={270} className="rectangle10" />
        </div>
        <div className="hero2Right">
          <div className="heading">
            <h1>About</h1>
          </div>
          <div className="paragraph">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <button className="hero2RightButton"><p>Read More </p>
            <Image src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="heroSection3">
        <div className="hero3Text">
          <div className="hero3Heading">
            Main Focus/Mission Statement
          </div>
          <div className="hero3TextParagraph">
            <div className="hero3TextLeft">
              <div className="hero3Number">
                1
              </div>
              <div className="hero3Para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
              </div>
            </div>
            <div className="hero3TextRight">
              <div className="hero3Number">
                2
              </div>
              <div className="hero3Para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourProjectsSection">
        <div className="projectsHeading">
          Our Projects
        </div>
        <div className="projectImages">
          <div className="textOnImage">
            <h1>Sample</h1>
            <h1>Project</h1>
            <p>View More
            <Image src={whitearrow} alt="arrow" className="arrow"/>
             </p>
          </div>
        <Image src={project1} alt="project1" width={570} height={255} className="project1" />
        <Image src={project2} alt="project2" width={570} height={255} className="project2" />
        <Image src={project3} alt="project3" width={570} height={255} className="project3" />
        <Image src={project4} alt="project4" width={270} height={255} className="project4" />
        <Image src={project5} alt="project5" width={470} height={255} className="project5" />
        <Image src={project6} alt="project6" width={370} height={255} className="project6" />
        <div className="projectButton">
          <p>
            All Projects 
          </p>
            <Image src={whitearrow} alt="arrow" className="arrow"/>
        </div>
        </div>
      </div>
      <div className="contactSection">
      <div className="contactLeft">
        <h1>Contact Us</h1>
            <div><input type="text" placeholder="Name" required className="inputField"/> </div>
            <div><input type="text" placeholder="Phone Number"  required className="inputField"/> </div>
            <div><input type="email" placeholder="E-mail"  required className="inputField"/> </div>
            <div><input type="text" placeholder="Interested In" required className="inputField" /></div>
            <div><textarea placeholder="Message"  required className="inputFieldArea"/></div>
            <div><button type="submit" className="contactButton">SEND EMAIL  →</button></div>
      </div>
      <div className="contactRight">
      <Image src={image12} alt="image12" width={749} height={369} className="image12"/>
      </div>
      </div>
    </div>

  );
}
