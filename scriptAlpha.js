
const welcomectn = document.querySelector(".welcome-ctn")
const elStars = document.querySelector(".el-stars")
const main = document.querySelector(".main");
const dialog = document.querySelector(".dial")
const scene = document.querySelector('.scene');
const earthCtn = document.querySelector(".intro-ctn")
const introSpanEarth = document.querySelector(".intro-span-earth")
const alert = document.querySelector(".alert")
const dialSpace = document.querySelector(".dial-space")
const dialSpan = document.querySelector(".dial-span")
const body = document.body
const x = document.getElementById("myAudio");
const myVideo = document.querySelector(".myVideo")
const menu = document.querySelector(".menu")
////////////// dialogs /////////

const dialArray = [
  "And also with the incredible soar of the Cryptocurrency Ecosystem, we can consider how fast is this world changing",
  "Among the Years Narratives, Politics, Economical Changes Are running over this World.",
  "So by far is really hard to track where we are we going as a Civilization, since we can't understand things that we can see over the surface",
  "Cryptocurrency ecosystem, with the Creation Bitcoin is something that has revolutionzed the Finance World as we know it, but....",
  "as far as we know it, many cryptocurrencies are being created that is very hard to track wich one are valuables, an wich ones are not.",
  "And that's why we decided to create this Iniciative called Alpha Intelligence, help newcomers in the cryptocurrency world, to make their own DYOR",
  "Since Almost 99% of cryptocurrencies are Worthless at all.",
  "So Considering These Numbers we must be VERY cautious where do we land to and where do we stand, in order to be a succesful investor",
  "All the Cryptocurrencies among the Ecosystem will rather die over bitcoin since Bitcoin is the One who run the market",
"We will Provide you with all the tools Required to be a Tier 1 Investor in the Market, with all you need to know, and it's all up to you to take it!",
  "So... Are you Ready to take the Next-Step that Take You To the Stars?"
]
const dialogStart = ["Don't be Afraid, In the cryptocurrency Ecosystem you need to understand many concepts that we will explore by making Our Own DYOR, In the cryptocurrency ecosystem, conducting your own research (DYOR) is crucial for making informed decisions. It involves understanding various concepts such as blockchain technology, decentralized finance (DeFi), tokenomics, and market trends. By delving deeper into these topics, you can gain a better grasp of how the cryptocurrency market operates and make more educated investment choices. Remember, knowledge is power in this rapidly evolving space, so don't be afraid to expand your understanding and stay informed."
];

const dialSpaceArray = [
  "Hello, traveler. I see that you are eager to embark on your adventure. Rest assured, we are currently en route to our destined location, the main operational basement, which is conveniently located near the planet Lamport, we are in the Year 2560 and humanity is finally in his peak travelling over the universe in search of more resources and planets that can be Terraformed",
  "You might understand that many years have passed since the creation of Bitcoin. There have been numerous cycles and changes in the world—climate changes, politics, and disasters—that have occurred over the decades. Somehow, humanity’s persistence has prevailed so far. However, the Earth has been severely damaged due to changes in the atmosphere, mass extinction, and other situations that have affected these issues.",
  "The People who couldn't afford Bitcoin in his early stage, those who couldn't surpass the upcoming issues that started to make echo in the World, Lack Of Vital Resources Like Water, Food, and many others things that started to attack humanity, but with the Crumble of the FIAT in the world wasn't even the peak of the iceberg, people started to notice that having FIAT wasn't enough, and started to figure out what alternatives they could have on their hands",
  "Governments attempting to exert control over what they couldn’t fully manage, individuals awakening to the realization that their perceived reality was a fabrication—a grand illusion perpetuated by the system. This intricate web of deception ensnared them, preventing them from questioning decisions and maintaining an artificial equilibrium.",
  "Believing that widespread adoption of institutions alone would suffice is a fallacy. As I mentioned earlier, these institutions were deliberately designed to maintain the masses’ complacency and ignorance, serving the interests of a system established long ago.", 
 "But here we are now, in the middle of space, facing the next level of decentralization. People are shedding their principles, abandoning their humanity, and embarking on a journey across the stars in search of something called freedom and prosperity. The allure of cryptocurrency has gripped their imaginations, promising a financial revolution beyond the confines of traditional systems.",
"...",
"I think i went to far on this one...?",
"Well Forget Everything that i told You Before!",
"It's meaningless Since i can't relate to the minds of the human beings, we are so different!",
"We are In Our Destination, Stay with me i'll take care of you to give you instructions!"

]
////////////////////////////////

////////////// statements /////////


let counter = 0;
let enableCounter = false;
let mainStart = true;
let audioMute = false
let removeProperties;

////////////////////////////////

////////////// functions /////////

