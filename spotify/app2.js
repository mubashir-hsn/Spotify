// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                    Making Global Variables.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let song = new Audio('songs/Duncan+Laurence+Arcade+Lyric+Video+ft+FLETCHER.mp3');
let play = true;
let card = Array.from(document.querySelectorAll('.spotify-cards'));
let cardplay = document.querySelector('.cardtext');
let play1 = document.querySelector('.play');
let pause = document.querySelector('.pause');
let audio1;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                Function to Add New Cards in Right Section
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function newCard(artistName, title, img, audio) {

    let html = `<div class="song-card flex_col" data-song-src="${audio}">
    <div class = "border" ></div>
     <img src="${img}" alt="">
     <img src="images/play1 (2).gif" alt="" class = "gif">
     <div class="cardtext">
         <h3>${artistName}</h3>
     <p class = "title">${title}</p> 
     <span class="play">
     <img src="svg/play.png" alt="">
 </span> 
 <span class="pause">
     <img src="svg/pause.png" alt="">
 </span> 
     </div>
 </div>`


    document.querySelector('.spotify-cards').innerHTML += html;
}
  
newCard('Duncan & Laurence','Arcade.Lorem ipsum dolor sit amet.','images/img1.jpg','English songs/Duncan+Laurence+Arcade+Lyric+Video+ft+FLETCHER.mp3')
newCard('Alexander ~ rybak','Fairy tale (lyrics).Lorem as dolor sit amet.','images/1.jpg','English songs/Alexander_rybak_-_fairy_tale_(lyrics)_trending_song(128k).m4a')
newCard('Stereo & Adam Levine','Gym Class Heroes.Lorem ipsum sit amet.','images/covers/8.jpg','English songs/Gym_Class_Heroes-_Stereo_Hearts_ft._Adam_Levine_[OFFICIAL_VIDEO](128k).m4a')
newCard(' 정국 Jung Kook','Dreamers-FIFA World Cup 2022 oundtrack.','images/5.jpg','English songs/정국_Jung_Kook_(of_BTS)_featuring_Fahad_Al_Kubaisi_-_Dreamers_-_FIFA_World_Cup_2022_Soundtrack(256k).mp3')
newCard('Kaene','Somewhere only we know .Lorem dolor sit amet.','images/covers/11.jpg','English songs/gwRWtkfh3KPf.128.mp3')
newCard('Sapiedream','Pastlives.Lorem Folor sit amet.','images/83.jpg','English songs/Pastlives(PaglaSongs).mp3')
newCard('Alec Benjamin','Let Me Down Slowly.Law dolor sit amet.','images/spotify.jpg','English songs/Let-Me-Down-Slowly---Alec-Benjamin-mp3(musicdownload.cc).mp3')
newCard('BTS (방탄소년단)','FAKE LOVE Official.Lorem ipsum dolor amet.','images/covers/5.jpg','English songs/BTS (방탄소년단) _FAKE LOVE_ Official MV(1).m4a')
newCard('GOLD LYRICALS','Taki Taki.Lorem ipsum dolor sit amet.','images/covers/1.jpg','English songs/[Taki Taki song _ lyrics _ GOLD LYRICALS].m4a')
newCard('Monoir JK','DHARIA Brownies.Lorem amet.','images/4.png','English songs/DHARIA - Sugar & Brownies (by Monoir) [Official Video].m4a')
newCard('Doctor Strange','Believer.Lorem ipsum dolor sit amet.','images/covers/4.jpg','English songs/Doctor Strange _ Believer.m4a')
newCard('Arabian Sad Song','Afra-e-frig.Lorem ipsum dolor sit amet.','images/covers/3.jpg','English songs/Afra-e-frig Song _ Arabian Sad Song _ MRA _.m4a')
newCard('Elley Duhé','MIDDLE OF NIGHT.Lorem dolor sit amet.','images/covers/6.jpg','English songs/Elley_Duhé_-_MIDDLE_OF_THE_NIGHT_(Lyrics)(128k).m4a')
newCard('Amorf MK','Faded.Lorem ipsum dolor sit amet.','images/covers/7.jpg','English songs/Faded_320(PaglaSongs).mp3')
newCard('Indila Letra','Ainsi Bas La Vida.Lorem ipsum amet.','images/covers/9.jpg','English songs/Indila_-_Ainsi_Bas_La_Vida__Lyrics_Letra_(128k).mp3')
newCard('JOKER ROBBERY','Lai Lai Lai.Lorem ipsum dolor sit amet.','images/covers/10.jpg','English songs/Lai Lai Lai Song _ Remix by Nippandab _ JOKER ROBBERY [Movie Scene].m4a')
newCard('Lindsey Stirling','Carol of the Bells.Ipsum dolor amet.','images/10.jpg','English songs/Lindsey_Stirling_-_Carol_of_the_Bells_(Official_Music_Video)(128k).m4a')
newCard('Otilia','Bilionera (lyrics).Lorem ipsum dolor sit amet.','images/1.jpg','English songs/Otilia - Bilionera (lyrics) video.m4a')
newCard('Rauf & Faik','Never lie away.Lorem ipsum sit amet.','images/image-32.png','English songs/Rauf & Faik _ childhood song Lyrics _ Never lie away song lyrics _ destvo song.m4a')
newCard('Rauf & Faik','Lela Lela Lela(Lyrics).Tp sit amet.','images/img1.jpg','English songs/Rauf, Faik _ Lela Lela Lela(English Lyrics).m4a')
newCard('Larmes & Laurence','Unstoppable.Lorem ipsum dolor sit amet.','images/2.jpg','English songs/Unstoppable_320(PaglaSongs).mp3')
newCard('Serhat Durmus','Hislerim (ft. Zerrin).Lorem ipsum dolo amet.','images/3.png','English songs/Serhat Durmus - Hislerim (ft. Zerrin).m4a')
newCard('Serhat Durmus','Yalan (ft. Ecem Telli).Color sit amet.','images/covers/1.jpg','English songs/Serhat Durmus - Yalan (ft. Ecem Telli).m4a')
newCard('Shakira','Waka Waka (Esto es Africa) sit amet.','images/img2.jpg','English songs/Waka Waka (Esto es Africa) (Cancion Oficial de la Copa Mundial de la FIFA� Sudafrica 2010).m4a')
newCard('Copa Mundial','Ye lili ye lila.Ipsum dolor sit amet.','images/covers/2.jpg','English songs/Ye lili ye lila Song _ Best Tik - Tok song.m4a')



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                 ADD Footer to Right section.
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function footer1(){

  let footer = ` <footer>
  <div class="spotify-footer">
      <div class="right-foot">
          <h3>Company</h3>
          <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
          </ul>
      </div>
      <div class="right-foot">
          <h3>Communities</h3>
          <ul>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
          </ul>
      </div>
      <div class="right-foot">
          <h3>Useful links</h3>
          <ul>
          <li>Support</li>
          <li>Free Mobile App</li>
          </ul>
      </div>
      <div class="right-foot">
          <img src="svg/instagram.svg" alt="">
          <img src="svg/twitter.svg" alt="">
          <img src="svg/facebook-02.svg" alt="">
      </div>
  
      <div class="mainFoot"><p>© 2024 Spotify Mubashir.</p></div>
  </div>
  </footer>`;
    
    document.querySelector('.right').innerHTML += footer;
  
  }
  footer1();
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//                 Start Logic of Playing Songs. 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let cards = Array.from(document.querySelectorAll('.spotify-cards .song-card'));
let audioElement = document.querySelector('.songplayer'); // Assuming a single audio element exists

