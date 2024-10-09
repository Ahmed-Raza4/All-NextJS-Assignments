import Image from "next/image"
import blueberries from "../../../data/Blueberry.jpeg";

export default function Blueberries() {
    return (
        <div className="mainBlogBody">
            <div className="blogImageContainer">
            <Image className="blogImage" src={blueberries} alt="blueberries"/>
            </div>
            <div className="blogContant">
                <h1>The Superpowers of Blueberries</h1>
                <p>
                    Blueberries are more than just a delicious snack; they are a powerhouse of nutrition and health benefits. Here is why you should make these tiny fruits a staple in your diet:  <br /><br />

                    <span className="smallHeading">Nutrient-Rich:</span> Blueberries are low in calories but high in essential vitamins and minerals, including Vitamin C, Vitamin K, and manganese. <br />

                    <span className="smallHeading">Antioxidant Benefits:</span> Packed with antioxidants, particularly anthocyanins, blueberries help combat oxidative stress, reducing the risk of chronic diseases and promoting healthy aging. <br />

                    <span className="smallHeading">Heart Health:</span> Regular consumption of blueberries has been linked to improved heart health by lowering blood pressure and cholesterol levels. <br />

                    <span className="smallHeading">Cognitive Boost: </span> Studies suggest that blueberries can enhance memory and cognitive function, making them a smart choice for brain health. <br />

                    <span className="smallHeading">Digestive Health: </span> The fiber in blueberries supports healthy digestion and helps maintain a balanced gut microbiome. <br /> <br />

                    Whether you enjoy them fresh, in smoothies, or as a topping for your favorite dishes, incorporating blueberries into your diet is an easy and tasty way to harness their superpowers. Add a handful to your meals and experience the benefits of this superfood!
                </p>
            </div>
        </div>
    )
}