
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');


buttons.forEach(function(button){
    button.addEventListener('click',calc)
})
function calc(e){
    let value=e.target.dataset.num;
    screen.value +=value; 
}


function jawab(e){
    if(screen.value===''){
        alert('Please Enter the values')
    }
    else{
        let answer=eval(screen.value)
        screen.value=answer
    }
}

function saaf(e){
    screen.value='';
}