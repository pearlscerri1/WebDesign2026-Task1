const artists = document.querySelectorAll('.artist');

artists.forEach(artist => {
  artist.addEventListener('click', (event)=> {
    artist.classList.toggle('artist-active')
  });
});
