import React from "react";
import styles from "./Work.module.css"
import { getImageUrl } from '../../utils'

export const Work = ({ onScanAppetitClick, onWhiskClick, onNeudesicClick, onCollegeClick }) => {
    return (
        <section className={styles.container} id = "work">
            <h2 className={styles.Title}>
                MY WORK
            </h2>

            <div className={styles.containerProject}>
                <a href="#ScanAppetit" onClick={onScanAppetitClick} className={styles.leftProject}>
                <div className={styles.row}>
                    <div className={styles.projectImgLeft}>
                        <img src={getImageUrl("ScanAppetitNote.png")} alt="Scan Appetit cover photo"/>
                    </div>
                    <div className={styles.projectTitleLeft}>
                        <h3 className={styles.projectHeadingLeft}>Scan Appetit - A Menu Scanning App</h3>
                        <div className={styles.projectTagsLeft}>
                            <img src={getImageUrl("ScanAppetitTags.png")} alt = "Scan Appetit Tags"/>
                        </div>
                    </div>
                 </div>
             </a>

                <a href="#Whisk" onClick={onWhiskClick}>
                    <div className={styles.row}>
                        <div className={styles.projectTitleRight}>
                            <h3 className={styles.projectHeadingRight}>A Whisk Away - A Bakery App</h3> 
                            <div className={styles.projectTagsRight}>
                                <img src={getImageUrl("AWhiskAwayTags.png")} alt="A Whisk Away Tags" />
                            </div>
                        </div>
                        <div className={styles.projectImgRight}>
                            <img src={getImageUrl("AWhiskAwayNote.png")} alt="A Whisk Away cover photo" />
                        </div>
                    </div>
                </a>

                <a href="#Neudesic" className={styles.leftProject} onClick={onNeudesicClick}>
                <div className={styles.row}>
                    <div className={styles.projectImgLeft}>
                        <img src={getImageUrl("NeudesicNote.png")} alt="Neudesic cover photo" />
                    </div>
                    <div className={styles.projectTitleLeft}>
                        <h3 className={styles.projectHeadingLeft}>Accelerator App at Neudesic</h3>
                        <div className={styles.projectTagsLeft}>
                            <img src={getImageUrl("NeudesicTags.png")} alt="Neudesic Tags" />
                        </div>
                    </div>
                    </div>
                </a>

                <a href="#College" onClick={onCollegeClick}>
                <div className={styles.row}>
                    <div className={styles.projectTitleRight}>
                        <h3 className={styles.projectHeadingRight}>College Projects</h3>
                        <div className={styles.projectTagsRight}>
                            <img src={getImageUrl("CollegeProjectsTags.png")} alt="College Projects Tags" />
                        </div>
                    </div>
                    <div className={styles.projectImgRight}>
                        <img src={getImageUrl("CollegeProjectsNote.png")} alt="College Projects" />
                    </div>
                    </div>
                </a>

             </div>
        </section>
    );
};