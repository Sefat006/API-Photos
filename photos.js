const loadPhotos = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhotos(data);
};
loadPhotos();

const displayPhotos = (photos) => {
    //console.log(photos);
    const photosContainer = document.getElementById("photos-container");
    photosContainer.classList.add("grid");
    photosContainer.classList.add("grid-cols-3");
    photos.forEach((photo) => {
        const photoDiv = document.createElement("div");
        photoDiv.innerHTML = `
            <div class="width-250px shadow-lg border-2">
            <img src="${photo.thumbnailUrl}" alt="">
                <p class="text-xl mb-5">${photo.title}</p>
            </div>
        `;
        photosContainer.appendChild(photoDiv);
    });
};