import React from 'react';
import { getImageUrl } from '../../utils'
import styles from "./College.module.css"

export const College = ({ onBackToHomeClick }) => {
    return (
        <section className={styles.container}>
            <div className={styles.flexcontainer}>
                <div className={styles.heading}>
                    <a>
                        College Projects
                    </a>
                </div>
                <a href="/" onClick={onBackToHomeClick} className={styles.back}>Back to Home</a>
            </div>
            <div className={styles.projectoverview}>
                <h2>
                    Project Overview
                </h2>
                <img src={getImageUrl("College/CollegeProjects_CoverPhoto.png")} alt="A Whisk Away Cover Photo" />
                <p>
                    Two projects are discussed in this section which were completed during my tenure at college.
                    Empathy-Driven Solutions for Supporting Parents of Autistic Children
                    Visualizing an accessible and robust solar charging infrastructure for Electric Vehicles (EV) at college campuses using Mind Mapping
                </p>
            </div>
            <div className={styles.projectoverview}>
                <h2>
                    1. Empathy-Driven Solutions for Supporting Parents of Autistic Children
                </h2>
                <p>
                    As an integral component of our academic program, we were tasked with undertaking a project centered around the principles of "Design Thinking." Motivated by our personal connections to loved ones impacted by Autism Spectrum Disorder, our team harnessed the acquired skills of Design Thinking to devise a solution aimed at enhancing the well-being of parents with autistic children. This experience provided a profound introduction to the empathetic observation of human interactions within their surroundings, fostering an iterative, hands-on approach to crafting innovative and impactful solutions.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Problem.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    Parents of autistics kids NEED emotional support and services BECAUSE the societal perception of autism is not conducive to create a constructive atmosphere for personal growth.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Goal.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    Designing AusCare, a comprehensive platform designed specifically for parents of autistic children, offering a range of integrated services. From fostering a supportive community of like-minded individuals to connecting with philanthropists, AusCare provides a holistic solution. In addition, AusPad and AuStrap offer technological assistance, further enhancing the support and resources available to parents on the platform.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/Duration.png")} alt="Scan Appetit Cover Photo" className={styles.duration} />
                <p classname={styles.roleduration}>
                    May 2021 - August 2021
                </p>
                <img src={getImageUrl("ScanAppetit/Role.png")} alt="Scan Appetit Cover Photo" />
                <p className={styles.roleduration}>
                    Part of a Design Thinking team of 4
                </p>
            </div>

            <div className={styles.theprocess}>
                <h2>
                    The Process
                </h2>
                <p>
                    I conducted user research to gain insights into the target audience whom I identified to be were busy working professionals who were customers of A Whisk Away Bakery. Through this process, I created empathy maps to understand their emotions and motivations, developed personas to represent their characteristics, and crafted a user journey map to visualize their interactions with the app. These efforts enabled me to identify crucial pain points, forming a solid foundation that will inform the design and development of the app to deliver a seamless and user-centric experience.
                </p>
                <img src={getImageUrl("College/EmpathizeWUSers.png")} alt="Problem Statement " />
                <p>
                    During our comprehensive study, we focused on the Parents of autistic children as our primary users. To gain a deep understanding of their experiences, we conducted interviews with our target users following which we employed the technique of Empathy Maps, enabling us to empathize with their thoughts, emotions, and challenges.
                </p>
                <div className={styles.persona}>
                    <img src={getImageUrl("College/EmpathyMap_DTL.png")} alt="Persona of John" />
                </div>
                <p>
                    Additionally, we conducted interviews with several parents of autistic kids, establishing meaningful connections to uncover valuable insights into their pain points and aspirations.
                </p>
                <img src={getImageUrl("College/PainPoints.png")} alt="Pain Points" />
                <p>
                    After conducting the interviews and creating the empathy map, it became evident and straightforward to identify the pain points experienced by the parents. The following are the pain points that were identified during this process.
                </p>
                <ul className={styles.research}>
                    <li>
                        They feel lonely
                    </li>
                    <li>
                        They don't have personal/self-care time
                    </li>
                    <li>
                        Communication with the autistic patient is very difficult
                    </li>
                    <li>
                        They tackle depression
                    </li>
                    <li>
                        They juggle their own mental issues along with the patient's short comings
                    </li>
                    <li>
                        The reactions of the society are Judgmental and Unsupportive.
                    </li>
                </ul>
                <img src={getImageUrl("ScanAppetit/Persona.png")} alt="User Journey Map" />
                <p>
                    Through the integration of this extensive information, we developed two unique Personas by employing the standardized templates within the framework of Design Thinking methodology. This methodology enabled us to gain a comprehensive understanding of the diverse needs and desires of parents, empowering us to customize our solutions in a manner that would have a significant and positive impact on their lives.
                </p>
                <div className={styles.userjourney}>
                    <img src={getImageUrl("College/PERSONA_DTL.png")} alt="Persona 1" />
                </div>

                <img src={getImageUrl("College/define.png")} alt="Define" />
                <p>
                    After gathering insights from our research, we proceeded to formulate Point of View (POV) and How Might We (HMW) statements, which helped us define the specific problems we aimed to solve.
                    "Parents of autistics kids NEED emotional support and services BECAUSE the societal perception of autism is not conducive to create a constructive atmosphere for personal growth." - POV statement
                    "How might we aid in the emotional and mental well- being of an autistic child's parent in order to alleviate their mental burden." - HMW statement
                    We then delved into opportunity mapping, where we identified various areas of potential improvement based on the needs and pain points of our users. This process allowed us to gain a comprehensive understanding of the challenges faced by parents of autistic children.
                </p>
                <div className={styles.userjourney}>
                    <img src={getImageUrl("College/OpportunityMap_DTL.png")} alt="Persona 1" />
                </div>

                <img src={getImageUrl("College/ideate.png")} alt="Ideate" />
                <p>
                    Moving forward, we entered the Ideation stage, where we employed techniques such as affinity diagramming and mind mapping to explore a wide range of ideas and possibilities. With the users' needs as our guiding principle, we engaged in brainstorming sessions to generate innovative solutions. These sessions enabled us to think creatively and consider multiple perspectives, ensuring that our solution would effectively alleviate the mental, physical, and financial burdens experienced by our users.
                </p>
                <div className={styles.userjourney}>
                    <img src={getImageUrl("College/affinitydiagram.png")} alt="Affinity Diagram" className={styles.ideate } />
                </div>
                <p>
                    By carefully evaluating and prioritizing the ideas generated, we selected the most impactful ones that held the greatest potential for providing relief to our target audience. This meticulous selection process ensured that our solution was tailored to address the specific challenges faced by parents of autistic children, resulting in a meaningful and transformative impact on their lives.
                </p>

                <img src={getImageUrl("College/storyboarding.png")} alt="Ideate" />
                <p>
                    Utilizing storyboarding as a tool, we devised a comprehensive solution named AusCare - an all-in-one platform designed specifically for Parents of autistic children.
                </p>
                <div className={styles.userjourney}>
                    <img src={getImageUrl("College/Storyboarding_dtl.png")} alt="Affinity Diagram" className={styles.ideate} />
                </div>
                <p>
                    This platform is augmented by technological support, including AusPad and AuStrap. To validate our concept, we conducted pretotype testing with a select group of Autistic families, actively seeking their invaluable feedback and recommendations. These insights will guide future implementations as we strive to fulfill our vision of enhancing the lives of Parents of autistic children.
                </p>

                <img src={getImageUrl("College/pretotype.png")} alt="Ideate" />
                <div className={styles.imagegridPersona}>
                    <img src={getImageUrl("College/WEBSITE_DTL_1.png")} alt="Close up storyboard" />
                    <img src={getImageUrl("College/WEBSITE_DTL_2.png")} alt="Big storyboard" />
                    <img src={getImageUrl("College/WEBSITE_DTL_3.png")} alt="Close up storyboard" />
                    <img src={getImageUrl("College/WEBSITE_DTL_4.png")} alt="Big storyboard" />
                </div>

                <img src={getImageUrl("College/testing.png")} alt="Testing" />
                <p>
                    During this phase, we conducted video calls with the users to provide detailed explanations of the different products and services offered by AusCare, as well as the functionalities of AusPad and AuStrap. To gather feedback on the solution, we utilized Google Forms, asking users to rate the usefulness and user-friendliness of the products. Most of the users were happy with AusCare and its products and services.
                </p>

                <img src={getImageUrl("College/futurescope.png")} alt="Future Scope" />
                <p>
                    Constructive criticism was gathered during the evaluation of the pretotype plan, incorporating feedback from users and acquaintances. The forthcoming iterations of the pretotype will include the implementation of the following feedback points: enabling user interaction with the child remotely, enhancing website interactivity and facilitating community exchanges, improving product marketing for a wider audience reach, expanding the range of augmented reality apps on the AusPad for enhanced learning, customization of the AusPad to better suit the needs of autistic children, and the development of additional apps for communication skill enhancement.
                </p>    
            </div>

            <div className={styles.projectoverview}>
                <h2>
                    2. Visualizing an accessible and robust solar charging infrastructure for Electric Vehicles (EV) at college campuses using Mind Mapping
                </h2>
                <p>
                    Our collaborative endeavor with four fellow teammates culminated in a compelling research paper that explores the visualization of an accessible solar charging infrastructure for electric vehicles at college campuses. Guided by a user-centric approach, we embarked on a journey of discovery to uncover innovative solutions. By combining our diverse perspectives and expertise, we shed light on the potential of creating sustainable and inclusive environments. Our paper presents a captivating vision, showcasing the transformative power of merging renewable energy and user-centric design principles in shaping the future of transportation.
                </p>
            </div>

            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Problem.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    Existing research mainly focuses on internal technological enhancements and the production cycle of electric vehicles, while government initiatives adopt a top-down approach to EV adoption. However, there is a lack of emphasis on addressing broader challenges and meeting the specific needs of individual users. Moreover, the majority of efforts solely aim at convincing prospective users of the superiority of EVs, disregarding other influential factors in adoption decisions.
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/The Goal.png")} alt="Scan Appetit Cover Photo" />
                <p>
                    This paper, thus aims at utilizing a critical thinking bottom-up approach to understand EV users and proposes a solar-powered EV charging infrastructure for a typical college campus while escalating the e-mobility market of India to solve these gaps
                </p>
            </div>
            <div className={styles.projectdetails}>
                <img src={getImageUrl("ScanAppetit/Duration.png")} alt="Scan Appetit Cover Photo" className={styles.duration} />
                <p classname={styles.roleduration}>
                    August 2021 - January 2022
                </p>
                <img src={getImageUrl("ScanAppetit/Role.png")} alt="Scan Appetit Cover Photo" />
                <p className={styles.roleduration}>
                    Part of a Design Thinking team of 4
                </p>
            </div>

            <div className={styles.theprocess}>
                <h2>
                    The Process
                </h2>
                <p>
                    The process incorporated 6 different user-centric approach tools & techniques across various stages viz., Customer Journey Map to understand pain points, Value Proposition Canvas to understand the value of the solution to the user, Critical to Quality to comprehend the quality level expected, Quality Function Deployment in order to transform CTQs to functional requirements, Guesstimate to determine the total cost of solar panels and Mind Map to help realise the charging infrastructure.
                </p>
                <img src={getImageUrl("College/mindmap_paper.png")} alt="Mindmap" className={styles.mindmap } />
                <p>
                    The mind map provides us with ideas and information pertaining to solving the problem.
                </p>
                <img src={getImageUrl("College/userstory.png")} alt="User Story" />
                <p>
                    In this section, we incorporated various elements to enhance our understanding of the user experience and inform our decision-making process. Firstly, we sought to approximate the number of electric vehicle (EV) users to aid in capacity building decisions. Additionally, we employed customer journey mapping and value proposition canvas techniques to identify the pain points associated with charging infrastructure and ensure our solution effectively addressed user needs. By incorporating these aspects, we aimed to create a user-centric approach that would drive the success and impact of our project.
                </p>
                <div className={styles.persona}>
                    <img src={getImageUrl("College/CustomerJourneyMap.png")} alt="Customer Journey Map" className={styles.mindmap} />
                </div>
                <p>
                    Our identified user group consists of environmentally conscious, tech-savvy, urban young adults, which aligns well with the majority of college-going students. The envisioned outcome of our project aims to be cost-effective for customers (college management) and user-friendly for consumers (EV users). By maximizing the utilization of renewable energy sources and implementing state-of-the-art EV charging facilities, educational institutions can actively fulfill their "Educational Social Responsibilities" (ESR) while simultaneously enhancing their sustainability indices.
                </p>
                <img src={getImageUrl("College/capacitydecisions.png")} alt="Capacity Decisions" />
                <p>
                    In the "Capacity Decisions" section, we focused on determining the optimum routine power requirement for the proposed accessible solar charging infrastructure. This involved carefully considering the expected charging demand and usage patterns of electric vehicle users at college campuses. By analyzing these factors, we aimed to ensure that the capacity of the charging infrastructure aligns with the anticipated needs, promoting efficient and reliable charging services. Additionally, we took into account various considerations and constraints related to capacity building, such as available space, budgetary constraints, and compatibility with existing electrical infrastructure. These factors were crucial in shaping our decision-making process and guiding the development of an effective and scalable charging solution.
                </p>
                
                <img src={getImageUrl("College/baseline.png")} alt="Baseline" />
                <p>
                    As part of our baseline analysis, we delved into the diversity of electric vehicles (EVs) and their associated charging requirements. Understanding the varied types and models of EVs, along with their specific charging needs, allowed us to gain insights into the existing landscape of EV charging infrastructure. By studying the current state of EV charging infrastructure, we aimed to identify strengths, weaknesses, and gaps in the availability, accessibility, and compatibility of charging stations. This analysis provided a solid foundation for our project, enabling us to develop a solution that addresses the diverse needs of EV users and fills any existing gaps in the charging infrastructure ecosystem.
                </p>
            </div>


        </section>
    );
}