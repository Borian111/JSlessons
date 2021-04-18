const changePhoto = () => {
    const pics = document.querySelector('.command');
    const facePics = pics.querySelectorAll('.command__photo');
                    
    facePics.forEach((item) => { 
            item.addEventListener('mouseenter', (elem) => {
                elem.target.dataset.src = elem.target.src
                elem.target.src = elem.target.dataset.img
            });

            item.addEventListener('mouseout', (elem) => {
                elem.target.src = elem.target.dataset.src;

            });      
    });
}    ;

export default changePhoto;