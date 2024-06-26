function setdate(){
    let date = new Date();
    
    let hourhand = document.getElementById('hourhand');
    let minhand = document.getElementById('minhand');
    let secondhand = document.getElementById('secondhand');
    
    let h = (date.getHours()*360)/12 + (date.getMinutes()*30)/60 + date.getSeconds()/120;
    hourhand.style.transform = `rotate(${h}deg)`;

    let m = (date.getMinutes()*360)/60 + (date.getSeconds()*6)/60;
    minhand.style.transform = `rotate(${m}deg)`

    let s = date.getSeconds()*6;
    secondhand.style.transform = `rotate(${s}deg)`;
}

setInterval(setdate , 1000);