function checkAudio() {
  x.play();
}
function keypresSfx(){
  if (audioMute === true) {
    
  }else{
  let audio = new Audio('sfx/go.mp3');
  audio.play();
  }


}
const CreateDiv = () =>{
  for (let i = 0; i < 60; i++){
      scene.innerHTML += "<div></div>";
  }
  const stars = document.querySelectorAll('div');
  stars.forEach( star => {
    let x = `${Math.random() * 200}vmax`;
    let y = `${Math.random() * 100}vh`;
    let z = `${Math.random() * 200 - 100}vmin`;
    let rx = `${Math.random() * 360}deg`;
    star.style.setProperty('--x', x);
    star.style.setProperty('--y', y);
    star.style.setProperty('--z', z);
    star.style.setProperty('--rx', rx);
    let delay = `${Math.random() * 1.5}s`;
    star.style.animationDelay = delay;
    if(removeProperties === true){
      star.style.removeProperty('--x');
      star.style.removeProperty('--y');
      star.style.removeProperty('--z');
      star.style.removeProperty('--rx');
      star.style.animationDelay = "";

    }
  })
}
function createStartButton(){
  const buttonSpace = document.createElement("button")
  earthCtn.appendChild(buttonSpace)
  buttonSpace.classList.add("button-start")
  buttonSpace.textContent = "Let's GO!";



  buttonSpace.addEventListener("click",(e)=>{
earthCtn.style.display = "none"
elStars.style.display = "flex"
body.style.backgroundColor = "black"
body.classList.remove("fadeBgStars")



scene.style.display = "flex"


///////////


CreateDiv();



setTimeout(() => {
alert.style.display = "flex"
let audioAlert = new Audio('sfx/alarm.mp3')
audioAlert.play()
audioAlert.onended = (event)=>{
  counter = 0;

  alert.style.display = "none";
dialSpace.style.display = "flex";
enableCounter = !enableCounter
}

}, 1500);
})
}
////////////////////////////////


function mainStartSet() {
  checkAudio();
if (mainStart === true) {
  main.classList.add("fadeout");
  keypresSfx();
  main.addEventListener("animationend", animationEndHandler);
  body.style.backgroundColor = "#191919";
  main.style.display = "none";
  welcomectn.style.display = "flex";
  welcomectn.classList.add("fade-in");
  mainStart = !mainStart
enableCounter = !enableCounter

}else{

           dialog.innerHTML = ""
         dialog.innerHTML = dialogStart[0]
         if (counter >= 3) {
enableCounter = !enableCounter

          counter = 0;
        audioMute = !audioMute
        body.removeEventListener("keyup", keydownHandler);

       
       
        setTimeout(() => {
            welcomectn.style.display = "none"
        earthCtn.style.display = "flex"
        earthCtn.classList.add("fade-in")

        
        setTimeout(() => {
          body.classList.add("fadeBgStars")
          counter = 0;

        }, 1500);
        let startDial;
        startDial = setInterval(() => {

            counter++
            introSpanEarth.innerHTML = dialArray[counter]
            if (counter === dialArray.length - 1) {
            clearInterval(startDial)
            counter = 0;
           createStartButton()
           dialSpan.innerHTML = dialSpaceArray[counter]
                      enableCounter = !enableCounter
setTimeout(() => {
                        enableCounter = !enableCounter
                        body.addEventListener("keyup", keydownHandler2);

}, 1500);
audioMute = !audioMute
            }
          }, 5000);
        
          }, 1000);
        }
}


///////////////////////


          
     


         ///////////////////////

  }
   function middleStartSet() {
               dialSpan.innerHTML = dialSpaceArray[counter]
              if(counter >= 11){
                enableCounter = !enableCounter
                dialSpace.style.display = "none"
                scene.style.display = "none"
                removeProperties = !removeProperties
                CreateDiv();
                myVideo.style.display = "flex";
                x.pause()
              x.currentTime = 0;
              myVideo.play()
              myVideo.setAttribute('oncontextmenu', "return false;")
            myVideo.muted = false;
setTimeout(() => {
  const menu = document.querySelector(".menu")

  menu.style.display = "flex";
  menu.classList.add("fade-in")

}, 1000);
              }
   } 

const keydownHandler = (e) => {
  event.preventDefault();

 mainStartSet()
keypresSfx()
if(enableCounter === true){
  setTimeout(() => {
    counter++
  }, 1000);
}
};
const keydownHandler2 = (e) =>{
  event.preventDefault();

middleStartSet()
  keypresSfx()

if(enableCounter === true){
  setTimeout(() => {
    counter++
  }, 1000);

}
}

const animationEndHandler = (e) => {
  
  welcomectn.removeEventListener("animationend", animationEndHandler);
};



body.addEventListener("keyup", keydownHandler);



