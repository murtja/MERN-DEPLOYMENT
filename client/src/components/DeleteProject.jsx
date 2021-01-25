import React from 'react';
import axios from 'axios';


export default props => {
    const {projectId, successCallback} = props;

    const deleteProject =(e) => {
        axios.delete(`http://localhost:8000/api/project/${projectId}`)
        .then(res => successCallback(projectId));
    }
    return (
        <button class="btn btn-danger" onClick={deleteProject}>Delete</button>
    )
}