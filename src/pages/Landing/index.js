import './Landing.css';
import Vector from "../../assets/images/vector.svg";

import HeadSpace from "./components/Headspace/";
import Features from "./components/Features/";

const Landing = () => {
    return (
        <>
            <img className="landingVector" src={Vector} alt="background" />
            <main>
                <HeadSpace />
                <Features />
            </main>
        </>
    )
}

export default Landing
