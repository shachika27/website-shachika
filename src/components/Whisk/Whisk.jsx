import React from 'react';
import { getImageUrl } from '../../utils'
import styles from "./Whisk.module.css"

export const Whisk = ({ onBackToHomeClick }) => {
    return (
        <section className={styles.container}>
            <div className={styles.flexcontainer}>
                <div className={styles.heading}>
                    <a href="https://www.figma.com/proto/IIm2wrTRYWtoxHoNzqrpDd/Updated-A-Whisk-Away-Lo-Fi-Wireframes?node-id=166-949&starting-point-node-id=166%3A944&scaling=scale-down&mode=design&t=Pdroh9lzLe77dt8N-1" target="_blank">
                        A Whisk Away
                    </a>
                </div>
                <a href="/" onClick={onBackToHomeClick} className={styles.back}>Back to Home</a>
            </div>
            <div className={styles.projectoverview}>
                <h2>
                    Project Overview
                </h2>
                <img src={getImageUrl("Whisk/WhiskCoverPhoto.png")} alt="A Whisk Away Cover Photo" />
                <p>
                    A Whisk Away is a family bakery in the city, run by a mother and her two daughters. They specialize in homemade cakes and breads with treasured recipes.
                    A Whisk Away is a mobile app that caters to its customers who love baked goods and those planning parties.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Problem.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    Busy individuals who face time constraints are unable to visit the bakery in person to place orders for their desired bakery items.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Goal.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    Design an app for A Whisk Away that allows users to order their favourite bakery items with customization whilst giving them options to either pick them up from the store or have them delivered at their preferred location.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/Duration.png")} alt="Scan Appetit Cover Photo" className={styles.duration} />
                <p classname={styles.roleduration}>
                    January 2023 - June 2023
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
                    I conducted user research to gain insights into the target audience whom I identified to be were busy working professionals who were customers of A Whisk Away Bakery. Through this process, I created empathy maps to understand their emotions and motivations, developed personas to represent their characteristics, and crafted a user journey map to visualize their interactions with the app. These efforts enabled me to identify crucial pain points, forming a solid foundation that will inform the design and development of the app to deliver a seamless and user-centric experience.
                </p>
                <img src={getImageUrl("Whisk/ProblemStatement.png")} alt="Problem Statement " />
                <ul className={styles.research}>
                    <li>John is a busy employee with a knack for party planning who needs a solution to order bakery items seamlessly because they have limited availability to go to the store in person</li>
                </ul>
                <img src={getImageUrl("ScanAppetit/Persona.png")} alt="Persona" />
                <p>
                    John is a busy employee with a knack for party planning who needs a solution to order bakery items seamlessly because they have limited availability to go to the store in person.
                </p>
                <div className={styles.persona}>
                    <img src={getImageUrl("Whisk/johnpersona.png")} alt="Persona of John" />
                </div>
                <img src={getImageUrl("Whisk/userjourneymap.png")} alt="User Journey Map" />
                <p>
                    By mapping John's user journey, pain points were identified as well as moments of delights. These insights can help gravely in the development of the mobile application.
                </p>
                <div className={styles.userjourney}>
                    <img src={getImageUrl("Whisk/userjourneymapphoto.png")} alt="Persona 1" />
                </div>
                
                <div className={styles.projectdetails}>
                    <img src={getImageUrl("Whisk/painPoints.png")} alt="Pain Points" />
                    <p>
                        <ul className={styles.painpoints }>
                            <li> Users find it difficult to reach the bakery location to order and purchase bakery items </li>
                            <li> Some users also have a difficult time comprehending the language (considering the fact that India is a big multilingual country) </li>
                            <li> Reaching the location may also be difficult </li>
                            <li> Choosing the right item, getting it delivered at the right time. </li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className={styles.thedesign}>
                <h2>
                    The Design
                </h2>
                <p>
                    In order to help with rapid iteration of each screen, paper wireframes were made. However, a storyboard is essential to be done prior to wireframes and prototypes as it establishes a clear user experience narrative. Following this, elements were chosen and placed in order to alleviate user's pain points that were previously identified in the prototypes and wireframes.
                </p>
                <img src={getImageUrl("Whisk/storyboard_sticker.png")} alt="Storyboard" />
                <p>
                    Both Big Picture and Close-Up storyboards were made in order to get a clearer picture.
                    Big picture storyboards provide an overview of the user experience, while close-up storyboards focus on specific interactions. Together, they offer a comprehensive understanding of the user journey and enable effective communication and collaboration in the design process.
                </p>
                <div className={styles.imagegridPersona}>
                    <img src={getImageUrl("Whisk/closeupstoryboard.png")} alt="Close up storyboard" />
                    <img src={getImageUrl("Whisk/bigstorystoryboard.png")} alt="Big storyboard" />
                </div>

                <img src={getImageUrl("Whisk/Wireframes.png")} alt="Wireframes" />
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("Whisk/paperwireframes.png")} alt="Paper Wireframes" />
                </div>
                <p>
                    <ul className={styles.painpoints }>
                        <li> In order to help with rapid iteration of each screen, paper wireframes were made.Elements were chosen and placed in order to alleviate user's pain points that were previously identified.Digital wireframes were created based on user research and in order to conduct usability testing and try to identify important CTA that might have been missed.purchase bakery items </li>
                        <li> At first, there was no indication regarding when an item had been added to cart, but upon usability testing it was identified to add a pop-up "Cart" checking screen that allows user to easily checkout or continue shopping. </li>
                    </ul>
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("Whisk/digitalwireframes.png")} alt="Digital Wireframes" />
                </div>

                <img src={getImageUrl("Whisk/lofiprototypesticker.png")} alt="Low Fidelity Prototypes" />
                <p>
                    This low-fidelity prototype incorporates the feedback and insights obtained from the usability testing phase and allows a customer to easily place orders for their favourite bakery items through the A Whisk Away Bakery App.
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("Whisk/lo-fi prototype.gif")} alt="Low Fidelity Prototype GIF" />
                </div>
                <div className={styles.loficont }>
                    <a className={styles.lofiprototype } href="https://www.figma.com/proto/yz9vSHtuPaHoNeRX6BRsoJ/Bakery---Lo---Fi?type=design&node-id=1-134&t=NIh8EcNvKqdI1jzF-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A134&show-proto-sidebar=1&mode=design" target="_blank">
                        You can find the Lo-Fi prototype here!
                    </a>
                </div>

                <img src={getImageUrl("Whisk/usability.png")} alt="Usability Study" />
                <p>
                    I conducted usability studies with 5 different users belonging to different age groups, to understand their perceptions.
                    <ul>
                        <li className={styles.usability} >Users wanted an immediate confirmation of item being added to cart</li>
                        <li className={styles.usability} >Users found it difficult to find the accessibility settings</li>
                        <li className={styles.usability}>Users wanted to toggle between pick-up and delivery, and also wanted to go to the previous screen easily</li>
                    </ul>
                </p>

                <img src={getImageUrl("Whisk/mockups.png")} alt="Mockups" />
                <p>
                    At first, there was actually no way of users knowing what each accessibility setting does. But after the usability study, it was found that adding icons and symbols can help users understand.
                </p>
                <div className={styles.imageUserFlow}>
                    <img src={getImageUrl("Whisk/AWhiskAwaymockup.gif")} alt="A Whisk Away Mockup" />
                </div>
                <p>
                    A better user flow was identified for the Hi-Fi prototype with login screen appearing as soon as you open the app. The buttons (especially pertaining to important CTA) were made more prominent using colour and typography hierarchy.
                </p>
                <a className={ styles.mockup} href="https://www.figma.com/proto/IIm2wrTRYWtoxHoNzqrpDd/Updated-A-Whisk-Away-Lo-Fi-Wireframes?node-id=166-949&starting-point-node-id=166%3A944&t=zA92EvhABAaMnsKA-1&mode=design" target= "_blank" >
                    You can find the Hi-Fi prototype here!
            </a>

                <h2 className={styles.keytakeaways}>
                    Key Takeaways
                </h2>
                <p>
                    This project being my first UX one definitely taught me a lot of things. I learned how to create user-friendly digital experiences by understanding user needs, conducting research, and iteratively improving designs based on feedback.
                </p>
                <img src={getImageUrl("Whisk/AWhiskAway_long.png")} alt="A Whisk Away cover photo" className={styles.hificoverphoto} />

                <img src={getImageUrl("ScanAppetit/Impact.png")} alt="Impact" />
                <p>
                    The introduction of a dedicated app for the homegrown bakery has considered an important and big group of users - busy professionals. With features such as seamless online ordering, personalised preferences, and accessibility considerations, the app provides a convenient and inclusive experience, allowing busy individuals to easily enjoy the bakery's delicious treats amidst their hectic schedules.
                </p>

                <img src={getImageUrl("Whisk/learnings.png")} alt="Leanings" />
                <p>
                    This project provided invaluable insights into the key priorities of customers, expanding my understanding of their core needs and preferences. It also shed light on crucial call-to-action (CTA) elements that I may not have considered otherwise. By immersing myself in the user's perspective, this project enabled me to develop an application that places the user at the forefront, delivering a truly user-centric experience.
                </p>

                <img src={getImageUrl("Whisk/future.png")} alt="Leanings" />
                <p>
                    I want to incorporate live tracking to ease user anxiety in my delivery service. Additionally, I aim to enhance the customization process beyond a basic format and plan to conduct more user group research for increased inclusivity.
                </p>

                <a href="/" onClick={onBackToHomeClick} className={styles.back}>Back to Home</a>

            </div>

        </section>
    );
}