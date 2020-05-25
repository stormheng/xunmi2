let all = document.querySelectorAll('.nav a')
let yue = document.querySelector('.yue')
let ju = document.querySelector('.ju')
let wen = document.querySelector('.wen')
// console.log(main)

yue.onclick = () => {
    for(let i = 0; i<all.length;i++){
        if(all[i].classList.contains('selected')){
            all[i].classList.remove("selected")
        }
    }
    yue.classList.add("selected");
    
}

ju.onclick = () => {
    for(let i = 0; i<all.length;i++){
        if(all[i].classList.contains('selected')){
            all[i].classList.remove("selected")
        }
    }
    ju.classList.add("selected");
    
}

wen.onclick = () => {
    for(let i = 0; i<all.length;i++){
        if(all[i].classList.contains('selected')){
            all[i].classList.remove("selected")
        }
    }
    wen.classList.add("selected");
    
}

// play.onclick();