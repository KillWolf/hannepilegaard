import { HERO_IMAGE_FUNCTION } from '../common/heroimage.js'

const home = `
<div class="header-container">
		${HERO_IMAGE_FUNCTION('HANNE PILEGAARD', 'mountain')}
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

export { home };