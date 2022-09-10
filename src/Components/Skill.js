import React from 'react';
import { v4 as uuid } from "uuid";
function Skill(props) {
    const { imageUrl, name, starsTotal, starsActive } = props.skill;
    const starList = [];

    for (let i = 0; i < starsTotal; i++) {
        if (i < starsActive) {
            starList.push(<span key={uuid()} className="text-info h1">*</span>)
        }
        else {
            starList.push(<span className="h1" key={uuid()}>*</span>)
        }
    }
    return (
        <div>
            <img src={imageUrl} alt={name} className="img-fluid rounded-circle" style={{ height: "100px", width: "100px" }} />
            <br />
            <div>{starList}</div>
        </div>
    );
}
export default Skill;