// Event listeners for play and pause buttons within each card:
cards.forEach(card => {
  
  const playButton = card.querySelector('.play');
  const pauseButton = card.querySelector('.pause');
  const playGif = card.querySelector('.gif');
  const border = card.querySelector('.border');

 
    playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
    playGif.style.display = 'block';
    border.style.display = 'block';
    console.log(card.innerText);

    // Get data-song-src attribute for dynamic audio loading:
    const audioSrc = card.dataset.songSrc;

    // Ensure audioElement is properly set up:
    if (!audioElement) {
      audioElement = new Audio(audioSrc);
      audioElement.classList.add('songplayer'); // Add class if necessary
      document.body.appendChild(audioElement); // Append audioElement to body
    }

    // Load new audio if different from current:
    if (audioElement.src !== audioSrc) {
      audioElement.src = audioSrc;
      audioElement.load(); // Wait for audio to load before playing
    }

    // Reset playback if already playing:
    audioElement.currentTime = 0;
   
    // Play the audio and add event listener for end of playback:
    audioElement.play();
    audioElement.addEventListener('ended', () => {
      playButton.style.display = 'block';
      pauseButton.style.display = 'none';
      playGif.style.display = 'none';
      border.style.display = 'none';
      
    });
    
    // Pause other playing cards:

    cards.forEach((otherCard) => {
      if (otherCard !== card) {
        const otherAudio = otherCard.querySelector('.songplayer');
        const paused = otherCard.querySelector('.pause');
        const played = otherCard.querySelector('.play');
        const gif = otherCard.querySelector('.gif');
        const border = otherCard.querySelector('.border');
    
        played.style.display = 'block';
        paused.style.display = 'none';
        gif.style.display = 'none';
        border.style.display = 'none';
    
        if (otherAudio && !otherAudio.paused) {
          otherAudio.pause();
        }
      }
    });
});

  pauseButton.addEventListener('click', () => {
    if (audioElement && !audioElement.paused) {
      audioElement.pause();
      playButton.style.display = 'block';
    pauseButton.style.display = 'none';
    playGif.style.display = 'none';
    border.style.display = 'none';

    }
  
  });
});



