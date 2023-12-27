import React from "react";
import styles from "./Personal.module.css"
import { getImageUrl } from "../../utils";

const Personal = () => {
    return (
        <div>
            <h2 className={styles.personalheading }>Personal Work</h2>

            <div className={styles.scrollcontainer}>
                <div className={styles.images}>
                    <img src={getImageUrl("Personal/1.png")} alt="Image 1" />
                    <img src={getImageUrl("Personal/2.png")} alt="Image 2" />
                    <img src={getImageUrl("Personal/3.png")} alt="Image 3" />
                    <img src={getImageUrl("Personal/4.png")} alt="Image 4" />
                    <img src={getImageUrl("Personal/5.png")} alt="Image 5" />
                    <img src={getImageUrl("Personal/6.png")} alt="Image 6" />
                    <img src={getImageUrl("Personal/7.png")} alt="Image 7" />
                    <img src={getImageUrl("Personal/8.png")} alt="Image 8" />
                    <img src={getImageUrl("Personal/9.png")} alt="Image 9" />
                    <img src={getImageUrl("Personal/10.png")} alt="Image 10" />
                    <img src={getImageUrl("Personal/11.png")} alt="Image 11" />
                    <img src={getImageUrl("Personal/12.png")} alt="Image 12" />
                    <img src={getImageUrl("Personal/13.png")} alt="Image 13" />
                    <img src={getImageUrl("Personal/14.png")} alt="Image 14" />
                    <img src={getImageUrl("Personal/15.png")} alt="Image 15" />
                    <img src={getImageUrl("Personal/16.png")} alt="Image 16" />
                    <img src={getImageUrl("Personal/17.png")} alt="Image 17" />
                    <img src={getImageUrl("Personal/18.png")} alt="Image 18" />
                    <img src={getImageUrl("Personal/19.png")} alt="Image 19" />
                    <img src={getImageUrl("Personal/20.png")} alt="Image 20" />
                    <img src={getImageUrl("Personal/21.png")} alt="Image 21" />
                </div>
            </div>
        </div>
    );
};

export { Personal };
