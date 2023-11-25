const projects = [
  { name: 'Tic Tac Toe ', technology: 'C#' },
  { name: 'Gym Management', technology: 'Java' },
  { name: 'TicketR', technology: 'Node.js' },
  { name: 'Traffic Sign Classifier', technology: 'Python' },
  { name: 'Sort Visualizer', technology: 'Node.js' },
  { name: 'Hotel Buddy', technology: 'C++' },
  { name: 'Instant Messenger App', technology: 'Python' },
  { name: 'E-Commerce Website', technology: 'MERN' }
];

function displayProjects(filterText) {
  const projectList = document.getElementById('projectList');
  projectList.innerHTML = '';

  const filteredProjects = projects.filter(project =>
    project.technology.toLowerCase().includes(filterText.toLowerCase())
  );

  filteredProjects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.textContent = project.name;
    projectItem.classList.add('project-item'); 

    projectItem.style.padding = '10px';
    projectItem.style.backgroundColor = '#f8f8f8';
    projectItem.style.borderRadius = '5px';
    projectItem.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    projectItem.style.marginBottom = '10px';

    projectList.appendChild(projectItem);
  });
}

document.getElementById('filter').addEventListener('input', function (event) {
  displayProjects(event.target.value);
});

displayProjects('');
