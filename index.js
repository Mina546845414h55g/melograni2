let btn1 = document.getElementById('active1');
let btn2 = document.getElementById('active2');
let btn3 = document.getElementById('active3');
let btn4 = document.getElementById('active4');

btn1.addEventListener('click',function(){
    btn1.classList.add('btn')
    btn2.classList.remove('btn')
    btn3.classList.remove('btn')
    btn4.classList.remove('btn')

})

btn2.addEventListener('click',function(){
    btn1.classList.remove('btn')
    btn2.classList.add('btn')
    btn3.classList.remove('btn')
    btn4.classList.remove('btn')

})

btn3.addEventListener('click',function(){
    btn1.classList.remove('btn')
    btn2.classList.remove('btn')
    btn3.classList.add('btn')
    btn4.classList.remove('btn')

})

btn4.addEventListener('click',function(){
    btn1.classList.remove('btn')
    btn2.classList.remove('btn')
    btn3.classList.remove('btn')
    btn4.classList.add('btn')

})