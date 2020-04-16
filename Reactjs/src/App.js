import React, {useState, useEffect} from 'react';
import api from './services/api'

import Header from './components/Header';
import './App.css';
import coruja from './assets/coruja.jpeg';

export default function App() {
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);
  
  async function handleAddProject(){ 
    //setProjects([... projects, `Projeto ${Date.now()}`]);
    const response = await api.post('projects',{
      title: `Projeto ${Date.now()}`,
      owner: "Felipe Bogo"
    });

    setProjects([... projects, response.data]);
  }
  
  return (
    <> {/* fragment: usado para chamar dois componentes um 
           abaixo do outro, pois não pode haver um componente sem container */}
      <Header title="HomePage">
        <p>Teste children</p>
      </Header>
      
      <img width={300} src={coruja} alt="coruja"/>
      
      <ul>
        {projects.map(project => <li key={project.id} >{project.title}</li>)}
      </ul>

      <button onClick={handleAddProject} >Add Project</button>

    </>

  );
}