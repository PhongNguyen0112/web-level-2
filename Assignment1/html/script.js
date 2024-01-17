const projectContainer = document.getElementById('project');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const projects = document.querySelectorAll('.each-project');
let currentProjectIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        project.style.display = i === index ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    showProject(currentProjectIndex);
});

prevButton.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    showProject(currentProjectIndex);
});
showProject(currentProjectIndex);
