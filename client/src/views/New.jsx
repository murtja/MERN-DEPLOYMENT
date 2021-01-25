import ProjectForm from "../components/ProjectForm"
import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';

const New = (props) => {
  const [errors, setErrors] = useState([]);
  const [newProject, setnewProject] = useState({
      name: "",
      dueDate: "",
  })

  const addnewProject = (e) => {
    console.log(e)
    e.preventDefault()
    axios.post(`http://localhost:8000/api/new`, newProject)
    .then((response) => {
      navigate("/project")
    })
    .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr =[];
        for(var key of Object.keys(errorResponse)){
            errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
    })
  }

  const handleChange = (e) => {
    console.log("e.target.name: ", e.target.name)
    console.log("e.target.value: ", e.target.value)
    setnewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <ProjectForm newProject={newProject}
      onSubmitProp={addnewProject}
      handleChange={handleChange} />
      {errors.map((err,idx) => <p key={idx}>{err}</p>)}
    </div>
  )
}

export default New;
