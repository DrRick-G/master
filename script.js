let apiKey = 'c6d176151ba65e9c16288136ac44c8b2'

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

function Deflier(){
  $('.defile').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  Icon();
}

function Icon(){
    let precedent = document.querySelectorAll('.slick-prev');
let suivant = document.querySelectorAll('.slick-next');
for (let i = 0; i < precedent.length; i++) {
  console.log(i)
  precedent[i].innerHTML = `<i class="fas fa-chevron-circle-left"></i>`;
  suivant[i].innerHTML = '<i class="fas fa-chevron-circle-right"></i>';
}
}


  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
  .then(response => response.json())
  .then(data => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(donnees => {
        


      let resultats = data.results;
      Display(resultats);
    })

      function Display(resultats){
        let defile = document.querySelector(".defile");
        defile.innerHTML = "";
        if(resultats.length !=0){
            for (let i = 0; i < resultats.length; i++) {
                for (let i =0; i<20; i++){
                defile.innerHTML+=`
                <div class="case col-4">
                <img src="https://image.tmdb.org/t/p/w500${resultats[i].poster_path}" class="d-block w-100" alt="...">
                <div class="transparent"></div>
                </div>
                
                `    
            }
        }
        Deflier();
    }
}
  })


    // for (let a = 0; a < a.length; a++) {
        
        
    // }









      