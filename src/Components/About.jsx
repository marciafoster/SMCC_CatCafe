import React from "react";
import './ABout.css';

export default function About() {
  const projectBio =
    "This project was built by a team of 4 developers. We used a React VITE framework to create a Youtube clone that allows the user to search & display a single video as well as the ability to share & send any video. ";

  const developers = [
    {
      name: "Shaquala",
      bio:
        "Shaquala is a cat lover. She loves God and has 2 daughters who bring her joy. She strives for greatness and wants to pay it forward so that others may have opportunities to fulfill their dreams.",
      githubLink: "https://github.com/shaqfred",
      image: "https://avatars.githubusercontent.com/u/96317236?s=96&v=4",

    },
    {
      name: "Marcia",
      bio:
        " ",
      githubLink: "https://github.com/marciafoster",
      image: "https://avatars.githubusercontent.com/u/124259577?v=4"
    },
    {
      name: "Christine",
      bio: "",
      githubLink: "https://github.com/ChristineMarchese",
      image: "https://avatars.githubusercontent.com/u/115177980?v=4"
    },

    {
      name: "Chris",
      bio: " ",
      githubLink: "https://github.com/CSAN7690",
      image: "https://avatars.githubusercontent.com/u/127960419?v=4"
    }

  ];

  return (
    <div className="about-wrapper">
      <div className="section" style={{ marginTop: "100px" }}>
        <h2>About Our Project</h2>
        <p>{projectBio}</p>
      </div>

      <div className="section">
        <h2>About the Developers</h2>
        {developers.map((developer, index) => (
          <div className="developer" key={index}>
            {developer.image && <img src={developer.image} alt={developer.name} className="developer-image" />}
            <h3 data-text={developer.name} className="retro-text">
              {developer.name}
            </h3> {/* Some fancy effects ✨ */}
            <p>{developer.bio}</p>
            <a href={developer.githubLink}>{developer.name}'s GitHub Link</a>
          </div>
        ))}
      </div>
    </div>
  );
}
