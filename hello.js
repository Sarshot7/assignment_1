const navigation = document.getElementById('navigation');
const logo = document.getElementById('logo');

window.onscroll =  function() {scrollfunction()};

	function scrollfunction(){
		if (document.body.scrollTop> 80 || document.documentElement.scrollTop> 80){
			navigation.style.padding = "25px 10px";
			logo.style.fontsize = "25px";
		}
		else{
			navigation.style.padding = "60px 10px";
			logo.style.fontsize = "35px"; 
		}
	}

	var slide = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slide++;
  if (slide> x.length) {slide = 1}
  x[slide-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}







var box = document.getElementById("myBox");
for(let photo=1;photo<=4;photo++){
  var photosl="img"+photo;
  var img = document.getElementById(photosl);
  console.log(img);
  img.onclick = function(){
    box.style.display = "block";
    boxImg.src = this.src;
  }
}

var boxImg = document.getElementById("img01");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  box.style.display = "none";
}

const sections=document.querySelectorAll('section');
const navitem=document.querySelectorAll('#navigation #menu ul li a');
window.addEventListener('scroll',()=>{
  let current="";
  sections.forEach(section=>{
    const sectionTop=section.offsetTop;
    const sectionHeight=section.clientHeight;
    
    if(pageYOffset>=((sectionTop-100)-sectionHeight/3)){
      current=section.getAttribute('id');
      console.log(pageYOffset);
  console.log(sectionTop);
    }
  })
  console.log(current);
  
  navitem.forEach(a=>{
    a.classList.remove('active');
    if(a.classList.contains(current)){
      a.classList.add('active');
    }
  })
})

