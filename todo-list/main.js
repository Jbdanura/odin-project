class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  setID(id) {
    this.id = id;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }
}

let ids = 0;

class Project {
  constructor(name) {
    this.name = name;
    this.id = this.assignId();
    this.tasks = [];
  }

  addTask(task) {
    const taskId = this.tasks.length + 1;
    task.setID(taskId);
    this.tasks.push(task);
  }

  assignId() {
    return ids++;
  }

  setName(name) {
    this.name = name;
  }

  deleteTask(i) {
    this.tasks.splice(i, 1);
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }
}
const defaultProject = new Project('Main project');
const projects = {
  0: defaultProject,
};

const projectContainer = document.querySelector('.project-container');
const taskContainer = document.querySelector('.task-container');
renderProjects();

const addProject = document.querySelector('.add-project');
const projectModal = document.querySelector('.project-modal');

addProject.addEventListener('click', () => {
  projectModal.style.display = 'inline';
});

const addTask = document.querySelector('.add-task');
const taskModal = document.querySelector('.task-modal');

addTask.addEventListener('click', () => {
  if (currentProject != -1) {
    taskModal.style.display = 'inline';
  }
});

const quitProjectModal = document.querySelector('.btn-quitProjectModal');
quitProjectModal.addEventListener('click', () => {
  projectModal.style.display = 'none';
  document.querySelector('.project-form').reset();
});

const quitTaskModal = document.querySelector('.btn-quitTaskModal');
quitTaskModal.addEventListener('click', () => {
  taskModal.style.display = 'none';
  document.querySelector('.task-form').reset();
});

const projectForm = document.querySelector('.project-form');
const taskForm = document.querySelector('.task-form');

var currentProject = 0;
projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = projectForm.elements.name.value;
  const project = new Project(name);
  projects[project.getId()] = project;
  renderProjects();
  currentProject = project.getId();
  renderTasks();
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = taskForm.elements.title.value;
  const description = taskForm.elements.description.value;
  const date = taskForm.elements.date.value;
  const priority = taskForm.elements.priority.value;
  const task = new Task(title, description, date, priority);
  projects[currentProject].addTask(task);
  renderTasks();
});

function renderProjects() {
  projectContainer.innerHTML = '';
  for (let i = 0; i < Object.keys(projects).length; i++) {
    if (projects[i] !== null) {
      const div = document.createElement('div');
      div.classList.add('subproject');
      div.addEventListener('click', () => {
        if (projects[i] != null) {
          currentProject = projects[i].getId();
          renderTasks();
        }
      });
      div.innerHTML = projects[i].getName();
      const button = document.createElement('button');
      button.classList.add('subproject-btn');
      button.innerHTML = 'X';
      button.addEventListener('click', () => {
        projects[i] = null;
        renderProjects();
        taskContainer.innerHTML = '';
        currentProject = -1;
      });
      div.appendChild(button);
      projectContainer.appendChild(div);
    }
  }
}
function renderTasks() {
  taskContainer.innerHTML = '';
  const { tasks } = projects[currentProject];
  for (let i = 0; i < tasks.length; i++) {
    const div = document.createElement('div');
    div.classList.add('subtask');
    const title = tasks[i].getTitle();
    const date = tasks[i].getDate();
    const divTitle = document.createElement('div');
    divTitle.innerHTML = title;
    div.appendChild(divTitle);
    const divDate = document.createElement('div');
    divDate.innerHTML = date;
    div.appendChild(divDate);
    var divModal = document.createElement('div');
    divModal.classList.add('divModal');
    divModal.style.display = 'none';
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    div.addEventListener('click', () => {
      divModal.style.display = 'inline';
    });
    const modalQuit = document.createElement('button');
    modalQuit.classList.add('taskModal-quit');
    modalQuit.innerHTML = 'X';
    modalQuit.addEventListener('click', () => {
      divModal.style.display = 'none';
      event.stopPropagation();
    });
    modalContent.appendChild(modalQuit);

    var form = document.createElement('form');
    form.classList.add('task-form');

    const formTitle = document.createElement('input');
    const labelTitle = document.createElement('label');
    labelTitle.setAttribute('for', 'title');
    labelTitle.innerHTML = 'Title:';
    formTitle.setAttribute('type', 'text');
    formTitle.setAttribute('value', title);
    formTitle.setAttribute('name', 'title');
    formTitle.required = true;

    const labelDescription = document.createElement('label');
    labelDescription.setAttribute('for', 'description');
    labelDescription.innerHTML = 'Description:';
    const formDescription = document.createElement('input');
    formDescription.setAttribute('type', 'text');
    formDescription.setAttribute('value', tasks[i].getDescription());
    formDescription.setAttribute('name', 'description');
    formDescription.required = true;

    const labelDate = document.createElement('label');
    labelDate.innerHTML = 'Due date:';
    labelDate.setAttribute('for', 'date');
    const formDate = document.createElement('input');
    formDate.setAttribute('type', 'date');
    formDate.setAttribute('value', tasks[i].getDate());
    formDate.setAttribute('name', 'date');
    formDate.required = true;

    const radio = document.createElement('div');
    radio.classList.add('radio');
    const highLabel = document.createElement('label');
    highLabel.setAttribute('for', 'high');
    highLabel.innerHTML = 'High';
    const midLabel = document.createElement('label');
    midLabel.setAttribute('for', 'mid');
    midLabel.innerHTML = 'Mid';
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute('for', 'low');
    lowLabel.innerHTML = 'Low';
    const formHigh = document.createElement('input');
    formHigh.setAttribute('type', 'radio');
    formHigh.setAttribute('name', 'priority');
    formHigh.setAttribute('value', 'high');
    formHigh.required = true;
    const formMid = document.createElement('input');
    formMid.setAttribute('type', 'radio');
    formMid.setAttribute('name', 'priority');
    formMid.setAttribute('value', 'mid');
    const formLow = document.createElement('input');
    formLow.setAttribute('type', 'radio');
    formLow.setAttribute('name', 'priority');
    formLow.setAttribute('value', 'low');
    radio.appendChild(highLabel);
    radio.appendChild(formHigh);
    radio.appendChild(midLabel);
    radio.appendChild(formMid);
    radio.appendChild(lowLabel);
    radio.appendChild(formLow);

    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Modify');
    submit.classList.add('taskChange-btn');

    form.appendChild(labelTitle);
    form.appendChild(formTitle);
    form.appendChild(labelDescription);
    form.appendChild(formDescription);
    form.appendChild(labelDate);
    form.appendChild(formDate);
    form.appendChild(radio);
    form.appendChild(submit);

    modalContent.appendChild(form);
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const title = form.elements.title.value;
      const description = form.elements.description.value;
      const date = form.elements.date.value;
      const priority = form.elements.priority.value;
      projects[currentProject].tasks[i].setTitle(title);
      projects[currentProject].tasks[i].setDescription(description);
      projects[currentProject].tasks[i].setDueDate(date);
      projects[currentProject].tasks[i].setPriority(priority);
      renderTasks();
    });

    divModal.appendChild(modalContent);
    const button = document.createElement('button');
    button.classList.add('subtask-btn');
    button.innerHTML = 'X';
    button.addEventListener('click', () => {
      projects[currentProject].deleteTask(i);
      renderTasks();
    });
    div.appendChild(button);
    div.appendChild(divModal);
    taskContainer.appendChild(div);
  }
}
