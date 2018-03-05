'use strict';

let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames () {
    // value input
    let filterValue = document.getElementById('filterInput').value.toUpperCase(),
        // get names
        ul = document.getElementById('names'),
        // get items from ul
        li = ul.querySelectorAll('li.collection-item');

        for(let i = 0; i < li.length; i++){
            let a = li[i].getElementsByTagName('a')[0];
            // match
            if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
}