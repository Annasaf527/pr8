"use strict";
btn.addEventListener('mouseover', function(){
    btn.style.background = 'blue'
})
btn.addEventListener('mouseout', function(){
    btn.style.background = ''
})

btns.addEventListener('mousedown', function(){
    btns.style.color = 'red'
})
btns.addEventListener('mouseup', function(){
    btns.style.color = ''
})

document.body.addEventListener('keydown', function(event){
    if(event.key == 'r')
    document.body.style.background = 'red'
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'r')
    document.body.style.background = ''
})
document.body.addEventListener('keydown', function(event){
    if(event.key == 'g')
    document.body.style.background = 'green'
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'g')
    document.body.style.background = ''
})
document.body.addEventListener('keydown', function(event){
    if(event.key == 'b')
    document.body.style.background = 'blue'
})
document.body.addEventListener('keyup', function(event){
    if(event.key == 'b')
    document.body.style.background = ''
})