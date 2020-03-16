
// Selecting elements from the DOM
const searchButton = document.querySelector('#search');;
const searchInput = document.querySelector('#exampleInputEmail1');
const moviesContainer = document.querySelector('#movies-container');
const searchResults = document.querySelector('#search-results');



import Search from './components/Search.js';
import * as func from './functions.js';
import * as DOM from './dom.js';
import * as API from './api.js';


resetInput = () => {
    searchBar.searchQuery = '';
}

searchButton.onclick = (e) => {
    e.preventDefault();
    const searchQuery = searchBar.value;
    API.apiSearch(searchQuery);
}

const root = document.getElementById('container');
const searchContainer = Search();
DOM.appendNode(root, searchContainer);


getMovieTrends();
getTvTrends();
// apiSearch();