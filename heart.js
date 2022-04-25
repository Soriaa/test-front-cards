//Permet de rendre le coeur en rouge en clickant dessus

(function() {
    const heart = document.getElementById('heart');
    heart.addEventListener('click', function() {
      heart.classList.toggle('red');
    });
  })();