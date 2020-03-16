'use strict';

export const openTab = (e, tabName) => {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName('tab__content');
    tabLinks = document.getElementsByClassName('tab__link');
    for (i=0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none'; 
    }

    for(i=0; i < tabLinks.length; i++){
        tabLinks[i].className = tabLinks[i].className.replace('active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    e.currentTarget.classList.toggle('active');

   document.getElementById('movies').classList.toggle('active');
};