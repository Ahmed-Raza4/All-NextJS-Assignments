import Image from "next/image"
import pineapple from "../../../data/pineapple.jpg";
export default function Citrus() {
    return (
        <div className="mainBlogBody">
            <div className="blogImageContainer">
                <Image className="blogImage" src={pineapple} alt="avacodo" />
            </div>
            <div className="blogContant">
                <h1>Pineapple: A Sweet Solution for Digestion</h1>
                <p>
                    Pineapple is not only delicious but also a powerful aid for digestion. Packed with nutrients and enzymes, this tropical fruit offers a range of benefits to keep your digestive system in check. Here is why it is great for digestion:
                    <br /><br />

                    <span className="smallHeading">Rich in Bromelain:  </span> Pineapple contains bromelain, a unique enzyme that helps break down proteins and improve digestion, making it easier for your body to absorb nutrients.<br />

                    <span className="smallHeading">High in Fiber: </span> With its high fiber content, pineapple promotes regular bowel movements and helps prevent constipation by keeping your digestive system moving smoothly. <br />

                    <span className="smallHeading">Anti-Inflammatory Properties: </span> Bromelain also has anti-inflammatory effects, which can soothe the digestive tract and reduce bloating or discomfort. <br />

                    <span className="smallHeading">Supports Gut Health:  </span> The fiber and natural enzymes in pineapple support a healthy gut microbiome, contributing to better digestion and overall gut health.<br />

                    <span className="smallHeading">Hydration and Digestion: </span>  Pineapple is high in water content, which aids digestion by keeping you hydrated and ensuring food moves efficiently through the digestive system.<br /> <br />

                    Add fresh pineapple to your diet for a sweet, refreshing way to support your digestive health!
                </p>
            </div>
        </div>
    )
}