import React from 'react';
import { v4 as uuid } from "uuid";
import { Consumer } from '../context';
import Skill from './Skill';
function Skillsection() {
  return (
    <Consumer>

      {(value) => {
        const { skill } = value;
        const finalSkillRow = [];
        for (let i = 0; i < skill.length / 4; i++) {
          let SkillRow = skill.slice(i * 4, (i + 1) * 4);
          finalSkillRow.push(<div key={uuid()} className="d-flex justify-content-around py-3">
            {
              SkillRow.map((skill) => (
                <Skill key={uuid()} skill={skill} />
              ))}
          </div>
          );
        }
        return (

          <div className="bg-light w-100 shadow" >
            <div className="container text-center py-5">
              <h1 className="font-weight-light">
                <span className="text-info">Techonology </span>Stack
              </h1>
              <div className="lead">
                I design,develop and deliver with these weapons
              </div>
              <div>
                {finalSkillRow}
              </div>
            </div>
          </div>
        )
      }}

    </Consumer>
  )

}
export default Skillsection;