import React from "react";
import "../styles/BabyInfo.css";

function BabyInfo() {
    return (
        <section id="baby-info">
            <h1 className="title-quote">ماشاءاللہ</h1>

            <div className="wrapper">
                <div
                    className="content"
                    data-aos="zoom-out"
                    data-aos-offset="300"
                >
                    <div className="function-info">
                        <h1>Aqeeqa of</h1>
                    </div>
                    <div className="img-wrapper">
                        <img
                            className="baby-img"
                            src="../assets/images/baby1.jpeg"
                            alt="baby_img"
                        />
                    </div>

                    <div className="info">
                        <h3>N. Humera Fathima</h3>
                        <h4>D/o. Mrs. & Mr. N. Mohammed Junaid </h4>
                    </div>
                </div>

                <div
                    className="content"
                    data-aos="zoom-out"
                    data-aos-offset="300"
                >
                    <div className="function-info">
                        <h1>Aqeeqa of</h1>
                    </div>
                    <div className="img-wrapper">
                        <img
                            className="baby-img"
                            src="../assets/images/baby2.jpeg"
                            alt="baby_img"
                        />
                    </div>

                    <div className="info">
                        <h3>N. Amina Banu</h3>
                        <h4>D/o. Mrs. & Mr. N. Mohammed Fazal </h4>
                    </div>
                </div>

                <div
                    className="content"
                    data-aos="zoom-out"
                    data-aos-offset="300"
                >
                    <div className="function-info">
                        <h1>Naming & Aqeeqa of</h1>
                    </div>
                    <div className="img-wrapper">
                        <img
                            className="baby-img"
                            src="../assets/images/baby3.jpeg"
                            alt="baby_img"
                        />
                    </div>

                    <div className="info">
                        <h3>N. Mohammed Muddassir</h3>
                        <h4>D/o. Mrs. & Mr. N. Mohammed Wasim </h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BabyInfo;
