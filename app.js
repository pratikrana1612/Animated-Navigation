const btn = document.querySelector('section div button');
const div = document.querySelector('section div');
const nav = document.querySelector('section div nav');
const spans = document.querySelectorAll('span');
// console.log(btn)
 
btn.addEventListener('click',() =>
{
    div.classList.toggle('div_increaseing');
    nav.classList.toggle('tranforming');
    btn.classList.toggle('button_chnage');
    spans[0].classList.toggle('span-1');
    spans[1].classList.toggle('span-2');
})