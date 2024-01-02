const loadPhotos = async() => {
    const url = `https://jsonplaceholder.typicode.com/photos`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhotos(data.data);
}
loadPhotos();

const displayPhotos = (photos) => {
    const photosContainer = document.getElementById('photos-container');
    photos.forEach = (photo =>{
        photoDiv = document.createElement('div');
        photoDiv.classlist.add('grid grid-cols-3');
        photoDiv.innerHTML = `
            <div class="width-250px shadow-lg border-2">
            <img src="${photo.albumId}" alt="">
                <p class="text-xl mb-5">${photo.data.data.title}</p>
            </div>
        `;
        photosContainer.appendChild(photoDiv);
    })
}