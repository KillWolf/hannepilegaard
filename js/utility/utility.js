const getHashPath = () => {
    let index = window.location['href'].indexOf('#');
    if(index > 0) {
        return window.location['href'].substring(index + 1);
    } 
    return '/';
}

export { getHashPath };