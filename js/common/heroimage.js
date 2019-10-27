const HERO_IMAGE_FUNCTION = (headerString, image) => { 
    
    return `
        <div class="header-image-container">
            <div class="hero-image-text-container">
                <h1 class="hero-image-text">${headerString}</h1>
                <div class="header-stripes"></div>                
            </div>
                <div class="hero-image-container">
                    <img src="images/${image}.jpeg" alt="">
                </div>
            </div>
            `
}

export { HERO_IMAGE_FUNCTION };