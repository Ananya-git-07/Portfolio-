let tablinks=document.getElementsByClassName("tab-links")
let tabcontents=document.getElementsByClassName("tab-contents")

function opentab(tabname, event){
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for ( tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";

}
function closemenu(){
    sidemenu.style.right="-200px";
}
document.querySelectorAll("#sidemenu a").forEach(link => {
  link.addEventListener("click", closemenu);
});
window.addEventListener("scroll", function () {
  const navMenu=document.querySelector("nav ul");
  const homeSection=document.querySelector("#header");

  const homeTop=homeSection.getBoundingClientRect().top;

  if(homeTop<-50){
    navMenu.style.right="-200px";
  }
});




