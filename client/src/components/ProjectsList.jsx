import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DeleteProject from './DeleteProject';
import moment from 'moment';

export default props  => {
  const [project, setProject] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    projectsList();
  }, []);

  const projectsList = () => {
    axios.get("http://localhost:8000/api/project")
      .then(response => {
        console.log(response.data);
        setProject(response.data);
        setLoaded(true);
      }).catch(err => console.error(err));
  }

  const removeFromDom = (projectId) => {
    setProject(project.filter(project => project._id !== projectId))
  }

  const changeStatus = (project_id, status) => {
    axios.put(`http://localhost:8000/api/project/${project_id}/edit`, {"status": status} )
    .then(response => {
      console.log(response.data);
      projectsList();
    }).catch(err => console.error(err));
  }

  return (
    <div>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th><h2>BackLog</h2></th>
            <th><h2>In Progress</h2></th>
            <th><h2>Completed</h2></th>
          </tr>
        </thead>
        <tbody>
          {loaded && <>
              <tr>
                <td>
                { project.filter(project => project.status==='backlog').map( (project,i) => 
                <div key={i}> 
                  <h5> {project.name} </h5>
                  <p> Due:  { moment(project.dueDate).format('MM/DD/YYYY') }  </p>
                  <button class="btn btn-warning" onClick={e=> changeStatus(project._id, 'in progress')}> Start Project </button> 
                </div>
                )}
                </td>
                <td>
                {project.filter(project => project.status==='in progress').map( (project,i) => 
                <div key={i}> 
                  <h5> {project.name} </h5>
                  <p> Due: { moment(project.dueDate).format('MM/DD/YYYY') } </p>
                  <button class="btn btn-success" onClick={e=> changeStatus(project._id, 'completed')} > Move to Completed </button> 
                </div>
                )}
                </td>
                <td>
                {project.filter(project => project.status==='completed').map( (project,i) => 
                <div key={i}> 
                  <h5> {project.name} </h5>
                  <p> Due: { moment(project.dueDate).format('MM/DD/YYYY') }  </p>
                  <DeleteProject projectId={project._id} successCallback={()=>removeFromDom(project._id)}/>
                </div>
                )}
                </td>
              </tr>
              </>
            }
        </tbody>
      </table>
    </div>
  )
}
