import React from "react";

// This component shows a grid of programming languages
// It's used to display the list of languages in a grid layout
export default function Grid() {
    // List of programming languages to display
    const languages = [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "Ruby",
        "PHP",
        "Swift",
        "TypeScript",
    ];

    return (
        <div className="grid-container">
            <div className="grid-list">
                {/* Create a grid item for each language */}
                {languages.map((language, index) => (
                    <div key={index} className="grid-item">
                        {language}
                    </div>
                ))}
            </div>
        </div>
    );
}
