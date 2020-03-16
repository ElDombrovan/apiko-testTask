'use strict';

import './styles/index.scss';

import Search from './js/components/Search.js';
import { Home } from './js/components/Home.js';

const header = document.getElementById('header');

const searchContainer = Search();
header.append(searchContainer);

const app = document.querySelector('#root');
const homeContainer = Home();

app.append(homeContainer);