// Optional global pause functionality (if desired):
// document.addEventListener('click', event => {
//   if (!event.target.closest('.song-card')) {
//     if (audioElement && !audioElement.paused) {
//       audioElement.pause();
//     }
//   }
// });





let turn = true;
let light = document.querySelector('.lightmode');
let plus = document.querySelector('.library-plus');
plus.addEventListener('click',()=>{
  if(turn){

    light.style.visibility = 'visible';
    turn = false;
  }
  else if(turn==false){
    
    light.style.visibility = 'hidden';
    turn = true;
  }
})

let darkmode = true;
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'light.css';
let head = document.querySelector('head');

light.addEventListener('click',()=>{
  if(darkmode){
    
    head.appendChild(link);
    
    let toggle = document.querySelector('.leftfoot-content');
    toggle.classList.remove('hover');
    toggle.classList.add('hover1');
    light.innerText = 'Dark Mode';
    light.style.backgroundColor = 'blanchedalmond';
    light.style.color = 'brown';
     let remove = document.querySelectorAll('.remove');
     remove.forEach(rev=>{
       rev.classList.remove('active');
       rev.classList.remove('hover');
     })
       let filter = document.querySelectorAll('.spotify-content img');
       filter.forEach(fill=>{
        fill.style.filter = 'invert(1)';
       })
       darkmode = false;
    }
    else if(darkmode==false){
    head.removeChild(link);
    let toggle = document.querySelector('.leftfoot-content');
    toggle.classList.add('hover');
    let add = document.querySelectorAll('.add');
    add.forEach(add=>{
      add.classList.add('active');
    })
    let remove = document.querySelectorAll('.remove');
    remove.forEach(rev=>{
      rev.classList.add('hover');
    })
    let filter = document.querySelectorAll('.spotify-content img');
       filter.forEach(fill=>{
        fill.style.filter = 'none';
       })


     light.innerText = 'Light Mode';
     light.style.backgroundColor = '#242424';
    light.style.color = 'white';
      darkmode=true;
    }
  })






















































