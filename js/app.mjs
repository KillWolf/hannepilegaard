//initialize functions

const getHashPath = () => {
	let index = window.location['href'].indexOf('#');
	return window.location['href'].substring(index + 1);
}


// NAVBAR 
const NAV_BAR = `
<nav class="nav-big" id="nav-big">
	<div class="nav-wrapper">
		<img id="menu-logo" src="images/logo.png" height="80" alt="">
		<ul>
			<li><a href="#/" onclick="onNavigate('#/'); return false;">Home</a></li>
			<li><a href="#/advocacy" onclick="onNavigate('#/advocacy'); return false;">Advocacy</a></li>
			<li><a href="www.">Credentials</a></li>
			<li><a>Blog</a></li>
			<li><a>Contact</a></li>
		</ul>
	</div>
</nav>
`
// PAGES 
const home = `
<div class="header-container">
		<nav class="nav-big" id="nav-big">
			<div class="nav-wrapper">
				<img id="menu-logo" src="images/logo.png" height="80" alt="">
				<ul>
					<li><a href="#/" onclick="onNavigate('#/'); return false;">Home</a></li>
					<li><a href="#/advocacy" onclick="onNavigate('#/advocacy'); return false;">Advocacy</a></li>
					<li><a href="www.">Credentials</a></li>
					<li><a>Blog</a></li>
					<li><a>Contact</a></li>
				</ul>
			</div>
		</nav>
		<div class="header-image-container">
			<h1 class="hero-image-text">HANNE PILEGAARD</h1>
			<div class="hero-image-container">
				<img src="images/mountain.jpeg" alt="">
			</div>
		</div>
	</div>
	<div class="body-container">
		<div class="sub-header-container">
			<div class="sub-header">
			<h2 class="sub-header__title">ON A MISSION TO MAKE THE WORLD BETTER</h2>
			<hr>
			</div>
		</div>
		<div class="cards-container">
			<div class="single-card">
				<h3>[ Advocacy ]</h3>
				<img src="images/advocacy.jpeg" width="300" alt="">
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales enim in feugiat tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</div>
			</div>
			<div class="single-card">
				<h3>[ Blog ]</h3>
				<img src="images/advocacy.jpeg" width="300" alt="">
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales enim in feugiat tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</div>
			</div>
			<div class="single-card">
				<h3>[ Credentials ]</h3>
				<img src="images/advocacy.jpeg" width="300" alt="">
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales enim in feugiat tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</div>
			</div>
		</div>
	</div>
`
const advocacy = `
<h1 style="margin-top: 200px;">this is advocacy </h1>
`

// ROUTER LOGIC
//import { Person } from './test.mjs' // SLET ELLER LEG VIDERE
const routes = {
  '/' : home,
  '/advocacy' : advocacy
};

let hashPath = getHashPath();
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[hashPath];
document.getElementById('navbar').innerHTML = NAV_BAR;


window.onpopstate = () => {
  rootDiv.innerHTML = routes[hashPath]
}

const onNavigate = (pathName) => {
  window.history.pushState(
    {},
    pathName,
    window.location.origin + pathName
	)
	hashPath = getHashPath();	
  rootDiv.innerHTML = routes[hashPath]
}

// NAVBAR LOGIC
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-big").style.padding = "0px 0px";
    document.getElementById("menu-logo").style.height = "40px";
  } else {
    document.getElementById("nav-big").style.padding = "20px 0px";
    document.getElementById("menu-logo").style.height = "80px";
  }
}