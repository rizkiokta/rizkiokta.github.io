const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    console.log(res);
    displayImage(res.data);
});

const displayImage = (images) => {
    let resultContainer = document.querySelector('#result-container');
    for (let result of images) {
        if (result.show.image) {
            const container = document.createElement('DIV');
            const img = document.createElement('IMG');
            const showTitle = document.createElement('h3');
            img.src = result.show.image.medium;
            showTitle.textContent = result.show.name;
            container.className = "tvshow-container";
            container.appendChild(img);
            container.appendChild(showTitle);
            resultContainer.appendChild(container);
        }
    }
};