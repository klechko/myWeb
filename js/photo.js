const addImg = (server, id, secret, title, container) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `https://live.staticflickr.com/${server}/${id}_${secret}_c.jpg`);
    newImage.setAttribute('alt', title);
    container.appendChild(newImage);
}

const dohvati = () => {
  const container = document.querySelector('.photo-container');

  const url = 'https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2def70a557fefadc7d7019ce65a0e921&photoset_id=72157720214840576&user_id=76981156%40N05&format=json&nojsoncallback=1';
  
  fetch(url, {
    method: 'GET',
    credentials: 'same-origin'})
    .then(response => response.json())
    .then(data => {
      // console.log(data.photoset.photo);
      data.photoset.photo.forEach(photo => {
        addImg(photo.server, photo.id, photo.secret, photo.title, container)
        // console.log(photo.title);
      });
    })
    .catch(e => 
        console.log('Error: ' + e.message)
    )
}

document.body.addEventListener('load', dohvati())