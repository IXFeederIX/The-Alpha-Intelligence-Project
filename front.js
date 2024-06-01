const percentageElement = document.querySelector('.percentage');
const visionExplanation = document.querySelectorAll('.hidden');
let percentageValue = 0;
const visionWrapper = document.querySelector(".vision-wrapper")
const ourVisionBody = document.querySelector(".our-vision")
const chargeScreen = document.querySelector(".container-charging")
const cyberFacts = [

  "A phishing email is opened every 39 seconds.",
  "The average cost of a data breach is $4.24 million.",
  "Over 50% of all cyberattacks target small and medium-sized businesses.",
  "Weak or stolen passwords are responsible for over 80% of data breaches.",
  "There are over 200 billion malware attacks attempted every year.",
  "The number of ransomware attacks has increased significantly since 2015.",
  "Social engineering is a common tactic used by cybercriminals.",
  "Cybersecurity skills are in high demand globally.",
  "Multi-factor authentication (MFA) is a powerful way to prevent unauthorized access.",
  "Keeping software up to date with security patches is crucial for protection.",
  "Strong passwords should be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and symbols.",
  "Be cautious about clicking links or opening attachments in emails, even from seemingly known senders.",
  "Regular backups of your data are essential in case of a cyberattack.",
  "Use caution with public Wi-Fi networks, as they are often not secure.",
  "Mobile devices can also be targets, so secure them with strong passwords and security software.",
  "The Internet of Things (IoT) introduces new security vulnerabilities. Choose devices with strong security features.",
  "Cybersecurity is an ongoing process. Stay informed about threats and update your security practices.",
  "Everyone has a role to play in cybersecurity. By being vigilant and following best practices, we can all help protect ourselves.",
  "Cybersecurity is about technology, people, and processes. Training employees on best practices is essential.",
];
function getRandInt(){
  const chargeParagraph = document.querySelector(".fact-paragraph")

  let getRandIntVar = Math.floor(Math.random() * 19)
chargeParagraph.innerHTML = cyberFacts[getRandIntVar]

}
getRandInt()
window.onload = function () {
  chargeScreen.classList.add("fadeOut")
}
chargeScreen.addEventListener("animationend",(e)=>{
  chargeScreen.style.display = "none";
})

const incrementPercentage = () => {
    if (percentageValue < 99) {
        percentageValue++;
        percentageElement.textContent = percentageValue;
        setTimeout(incrementPercentage, 1);
    }

};
const getStarted = document.querySelector(".get-started").addEventListener("click",function(){
  window.open("https://ixfeederix.github.io/The-Alpha-Intelligence-Project/indexAlpha.html", '_blank').focus();
})
incrementPercentage();
const discordBtn2 = document.querySelector(".discord-btn2")
const discordBtn = document.querySelector(".discord-btn").addEventListener("click", function() {
    window.open("https://discord.com/invite/R2rP5sr5kX", '_blank').focus();

  });
  incrementPercentage();
discordBtn2.addEventListener("click", function() {
    window.open("https://discord.com/invite/R2rP5sr5kX", '_blank').focus();

  });

  let handleClick = true;

  function hideEl() {
    visionExplanation.forEach(element => {
      if (element.classList.contains("hidden")) {
        element.style.display = "none";
      }if (handleClick === false) {
        element.classList.remove("hidden")
        element.style.display = "flex";
        visionWrapper.style.backgroundColor = "#191919";
        ourVisionBody.style.backgroundImage = "none";
        visionWrapper.classList.add("fade-in")
ourVisionBody.style.height = "75em"

        if (element.classList.contains("vision-bottom")) {
          /// do nothing  
        }else{
            element.classList.add("swipe-up")
        }

document.querySelector(".start-wrapper").style.display = "none";
    }
    });
  }
  
  hideEl(); 
const logoStart = document.querySelector(".wrapper-logo")  
  const startWrapper = document.querySelector(".start-wrapper");
  startWrapper.addEventListener("click", function() {
    console.log("Hi")
    handleClick = !handleClick;
    hideEl();
  });
startWrapper.addEventListener("mouseover",(e)=>{
ourVisionBody.classList.add("glow-up")
logoStart.style.opacity = "1"
})
startWrapper.addEventListener("mouseout",(e)=>{
    
        ourVisionBody.classList.remove("glow-up")
        logoStart.style.opacity = "0"


    })
    const passTest = document.querySelector(".pass-exam")
    const orRight = document.querySelector(".or-option-right")
    const orLeft = document.querySelector(".or-option")
    const ourTeam  = document.querySelector(".our-team")
    const joinAlphaButton = document.querySelector(".Alpha-Intelligence-Join")
    passTest.addEventListener("mouseover",(e)=>{
orRight.classList.add("glow-up-red")
    })
    passTest.addEventListener("mouseout",(e)=>{
      orRight.classList.remove("glow-up-red")
    })
    discordBtn2.addEventListener("mouseover",(e)=>{
            orLeft.classList.add("glow-up-purple")

    })
    discordBtn2.addEventListener("mouseout",(e)=>{
      orLeft.classList.remove("glow-up-purple")

})
