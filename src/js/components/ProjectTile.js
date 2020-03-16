import { createNode, appendNode, clearNode } from '../dom.js';
import { getProject } from '../api.js';

const onTitleClick = (id) => {

    const project = getProject('movie', id);

    project.then(result => {
        const app = document.querySelector('#root');
        clearNode(app);
        app.append(result);
    })
    
}

export const ProjectTile = ({ title, imgLink, id }) => {
    const project = createNode('article'),
          projectLink = createNode('a'),
          projectTitle = createNode('h4'),
          projectImg = createNode('img');

    projectLink.addEventListener('click', () => onTitleClick(id));
    projectTitle.innerHTML = title;
    projectImg.setAttribute('src', imgLink);
    appendNode(projectLink, projectTitle);
    appendNode(project, projectImg);
    appendNode(project, projectLink);

    return project;
};