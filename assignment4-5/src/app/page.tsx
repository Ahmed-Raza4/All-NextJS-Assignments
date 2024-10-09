import Image from "next/image";
import Link from "next/link";
import blueberries from "../../data/Blueberry.jpeg";
import avacodo from "../../data/avacodo.jpg";
import banana from "../../data/bananas.jpg";
import citrus from "../../data/citrus.jpeg";
import apple from "../../data/apples.jpeg";
import pineapple from "../../data/pineapple.jpg";


export default function Home() {
  return (
    <div className="main">
            <div className="hero">
            <h1 className="typewriter">Discover the Power of Fruits for a Healthier Life</h1>
            <p>At our health blog, we believe that fruits are nature is best medicine.<br/> Through this platform, we aim to explore the nutritional value, benefits, and daily usage of various fruits to enhance your well-being.</p>
            </div>
    <div className="parentContainer" id="blogSection">
            <div className="childContainer">
                <div className="imageContainer">
                    <Image className="image" src={blueberries} alt="blueberries"/>
                </div>
                <h1 className="title">The Superpowers of Blueberries</h1>
                <p className="description">
                A small fruit packed with antioxidants and vitamins. Discover why adding blueberries to your diet is a game-changer for brain health and heart wellness.
                </p>
                <Link href={"/blueberries"}><button className="readMore">Read More</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image className="image" src={avacodo} alt="avacodo"/>
                </div>
                <h1 className="title">The Benefits of Avocado for Glowing Skin</h1>
                <p className="description">
                Rich in healthy fats, avocados can improve your apearance of skin. Learn how this creamy fruit nourishes from within and promotes a radiant complexion.
                </p>
                <Link href={"/avocado"}><button className="readMore">Read More</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image className="image" src={banana} alt="banana"/>
                </div>
                <h1 className="title">Bananas: Nature is Perfect Energy Snack</h1>
                <p className="description">
                Packed with potassium and fiber, bananas are a delicious way to boost energy, powering your workouts and keeping you energized all day.
                </p>
                <Link href={"/bananas"}><button className="readMore">Read More</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image className="image" src={citrus} alt="citrus"/>
                </div>
                <h1 className="title">Citrus Fruits: Boosting Immunity Naturally</h1>
                <p className="description">
                Oranges, lemons, and grapefruits are known for their high Vitamin C content. Explore how they strengthen your immune system and fight off common infections.
                </p>
                <Link href={"/citrus"}><button className="readMore">Read More</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image className="image" src={apple} alt="apple"/>
                </div>
                <h1 className="title">Apples: A Daily Dose of Wellness</h1>
                <p className="description">
                An apple a day really can keep the doctor away! Discover the surprising health benefits of apples and how they aid in digestion, heart health, and more.
                </p>
                <Link href={"/apples"}><button className="readMore">Read More</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image className="image" src={pineapple} alt="pineapple"/>
                </div>
                <h1 className="title">Pineapple: A Sweet Solution for Digestion</h1>
                <p className="description">
                Pineapples contain enzymes that promote good digestion and relieve bloating. Learn why this tropical fruit should be part of your healthy diet.
                </p>
                <Link href={"/pineapple"}><button className="readMore">Read More</button></Link>
            </div>
          </div>
          </div>
  )
};

