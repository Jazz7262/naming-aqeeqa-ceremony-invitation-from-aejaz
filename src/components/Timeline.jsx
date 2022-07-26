import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Naming Ceremony</h1>
                    <p>
                        On Thursday, 28<sup>th</sup> July, 2022,
                        <br />
                        28<sup>th</sup> of Zil-Hajjah, 1443,
                        <br />
                        Time: 01:00 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        International Function Hall,
                        <br /> 3<sup>rd</sup> Road, SKD Colony,
                        <br /> Adoni.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
