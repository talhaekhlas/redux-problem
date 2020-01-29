import React from 'react';
import {useParams} from "react-router-dom";

const Project = () => {
    let {id} = useParams();
    
    return (
        <div className="content">
            <h1>I am project {id}</h1>
        </div>
    );
};

export default Project;