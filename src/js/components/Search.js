import { createNode, appendNode, clearNode } from '../dom.js';
import {apiSearch} from '../api.js';

const onSearchClick = async (e) => {
    e.preventDefault();
    const searchBar = document.querySelector('#searchBar');
    const searchQuery = searchBar.value;
    const searchResults = await apiSearch(searchQuery);
    const app = document.querySelector('#root');
    clearNode(app);
    app.append(searchResults);
};

const Search = () => {
    const div = createNode('div'),
         form = createNode('form'),
         input = createNode('input'),
         button = createNode('button');

    div.setAttribute('id', 'search');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Search');
    input.setAttribute('id', 'searchBar');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Search';
    button.addEventListener('click', onSearchClick);

    appendNode(form, input);
    appendNode(form, button);
    appendNode(div, form);

    return div;
};

export default Search;