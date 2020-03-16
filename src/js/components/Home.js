import { createNode, appendNode } from '../dom.js';
import { getTrends } from '../api.js';

export const Home = () => {
    const div = createNode('div'),
          title = createNode('h3');
    title.innerHTML = 'Trends';

    div.setAttribute('class', 'container__trends');

    const trends = getTrends();

    trends.then(result => {
        appendNode(div, title);
        appendNode(div, result);
    });

    return div;
};