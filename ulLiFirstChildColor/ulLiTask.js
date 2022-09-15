const ul = document.querySelectorAll("ul");

ul.forEach((li) => {
    let liClick = li.querySelector(`ul li:last-child`);

    liClick.addEventListener('click', () => {
        let newLi = liClick.querySelector(`li:first-child`);
        newLi.classList.add('class');

    });
});