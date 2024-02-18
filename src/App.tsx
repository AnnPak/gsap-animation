import gsap from "gsap";
import "./App.css";
import { useGSAP } from "@gsap/react";
import img1 from "./assets/imgs/photo-1.jpg";
import img2 from "./assets/imgs/photo-2.jpg";
import img3 from "./assets/imgs/photo-3.jpg";
import star from "./assets/imgs/star.png";
import planet from "./assets/imgs/planet3.png";
import earth from "./assets/imgs/earth-new.png";
import { useRef } from "react";

function App() {
    const sliderRef = useRef(null);

    // useGSAP(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: sliderRef.current,
    //             start: "top center",
    //             end: "top center",
    //             scrub: 1,
    //         },
    //     });

    //     tl.fromTo(
    //         sliderRef.current,
    //         { x: "-100%", duration: 1 },
    //         { x: "100%", duration: 1 }
    //     );

    //     return () => {
    //         tl.kill();
    //     };
    // }, []);

    return (
        <div className="App">
            <div className="top-block">
                <div className="container">
                    <header>
                        <span className="logo">Animation</span>
                        <ul className="menu-list">
                            <li className="menu-item">Fast</li>
                            <li className="menu-item">Unique</li>
                            <li className="menu-item">Unexpected</li>
                            <li className="menu-item">Fancy</li>
                            <li className="menu-item">Awesome</li>
                        </ul>
                    </header>

                    <div className="title">
                        <h1>Welcome to the GSAP animation</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                        </p>

                        <div className="buttons-wrapper">
                            <button className="primary-btn">Primary</button>
                            <button className="secondary-btn">Secondary</button>
                        </div>
                    </div>
                    <div className="stars">
                        <img src={star} alt="star" className="star-1" />
                        <img src={star} alt="star" className="star-2" />
                        <img src={star} alt="star" className="star-3" />
                        <img src={star} alt="star" className="star-4" />
                        <img src={star} alt="star" className="star-5" />
                    </div>

                    <div className="planet">
                        <img src={planet} alt="planet" />
                    </div>
                </div>
                {/* <img src={earth} alt="earth" /> */}
            </div>
            {/* <div className="slider" ref={sliderRef}>
                <img src={img1} alt="1" className="img-1" />
                <img src={img2} alt="1" className="img-2" />
                <img src={img3} alt="1" className="img-3" />
            </div> */}
        </div>
    );
}

export default App;
