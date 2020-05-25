let play = document.querySelector('.player > img')
let mp3 = document.querySelector('audio')
let main = document.querySelector('.main')
let all = document.querySelectorAll('.nav a')
console.log(all)
let yue = document.querySelector('.yue')
let ju = document.querySelector('.ju')
let wen = document.querySelector('.wen')
// console.log(main)
let playStatus = 0
// let flag = 0
// console.log(mp3)
console.log(play)
play.onclick = () => {
    if(playStatus === 0){
        play.src = 'images/pause.png'
        mp3.play()
        // animation: move 4s linear  infinite;
        console.log(main.animationPlayState)
        main.style.animationPlayState = 'running'
        playStatus = 1
    } else {
        play.src = 'images/play.png'
        mp3.pause()
        // console.log(main.animation)
        main.style.animationPlayState = 'paused'
        playStatus = 0
    }
    
    return
}

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