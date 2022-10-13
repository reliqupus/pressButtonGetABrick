window.addEventListener('load', () => {
    function addNewLayer(color) {
        const div = document.createElement('div');

        div.classList.add('part');
        div.style.background = color;

        const container = document.getElementById('container');
        container.appendChild(div);
    }

    const items = document.getElementsByClassName('item');
    for (const item of items) {
        item.addEventListener("click", () => {
            addNewLayer(item.style.backgroundColor);
        })
    }
});