import React from 'react';
import { getImageUrl } from '../../utils'
import styles from "./ScanAppetit.module.css"

export const ScanAppetit = ({ onBackToHomeClick }) => {
    return (
        <section className={styles.container}>
            <div className={styles.flexcontainer}>
                <div className={styles.heading}>
                    <a href="https://www.figma.com/proto/e8EsUbQmQifxGOOvPZlIyr/Design-System-and-Hi-Fi-Scan-Appetit?type=design&node-id=17-1110&t=uAGb84KlY51v5k8F-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design" target="_blank">
                        Scan Appetit
                    </a>
                </div>
                <a href="/" onClick={onBackToHomeClick} className={styles.back}>Back to Home</a>
            </div>
            <div className={styles.projectoverview}>
                <h2>
                    Project Overview
                </h2>
                <img src={getImageUrl("ScanAppetit/ScanAppetit.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    In this project, an app called "ScanAppetit" that revolutionises the way users interact with menus was conceptualised. By incorporating scanning capabilities, the app allows users to effortlessly scan menus and receive simple descriptions and images of dishes. Furthermore, the app enables users to leave reviews and ratings for the dishes they've tried, enhancing the dining experience for both users and restaurants.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Problem.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    Diners need clear and concise menu presentations because it enables them to easily comprehend the diverse range of offerings, make informed choices, and avoid ordering mistakes at fusion restaurants.                </p>
             </div>
                <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Goal.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    Our ScanAppetit app will let users comprehend the diverse range of offerings which will affect diners who go to fusion and diverse restaurants by letting users make informed choices and avoid ordering mistakes at fusion restaurants. We will measure effectiveness by analyzing the number of positive responses to menu items scanned and ordered.                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/Duration.png")} alt="Scan Appetit Cover Photo" className={styles.duration } />
                <p classname={styles.roleduration}>
                    June 2023 - July 2023
                </p>
                <img src={getImageUrl("ScanAppetit/Role.png")} alt="Scan Appetit Cover Photo" />
                <p className={styles.roleduration}>
                    UX designer, UX researcher
                </p>
             </div>

            <div className={styles.theprocess}>
                <h2>
                    The Process
                </h2>
                <p>
                    The UX process commenced after a visit to a fusion restaurant with my family, where we encountered difficulty understanding items on the menu. Motivated by this experience, the first step involved conducting thorough research to assess the extent of this issue and determine its prevalence among others.
                </p>
                <img src={getImageUrl("ScanAppetit/Research.png")} alt="Research " />
                <ul className={styles.research}>
                    <li>79% millennials enjoy experimenting with various cuisines and they say they would rather spend money at a restaurant / experience than purchasing an item, 78% - Gen X</li>
                    <li>31% of restaurants update their menus on a monthly basis</li>
                    <li>54% of restaurants changed their menus in the year 2022</li>
                    <li>48% of diners say a menu available online is an important factor when dining in (2022 Dining Trends Report)</li>
                    <li>30-40% food served to customers never gets consumed</li>
                    <li>Perceived behavioural control has the most effects on food waste and food waste behaviour</li>
                </ul>
                <img src={getImageUrl("ScanAppetit/Interview.png")} alt="Interview " />
                <p>
                    After conducting the research, an appropriate user group was identified who ranged from the ages of 20 - 65. I conducted an interview to empathise with 5 different users.
                    Following this, empathy maps were created for each of the interviewees.
                </p>
                <div className={styles.imagegrid }>
                    <img src={getImageUrl("ScanAppetit/EmpathyMap1.png")} alt = "Empathy Map 1"/>
                    <img src={getImageUrl("ScanAppetit/EmpathyMap2.png")} alt="Empathy Map 2" />
                    <img src={getImageUrl("ScanAppetit/EmpathyMap3.png")} alt="Empathy Map 3" />
                    <img src={getImageUrl("ScanAppetit/EmpathyMap4.png")} alt="Empathy Map 4" />
                </div>
                <img src={getImageUrl("ScanAppetit/Persona.png")} alt="Interview " />
                <p>
                    Personas that are created after conducting a user journey map are enriched with valuable insights about user behaviors, motivations, and pain points.
                    By analyzing the user journey map, I was able to identify patterns and commonalities among users, allowing me to create more accurate and representative personas.
                </p>
                <div className={styles.imagegridPersona}>
                    <img src={getImageUrl("ScanAppetit/Persona 1.png")} alt="Persona 1" />
                    <img src={getImageUrl("ScanAppetit/Persona 2.png")} alt="Persona 2" />
                </div>
                <p>
                    User Journey maps were also created in order to understand the user's actions better.
                </p>
                <div className={styles.projectdetails}>
                    <img src={getImageUrl("ScanAppetit/Problem Definition.png")} alt="Problem Definition" />
                    <p>
                        Diners need clear and concise menu presentations because it enables them to easily comprehend the diverse range of offerings, make informed choices, and avoid ordering mistakes at fusion restaurants.
                    </p>
                </div>
                <img src={getImageUrl("ScanAppetit/Ideation.png")} alt="Ideation" />
                <p>
                    During the ideation stage of the UX process, I utilized techniques such as Crazy 8s and brainstorming to generate a multitude of creative ideas. These methods fostered innovative thinking and served as a solid foundation for the subsequent stages of the process.
                </p>
                <div className={styles.imagegridPersona}>
                    <img src={getImageUrl("ScanAppetit/Ideate 1.png")} alt="Ideate 1" />
                    <img src={getImageUrl("ScanAppetit/Ideate 2.png")} alt="Ideate 2" />
                </div>
            </div>

            <div className={styles.thedesign}>
                <h2>
                    The Design
                </h2>
                <p>
                    I successfully completed user flow and information architecture tasks as part of the UX process. These activities improved the overall user experience of digital products.
                </p>
                <img src={getImageUrl("ScanAppetit/User Flow.png")} alt="User Flow" />
                <p>
                    User flow involved mapping out the sequential steps and interactions for users, optimizing their journey.
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("ScanAppetit/User Flow Image.png")} alt="Ideate 1" />
                </div>

                <img src={getImageUrl("ScanAppetit/Information Architecture.png")} alt="User Flow" />
                <p>
                    Information architecture focused on organizing and structuring content and navigation, enhancing usability.
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("ScanAppetit/IA.png")} alt="Information Architecture" />
                </div>

                <img src={getImageUrl("ScanAppetit/Wireframes.png")} alt="Wireframes and Lo-Fi Prototype" className={styles.lofimg } />
                <a href="https://www.figma.com/proto/sD6OWt89sJKKkCgmeKbofL/ScanAppetit-Lo-Fi?type=design&node-id=17-1708&t=IXm3SS3F0TxEhPFY-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=17%3A1708&mode=design" className={styles.lofi} target="_blank">
                    Check out the Low fidelity prototype here!
                </a>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("ScanAppetit/LOFI.gif")} alt="Low-Fidelity Prototype" />
                </div>
                <p>
                    Wireframes were made by considering important UX principles such as Fitt's Law and visual hierarchy.
                </p>

                <img src={getImageUrl("ScanAppetit/Branding.png")} alt="Branding and Design System" />
                <p>
                    As this concept is entirely new in itself, it required a cohesive and visually appealing unique identity. Therefore, branding and design systems were constructed in order to maintain consistency.
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("ScanAppetit/branding_scanappetit.png")} alt="Information Architecture" />
                </div>

                <img src={getImageUrl("ScanAppetit/hifiprototypebutton.png")} alt="Hi-Fi Prototype" />
                <p>
                    Taking all the learnings as well as feedback from users, the high fidelity prototype was made. The user flow allows a user to scan the menu and give their reviews which would help others in turn.
                    Wireframes were made by considering important UX principles such as Fitt's Law and visual hierarchy.
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("ScanAppetit/scanappetitgif.gif")} alt="Information Architecture" />
                </div>
                <a href="https://www.figma.com/proto/sD6OWt89sJKKkCgmeKbofL/ScanAppetit-Lo-Fi?type=design&node-id=17-1708&t=OksAqCAYEfwpkcPt-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=17%3A1708&mode=design" target="_blank" className={ styles.hifi}>
                    Check out the Hi-Fi prototype here!
                </a>

                <h2 className={styles.keytakeaways}>
                    Key Takeaways
                </h2>
                <p>
                    Key takeaways from the menu scanning app UX project include the importance of simplified descriptions, images, and allergen information, personalized dish compatibility, intuitive navigation, and incorporating user feedback for continuous improvement.
                </p>
                <img src={getImageUrl("ScanAppetit/ScanAppetit 1.png")} alt="Scan Appetit cover photo" className={styles.hificoverphoto } />

                <img src={getImageUrl("ScanAppetit/Impact.png")} alt="Impact" />
                <p>
                    Information architecture focused on organizing and structuring content and navigation, enhancing usability.
                </p>

                <a href="/" onClick={onBackToHomeClick} className={styles.back}>Back to Home</a>

            </div>

        </section>
    ); 
};