function appendImageElem(keyword, index) {
    // create image element
    const imgElem = document.createElement('img')
    // set properties
    imgElem.src = `https://source.unsplash.com/400x400/?${keyword}&sig=${index}` // template string

    // create gallery element
    const galleryElem = document.querySelector('.gallery') // retrieve from div class
    // append img elem to gallery elem
    galleryElem.appendChild(imgElem)
}

function removePhotos() {
    // retrieve gallery element
    const galleryElem = document.querySelector('.gallery')
    galleryElem.innerHTML = ''

}

function searchPhotos(event) {
    // create 'keyword'
    const keyword = event.target.value
    // looping for photos
    if (event.key === 'Enter' && keyword) {
        removePhotos()

        for (let i = 1; i <= 9; i++) {
            appendImageElem(keyword, i)
        }
    }

}

function run() {
    // create input element
    const inputElem = document.querySelector('input')
    // bind event 'keydown'
    inputElem.addEventListener('keydown', searchPhotos)
}

run()