import React from "react";
import "./Skill.css";
import FD from "./FD";
import BD from "./BD";
import OS from "./Other";

const Skill = () => {
  return (
    <section id="skills">
      <h5>What Skills I have</h5>
      <h2>My Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            {FD.map((elem, index) => (
              <article key={index} className="skill__details skills-card">
                <elem.icon className="skill__details-icons skills-card-img" />
                <div>
                  <h4 className="skills-card-name">{elem.skillName}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="skill__backend">
          <h3>Backend Development</h3>
          <div className="skill__content">
            {BD.map((elem, index) => (
              <article key={index} className="skill__details skills-card">
                <elem.icon className="skill__details-icons skills-card-img" />
                <div>
                  <h4 className="skills-card-name">{elem.skillName}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="soft__skill">
          <h3>Other Skills</h3>
          <div className="skill__content">
            {OS.map((elem, index) => (
              <article key={index} className="skill__details skills-card">
                <elem.icon className="skill__details-icons skills-card-img" />
                <div>
                  <h4 className="skills-card-name">{elem.skillName}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
