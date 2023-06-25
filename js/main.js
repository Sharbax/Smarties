let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

// Click On An Li And Use RemoveActive funtion and ManageImgs
switcherLis.forEach((li) => {

    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add Active To The Clicked One
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");  
        this.classList.add("active")
    });
};

//Manage Imgs 
function manageImgs() {
    // Removing All Images At First
    imgs.forEach((img) => {
        img.style.display = "none";
    }); 
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = 'block';
    })
}


// Get all the navigation links
const navLinks = document.querySelectorAll('.navbar .nav-link');

// Loop through the navigation links and attach the event listener
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove the 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add the 'active' class to the clicked link
    this.classList.add('active');
  });
});
