const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');

const app = express();

const projects = [{ id: uuid(), title: 'Projeto Angular', owner: 'Felipe Bogo' },
{ id: uuid(), title: 'Projeto React', owner: 'Felipe Bogo' },];

app.use(cors());
app.use(express.json());


function logRequests(request, response, next) {
  const { method, url } = request;

  console.log(`${method.toUpperCase()} ${url}`);
  return next();
}

app.use(logRequests);


app.get('/projects', (request, response) => {
  const { title } = request.query;

  const result = title ? projects.filter(project => project.title.includes(title)) : projects;

  return response.json(result);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIdx = projects.findIndex(project => project.id === id);

  let ret;

  if (projectIdx < 0) {
    ret = response.status(400).json({ error: `Índice ${id} não encontrado.` })
  } else {
    const project = { id, title, owner };

    projects[projectIdx] = project;

    ret = response.json(project);
  }

  return ret;
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;

  const projectIdx = projects.findIndex(project => project.id === id);

  let ret;

  if (projectIdx < 0) {
    ret = response.status(400).json({ error: `Índice ${id} não encontrado.` })
  } else {
    projects.splice(projectIdx, 1);
    ret = response.status(204).send();
  }

  return ret;
});

app.listen(3333, () => {
  console.log("🚀 Node iniciado na porta 3333");
});