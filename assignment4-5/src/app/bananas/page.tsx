import Image from "next/image"
import bananas from "../../../data/bananas.jpg";
export default function Bananas() {
    return (
        <div className="mainBlogBody">
            <div className="blogImageContainer">
                <Image className="blogImage" src={bananas} alt="avacodo" />
            </div>
            <div className="blogContant">
                <h1>Bananas: Nature is Perfect Energy Snack</h1>
                <p>
                Bananas are one of the most convenient and nutritious snacks you can enjoy, especially when you need an energy boost. Here is why they are the perfect natural energy source:  <br /><br />

                    <span className="smallHeading">Rich in Carbohydrates: </span> Bananas provide a quick energy boost thanks to their high carbohydrate content, making them ideal for pre- or post-workout fuel. <br />

                    <span className="smallHeading">Packed with Potassium:  </span> This essential mineral helps maintain muscle function and prevents cramping, keeping your body energized and muscles healthy. <br />

                    <span className="smallHeading">Natural Sugars: </span> The natural sugars in bananas (fructose, glucose, and sucrose) provide both immediate and sustained energy without the crash of processed snacks. <br />

                    <span className="smallHeading">High in Fiber:  </span> Bananas contain fiber, which helps regulate blood sugar levels and promotes sustained energy release, keeping you energized longer. <br />

                    <span className="smallHeading">Portable and Convenient: </span> With their natural packaging, bananas are easy to carry and eat on the go, making them the perfect snack for a busy lifestyle. <br /> <br />

                    Whether you are heading to the gym or need a quick afternoon pick-me-up, bananas are a delicious and nutritious way to keep your energy levels up naturally!
                </p>
            </div>
        </div>
    )
}