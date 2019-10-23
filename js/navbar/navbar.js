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

export { NAV_BAR }