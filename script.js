
  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.toDateString();

    // Tambahkan nol didepan jam, menit, dan detik jika kurang dari 10
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    // Update elemen clock dengan jam dan tanggal saat ini
    var clock = document.getElementById('clock');
    clock.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + date;
  }

  // Panggil fungsi updateClock setiap detik
  setInterval(updateClock, 1000);

  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      if (card.id === 'card1') {
        alert('Card 1 clicked!');
      } else if (card.id === 'card2') {
        alert('Perguruan Silat Bima suci');
        window.location.href = 'http://perguruansilatbimasuci.mysch.id/';
      } else if (card.id === 'card3') {
        alert('SMKN 2 Kuningan');
        window.location.href = 'http://smkn2-kng.sch.id/';
      } else if (card.id === 'card4') {
        alert('Card 4 clicked!');
      }
    });
  });

  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  