import Image from "next/image"
import apple from "../../../data/apples.jpeg";
export default function Citrus() {
    return (
        <div className="mainBlogBody">
            <div className="blogImageContainer">
                <Image className="blogImage" src={apple} alt="avacodo" />
            </div>
            <div className="blogContant">
                <h1>Apples: A Daily Dose of Wellness</h1>
                <p>
                    The saying “an apple a day keeps the doctor away” holds a lot of truth. Apples are packed with essential nutrients that promote overall wellness and support a healthy lifestyle. Here is why they are a perfect addition to your diet:
                    <br /><br />

                    <span className="smallHeading">High in Fiber:  </span> Apples are a great source of dietary fiber, which aids digestion, promotes gut health, and helps control blood sugar levels. <br />

                    <span className="smallHeading">Rich in Antioxidants:  </span> Apples contain antioxidants like flavonoids, which protect your body from oxidative stress and lower the risk of chronic diseases. <br />

                    <span className="smallHeading">Supports Heart Health: </span> The fiber and potassium in apples help reduce cholesterol levels and maintain healthy blood pressure, supporting cardiovascular health. <br />

                    <span className="smallHeading">Boosts Immunity: </span> Apples are rich in Vitamin C, which strengthens the immune system and helps your body fight off infections more effectively.<br />

                    <span className="smallHeading">Low-Calorie, High-Nutrition Snack: </span>  With their low calorie count and high nutrient content, apples make a perfect healthy snack that satisfies hunger without adding unnecessary calories. <br /> <br />

                    Incorporating an apple into your daily routine can offer a simple yet effective way to enhance your wellness and overall health!
                </p>
            </div>
        </div>
    )
}