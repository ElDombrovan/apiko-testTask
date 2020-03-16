'use strict';

import { API_KEY, API_URL, IMAGE_ENDPOINT } from './const.js';
import { createNode, appendNode } from './dom.js';
import { Project } from './components/Project.js';
import { ProjectTileList } from './components/ProjectTileList.js';

export const generateApiUrl = (URL_PATH) => {
    const url = `${API_URL}/3${URL_PATH}?api_key=${API_KEY}`;
    return url;
};

export const apiFetch = (url) => 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        return data.results;
}).catch(error => console.log('error is', error));

export const apiProject = (url) => 
    fetch(url)
    .then(res => res.json())
    .then(data => {
        return data;
}).catch(error => console.log('error is', error));




export const apiSearch = async (searchQuery) => {
    const url = generateApiUrl('/search/multi') + '&query=' + searchQuery;
    const searchResults = await apiFetch(url);

    return ProjectTileList({
        projects: searchResults,
        id: 'search-results',
    });
    
};

export const getTrends = async () => {
    const url = generateApiUrl('/trending/all/day');
    const trends = await apiFetch(url);

    return ProjectTileList({
        projects: trends,
        id: 'trends',
    });
    
};

export const getProject = async (project_type, id) => {
    const url = generateApiUrl(`/${project_type}/${id}`);
    const project = await apiProject(url);

    return Project({
        image: project.poster_path,
        name: project.original_title,
        description: project.overview,
        id: project.id,
    });
};


export const getProjectRecomendations = async (project_type, id) => {
    const url = generateApiUrl(`/${project_type}/${id}/similar`);
    const projects = await apiFetch(url);

    return ProjectTileList({
        projects,
        id: 'similar', 
    });
};
