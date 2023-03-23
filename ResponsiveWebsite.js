const itemList = document.querySelector('.container');
const gridViewBtn = document.getElementById('grid-btn');
const listViewBtn = document.getElementById('list-btn');

gridViewBtn.addEventListener('click', () => {
    itemList.classList.remove('list-active');
});

listViewBtn.addEventListener('click', () => {
    itemList.classList.add("list-active");
});