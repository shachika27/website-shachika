import React, { useState } from "react";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Work } from "./components/Work/Work";
import { Footer } from "./components/Footer/Footer";
import { ScanAppetit } from "./components/ScanAppetit/ScanAppetit";
import { Whisk } from "./components/Whisk/Whisk";
import { Neudesic } from "./components/Neudesic/Neudesic";
import { College } from "./components/College/College";
import { Personal } from "./components/Personal/Personal";

function App() {
    const [showScanAppetitSection, setShowScanAppetitSection] = useState(false);
    const [showHeroSection, setShowHeroSection] = useState(true);
    const [showWhiskSection, setShowWhiskSection] = useState(false);
    const [showNeudesicSection, setShowNeudesicSection] = useState(false);
    const [showCollegeSection, setShowCollegeSection] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleScanAppetitSection = () => {
        setShowScanAppetitSection(!showScanAppetitSection);
        setShowHeroSection(!showHeroSection);
        setShowWhiskSection(false);
        setShowNeudesicSection(false);
        setShowCollegeSection(false);
        scrollToTop();
    };

    const toggleWhiskSection = () => {
        setShowWhiskSection(!showWhiskSection);
        setShowHeroSection(!showHeroSection);
        setShowScanAppetitSection(false);
        setShowNeudesicSection(false);
        setShowCollegeSection(false);
        scrollToTop();
    };

    const toggleNeudesicSection = () => {
        setShowNeudesicSection(!showNeudesicSection);
        setShowHeroSection(!showHeroSection);
        setShowScanAppetitSection(false);
        setShowWhiskSection(false);
        setShowCollegeSection(false);
        scrollToTop();
    };

    const toggleCollegeSection = () => {
        setShowCollegeSection(!showCollegeSection);
        setShowHeroSection(!showHeroSection);
        setShowScanAppetitSection(false);
        setShowWhiskSection(false);
        setShowNeudesicSection(false);
        scrollToTop();
    };

    const backToHome = () => {
        setShowScanAppetitSection(false);
        setShowHeroSection(true);
        setShowWhiskSection(false);
        setShowNeudesicSection(false);
        setShowCollegeSection(false);
        scrollToTop();
    };

    return (
        <div className={styles.App}>
            <Navbar />
            {showHeroSection && <Hero />}
            {showScanAppetitSection ? (
                <ScanAppetit onBackToHomeClick={backToHome} />
            ) : showWhiskSection ? (
                <Whisk onBackToHomeClick={backToHome} />
            ) : showNeudesicSection ? (
                <Neudesic onBackToHomeClick={backToHome} />
            ) : showCollegeSection ? (
                <College onBackToHomeClick={backToHome} />
            ) : (
                                <Work
                                    onScanAppetitClick={toggleScanAppetitSection}
                                    onWhiskClick={toggleWhiskSection}
                                    onNeudesicClick={toggleNeudesicSection}
                                    onCollegeClick={toggleCollegeSection}
                />
            )}
            <Personal />
            <Footer />
            </div>
    );
}

export default App;
