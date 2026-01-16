AOS.init({ duration: 1200, once: true });

// INTRO
document.body.style.overflow = "hidden";
function openGift() {
    document.getElementById("introOverlay").classList.add("open");
    setTimeout(()=> {
        document.getElementById("introOverlay").classList.add("show-letter");
    },1000);
}
function closeIntro() {
    const o=document.getElementById("introOverlay");
    o.style.opacity="0";
    setTimeout(()=> {
        o.remove();
        document.body.style.overflow="";
    },1000);
}

// MUSIC
const music=document.getElementById("bg-music");
function toggleMusic(){ music.paused?music.play():music.pause(); }

// DAYS
const startDate=new Date("2016-01-24");
document.getElementById("days").innerText=
    Math.floor((new Date()-startDate)/86400000);

// NEXT SECTION
const sections=[...document.querySelectorAll("section")];
let currentSection=0,isScrolling=false;

document.querySelectorAll(".next-btn").forEach((btn,i)=>{
    btn.onclick=()=>{currentSection=i+1;sections[currentSection]?.scrollIntoView({behavior:"smooth"});}
});

// MODAL
function showImage(src){
    document.getElementById("modalImg").src=src;
    document.getElementById("imageModal").style.display="flex";
}

// HEART
function createHeart(){
    const h=document.createElement("div");
    h.className="heart";
    h.innerText="❤️";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=14+Math.random()*20+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
}
setInterval(createHeart,900);

// SECRET
window.addEventListener("scroll",()=>{
    const s=document.getElementById("secret");
    if(s.getBoundingClientRect().top<window.innerHeight/1.2) s.classList.add("show");
});