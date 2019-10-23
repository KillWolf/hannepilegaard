//initialize 
import { NAV_BAR } from './navbar/navbar.js'
import { home } from './pages/homePage.js';
import { advocacy } from './pages/advocacyPage.js'
import { getHashPath} from './utility/utility.js';

const routes = {
	'/' : home,
	'/advocacy' : advocacy
};

let hashPath = getHashPath();

const rootDiv = document.getElementById('root');
const navDiv = document.getElementById('navbar')

navDiv.innerHTML = NAV_BAR;
rootDiv.innerHTML = routes[hashPath];


const onNavigate = (pathName) => {
	console.log(hashPath)
	window.history.pushState(
		{},
		pathName,
		window.location.origin + pathName
		)
		hashPath = getHashPath();	
	rootDiv.innerHTML = routes[hashPath]
}

//exposed
window.onNavigate = onNavigate;

window.onpopstate = () => {
  rootDiv.innerHTML = routes[hashPath]
}