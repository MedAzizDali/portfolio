var array = []
var i = 0
var openModal = (number) => {
    document.getElementById('modal').style.display = 'flex'
    switch (number){
        case 1:
            array = ['img/coliques 1.png','img/colique 2.png','img/coliques 4.png','img/coliques 5.png','img/coliques 6.png','img/coliques 7.png','img/coliques 8.png','img/coliques 9.png']
        break;
        case 2:
            array = ['img/Capture bonding 1.png','img/bonding 2.png','img/bonding 3.png','img/bonding 4.png']
        break
        case 3:
            array = ['img/allai.png','img/allaitr sans douleur 1.png','img/allaiter sans douleur 2.png','img/allaiter sans douleur 3.png','img/allaiter sans douleur 4.png','img/allaiter sans douleur 5.png','img/allaiter sans douleur 6.png','img/allaiter sans douleur 87.png','img/allaiter sans douleur 8.png','img/allaiter sans douleur 9.png']
        break
        default:
            array = [0]
        break
    }
    i=0
    document.querySelector('#modalContent img').src = array[i]
}

document.getElementById('navigateLeft').addEventListener('click',() => {
    if(i > 0) {
        i--
    }else{
        i = array.length - 1
    }
    document.querySelector('#modalContent img').src = array[i]
});

document.getElementById('navigateRight').addEventListener('click',() => {
    if(i < array.length -1) {
        i++
    }else{
        i= 0
    }
    document.querySelector('#modalContent img').src = array[i]
});

document.getElementById('clickableCloseModalArea').addEventListener('click', (e) => {
    document.getElementById('modal').style.display = 'none'
}); 

