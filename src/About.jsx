import React from 'react';
import './About.css';

// Extracted static content into a constant
const ABOUT_US_CONTENT = [
    "Welcome to Nursery",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce interdum quisque ullamcorper curabitur; sapien felis. Consequat nisl rhoncus at pretium class magnis. Nisi metus mollis convallis cras nibh. Primis gravida ex felis malesuada vehicula natoque donec maximus. Aliquet magnis sollicitudin semper pulvinar sociosqu quisque potenti. Nascetur lacinia non diam venenatis magna quisque efficitur sit.",
    "Lorem ipsum odor amet, consectetuer adipiscing elit. Enim facilisis lobortis eros hendrerit parturient proin elit ultrices ornare. At ridiculus risus litora iaculis varius eget. Facilisis massa libero vehicula, vivamus netus nam lacinia. Eu eros sociosqu fringilla in risus fusce litora. Duis aliquet integer aptent malesuada malesuada. Dis netus dui curabitur congue dapibus risus tortor volutpat etiam. Imperdiet adipiscing donec rhoncus aliquam congue sapien. Posuere congue massa cursus; dolor aliquam pellentesque."
];

// Extracted reusable function to render paragraphs
function renderParagraph(content, index) {
    const className = index === 0 ? "about-us-description" : "about-us-content";
    return <p key={index} className={className}>{content}</p>;
}

function About() {
    return (
        <div className="about-us-container">
            {ABOUT_US_CONTENT.map(renderParagraph)}
        </div>
    );
}

export default About;