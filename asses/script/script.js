let rollDice = document.getElementById('rollDice')
let random
let _img = document.querySelectorAll('._img')
let active = 0
let current = document.querySelectorAll('.currentScore')
let total = document.querySelectorAll('.totalScore')
let palyer = document.querySelectorAll('.palyer')
const currentScore = [0, 0]
const totaltScore = [0, 0]
let playerName = document.querySelectorAll('.playerName')
let _imgBox = document.getElementById('_imgBox')
let _btn = document.getElementById('_btn')
let btnStart = document.getElementById('btnStart')

//onload
_view()

function _view() {
    playerName[active].style.fontWeight = 'bold'

    //change view based on active player
    //part1
    palyer.forEach((element, i) => {
        if (i == active) {
            element.style.background = 'rgba(199, 179, 220, 0.7)'
        } else {
            element.style.background = 'rgba(142, 106, 220, 0.7)'
        }
    })
    //part2
    current.forEach((element, i) => {
        if (i == active) {
            element.style.background = 'rgb(199,54,95)'
        } else {
            element.style.background = 'rgb(188,70,114)'
        }
    })
}

//click the btn to start the game
rollDice.addEventListener('click', () => {
    //get random
    random = Math.floor(Math.random() * 6) + 1
    changePlayer()

  

    //change the player & view
    function changePlayer() {
        if (random == 1) {
            active == 0 ? active = 1 : active = 0
            //change view based on active player
            _view()
        }
    }
    
    //set img score
    _img.forEach((val, index) => {
        val.style.opacity = '0'
        if (index + 1 == random) {
            setTimeout(() => {
                val.style.opacity = '1'
            }, 100);
        }
    })

    if (random != 1){
        //set currentSore
        for (let index = 0; index < currentScore.length; index++) {
            if (index == active) {
                currentScore[active] += random
                setTimeout(() => {
                    current[active].children[1].innerHTML = currentScore[active]
                }, 100)
            }
        }
        //set totaltScore
        for (let index = 0; index < totaltScore.length; index++) {
            if (index == active) {                
                totaltScore[active] += random               
                setTimeout(() => {
                    total[active].innerHTML = totaltScore[active]
                }, 100)
            }
        }
    }else{  
        // currentSore = 0    
        for (let index = 0; index < currentScore.length; index++) {
            if (index != active) {
                currentScore[index] = 0 
                setTimeout(() => {
                    current[index].children[1].innerHTML = currentScore[index]
                }, 100)
            }
        }                
    } 
 
  //win
  for (let index = 0; index < totaltScore.length; index++) {  
   if (totaltScore[index] >= 100) {                
    console.log(`Player ${index+1} win`);
    palyer[0].style.display = 'none' 
    palyer[1].style.display = 'none'
    _imgBox.style.display = 'none'  
    _btn.style.display = 'none'  
    document.getElementsByTagName('h1')[0].style.display = 'flex'
    document.getElementsByTagName('h1')[0].innerHTML = `Player ${index+1} win` 
    btnStart.style.display = 'flex'
   }
}
})

//reset
btnStart.addEventListener('click',()=>{
    document.getElementsByTagName('h1')[0].style.display = 'none'
    document.getElementsByTagName('h1')[0].innerHTML = '' 
    btnStart.style.display = 'none'
    active = 0
    currentScore[0] = 0
    currentScore[1] = 0
    current[0].children[1].innerHTML = currentScore[0]
    current[1].children[1].innerHTML = currentScore[1]
    totaltScore[0] = 0
    totaltScore[1] = 0
    total[0].innerHTML = totaltScore[0]
    total[1].innerHTML = totaltScore[1]
    palyer[0].style.display = 'flex' 
    palyer[1].style.display = 'flex'
    _imgBox.style.display = 'flex'  
    _btn.style.display = 'flex'
})
