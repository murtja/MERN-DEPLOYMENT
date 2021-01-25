import axios from 'axios'
import React, { useEffect, useState } from "react"
import ProjectsList from '../components/ProjectsList'
import {Link} from '@reach/router';
import { navigate } from '@reach/router'


const Home = () => {
  const [ projectz, setProject ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/project')
    .then((response) => {
      setProject(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  const handleClick = (e) => {
    axios
      .get("http://localhost:8000/api/logout")
      .then((res) => {
        console.log(res)
        navigate("/")
      })
      .catch((err) => console.log(err))
  }

  return <div>
    <Link to={"/new"}>Add a Project</Link>
    <button class="btn btn-danger" onClick={handleClick}>Logout</button>
    <ProjectsList data={projectz} />
  </div>
}
export default Home
