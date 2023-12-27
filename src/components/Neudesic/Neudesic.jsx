import React from 'react';
import { getImageUrl } from '../../utils'
import styles from "./Neudesic.module.css"

export const Neudesic = ({ onBackToHomeClick }) => {
    return (
        <section className={styles.container}>
            <div className={styles.flexcontainer}>
                <div className={styles.heading}>
                    <h>
                        Neudesic
                    </h>
                </div>
                <a href="/" onClick={onBackToHomeClick} className={styles.back}>Back to Home</a>
            </div>
            <div className={styles.projectoverview}>
                <h2>
                    Project Overview
                </h2>
                <img src={getImageUrl("Neudesic/neudesicCover.png")} alt="Neudesic Cover Photo" className={styles.neudesicphoto}/>
                <p>
                    As part of my 3 month internship at Neudesic, an IBM Company, I had the opportunity to work on an internal accelerator application that was being built powered by OpenAI.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/Duration.png")} alt="Scan Appetit Cover Photo" className={styles.duration} />
                <p classname={styles.roleduration}>
                    August 2023 - November 2023
                </p>
                <img src={getImageUrl("ScanAppetit/Role.png")} alt="Scan Appetit Cover Photo" />
                <p className={styles.roleduration}>
                    UX Intern
                </p>
            </div>
            <div className={styles.theprocess}>
                <h2>
                    Work carried out during the internship
                </h2>
         
                <img src={getImageUrl("Neudesic/creating.png")} alt="Creating New Icons" />
                <p>
                    One of the initial few tasks I was bestowed with was that of creating new icons in the application where I had to identify duplicate icons within the application and accordingly create new icons for existing modules and upcoming modules while maintaining visual consistency with the currently present design system. 
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("Neudesic/icons.png")} alt="New icons" />
                </div>
                <img src={getImageUrl("Neudesic/lofiwireframes.png")} alt="LO-FI WIREFRAMES AND PROTOTYPES FOR ACCESS MANAGEMENT" />
                <p>
                    The product team wanted to restrict certain modules' access to different types of users such as developers, quality analysts and business analysts.
                    Upon back and forth discussions, I conceptualized three different conceptual user flows and finalised one with feedback from the product and development team. 
                </p>
                
                    <img src={getImageUrl("Neudesic/templates.png")} alt="TEMPLATES PROTOTYPE" />
                    <p>
                        Work items are generated with the help of this application. However, when managers used this application they noticed inconsistencies in the work items that were being generated. Therefore, a module was conceptualized as a solution to this problem, to maintain consistency within the items where one can provide a template, add samples and assign a template as the default for the current project. 
                        Four different conceptual user flows were identified and built, incorporating feedback from the team and conducting usability testing.
                    </p>
                <img src={getImageUrl("Neudesic/extension.png")} alt="ADO Extension" />
                <p>
                    The last task I was bestowed with during my internship was to help build the design system for the Azure DevOPS (ADO) Extension. I helped in building components such as buttons, dropdowns, tables and dialog windows amongst others that followed the Formula Design System to maintain coherence and overall visual consistency.
                </p>
                <img src={getImageUrl("Neudesic/learnings.png")} alt="Learnings" />
                <p>
                    This UX internship was my first real work experience and it taught me a number of things.
                </p>
                <ul className={styles.research}>
                    <li>Prototyping and Wireframing, Iterative Testing and Designing</li>
                    <li>Applying Visual Design Principles</li>
                    <li>Building Design Systems</li>
                    <li>Collaboration and Communication</li>
                    <li>Industry Tools and Trends</li>
                    <li>Feedback Incorporation and Time Management</li>
                </ul>
                <p>
                    I am grateful for this opportunity as I truly learnt a lot!
                </p>
            </div>
        </section>
    )
}