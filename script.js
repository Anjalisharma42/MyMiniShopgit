const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav= document.getElementById('navbar');

//Active 
if (bar){

    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

//close
if (close){

    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}