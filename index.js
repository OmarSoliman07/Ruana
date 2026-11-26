let burger = document.getElementById("burger");
let sideNav = document.getElementById("side-nav");
let sideLinks = document.querySelectorAll(".sideLink");
let closebtn= document.getElementById("close-btn");
let topBanner= document.querySelector(".topBanner")

burger.addEventListener("click",function(){
    sideNav.classList.toggle("d-none")
    sideNav.classList.toggle("d-md-none")
})

sideLinks.forEach(function (Link){
    Link.addEventListener("click", function(even){
        even.preventDefault();
        sideLinks.forEach(function(item){
            item.classList.remove("active");
        });
        Link.classList.add("active");
    });
});

closebtn.addEventListener("click",function(){
    topBanner.classList.add("d-none");
});