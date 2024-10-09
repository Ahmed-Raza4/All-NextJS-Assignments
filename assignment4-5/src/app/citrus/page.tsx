import Image from "next/image"
import citrus from "../../../data/citrus.jpeg";
export default function Citrus() {
    return (
        <div className="mainBlogBody">
            <div className="blogImageContainer">
                <Image className="blogImage" src={citrus} alt="avacodo" />
            </div>
            <div className="blogContant">
                <h1>Citrus Fruits: Boosting Immunity Naturally</h1>
                <p>
                    Citrus fruits, like oranges, lemons, and grapefruits, are well-known for their powerful immune-boosting properties. Packed with vitamins and antioxidants, they offer a natural way to strengthen your body is defenses. Here is why citrus fruits are so effective:

                    <br /><br />

                    <span className="smallHeading">High in Vitamin C:  </span> Citrus fruits are loaded with Vitamin C, a key nutrient that helps stimulate the production of white blood cells, which are essential for fighting infections. <br />

                    <span className="smallHeading">Rich in Antioxidants:  </span> The antioxidants in citrus fruits protect your cells from harmful free radicals, reducing inflammation and promoting overall health. <br />

                    <span className="smallHeading">Hydration Support:  </span> With their high water content, citrus fruits help keep you hydrated, which is crucial for maintaining a healthy immune system. <br />

                    <span className="smallHeading">Boosts Collagen Production:  </span> Vitamin C in citrus fruits also promotes collagen production, which not only supports skin health but also strengthens connective tissues and speeds up healing. <br />

                    <span className="smallHeading">Easy to Incorporate: </span> Citrus fruits are versatile and can be enjoyed in juices, salads, or as a quick snack, making it easy to get your daily dose of immune-boosting nutrients. <br /> <br />

                    Add citrus fruits to your daily diet and enjoy a delicious, natural way to boost your immunity year-round!
                </p>
            </div>
        </div>
    )
}