import { createNode, appendNode } from '../dom.js';
import { ProjectTile } from './ProjectTile.js';
import { IMAGE_ENDPOINT } from '../const.js';


export const ProjectTileList = ({ projects, id }) => {
    const projectList = createNode('div');
    projectList.setAttribute('id', id);

    projects
    .map(movie => {
        appendNode(projectList, ProjectTile(
            {
                title: movie.original_title ? movie.original_title : movie.original_name,
                imgLink: `${IMAGE_ENDPOINT}/${movie.poster_path}`,
                id: movie.id,
            }
        ));
        }
    );

    return projectList;
};