// Styles
import '../css/style.css';

//initialize 
import { NAV_BAR } from './common/navbar.js'
import { home } from './pages/homePage.js';
import { advocacy } from './pages/advocacyPage.js'
import { getHashPath} from './utility/utility.js';

const routes = {
	'/' : home,
	'/adv	ocacy' : advocacy
};

let hashPath = getHashPath();

const rootDiv = document.getElementById('root');
const navDiv = document.getElementById('navbar')

navDiv.innerHTML = NAV_BAR;
rootDiv.innerHTML = routes[hashPath];


const onNavigate = (pathName) => {
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
	hashPath = getHashPath();
	rootDiv.innerHTML = routes[hashPath]
}