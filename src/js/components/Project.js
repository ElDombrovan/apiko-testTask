import { createNode, appendNode } from '../dom.js';
import { IMAGE_ENDPOINT } from "../const.js";
import { getProjectRecomendations } from '../api.js';

export const Project = ({ image, name, description, id }) => {
    const div = createNode('div'),
          img = createNode('img'),
          title = createNode('h4'),
          overview = createNode('p'),
          recs = createNode('h4'),
          btn = createNode('button');
    div.setAttribute('id', id);
    div.setAttribute('class', 'project-page');
    img.setAttribute('src', `${IMAGE_ENDPOINT}` + `${image}`);
    recs.innerHTML = 'You may also like';
    title.innerHTML = name;
    overview.innerHTML = description;

   
    appendNode(div, img);
    appendNode(div, title);
    appendNode(div, overview);
    appendNode(div, btn);
    appendNode(div, recs);

    const similar = getProjectRecomendations('movie', id);

    similar.then(result => {
        appendNode(div, recs);  
        appendNode(div, result);
    });

    return div;
};