// open rules
const rulesOpen = document.querySelector('.rules');
const rulesClose = document.querySelector('.btn-modal');
const modalRules = document.querySelector('.rules-modal');
const modalContainer = document.querySelector('.modal-container');

rulesOpen.addEventListener('click', () => {
    modalRules.classList.add('active');
    modalContainer.classList.add('active');
});
rulesClose.addEventListener('click', () => {
    modalRules.classList.remove('active');
    modalContainer.classList.remove('active');
});

// game dynamics
const score = document.querySelector('.score span');
const result = document.querySelector('.result');
const main = document.querySelector('main');
const userPart = document.querySelector('.user-state');
const userParts = document.querySelectorAll('.user');

const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');

const rockComp = document.querySelector('.rock2');
const paperComp = document.querySelector('.paper2');
const scissorsComp = document.querySelector('.scissors2');

const rockUser = document.querySelector('.rock1');
const paperUser = document.querySelector('.paper1');
const scissorsUser = document.querySelector('.scissors1');

const btnAnotherGame = document.querySelector('.btn-play');
const displayWin = document.querySelector('.result span');
const disable = document.querySelector('.disable');
const text = document.querySelectorAll('.text');

let scoreCount = 0;

user();
function user() {
    main.addEventListener('click', e => {
        const clickedTarget = e.target.dataset.id;
        rock.classList.add('hidden');
        paper.classList.add('hidden');
        scissors.classList.add('hidden');

        result.style.visibility = 'visible';
        text.forEach(t => {
            t.style.visibility = 'visible';
        });

        // add item to the user corner
        if (clickedTarget === 'paper') {
            paperUser.classList.add('active1');
            game('p');
        } else if (clickedTarget === 'rock') {
            rockUser.classList.add('active1');
            game('r');
        } else if (clickedTarget === 'scissors') {
            scissorsUser.classList.add('active1');
            game('s');
        }
    });

}

anotherGame()
function anotherGame() {
    btnAnotherGame.addEventListener('click', () => {
        rock.classList.remove('hidden');
        paper.classList.remove('hidden');
        scissors.classList.remove('hidden');

        paperUser.classList.remove('active1');
        rockUser.classList.remove('active1');
        scissorsUser.classList.remove('active1');

        paperComp.classList.remove('active2');
        rockComp.classList.remove('active2');
        scissorsComp.classList.remove('active2');

        disable.classList.remove('disabled');

        text.forEach(t => {
            t.style.visibility = 'hidden';
        });
    });
}


function computer() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    const comp = choices[randomNumber];

    // add item to the user corner
    if (comp === 'p') {
        paperComp.classList.add('active2');
        // console.log('p');
    } else if (comp === 'r') {
        rockComp.classList.add('active2');
        // console.log('r');
    } else {
        scissorsComp.classList.add('active2');
        // console.log('s');
    }
    return comp;
}

function game(userChoice) {
    const computerChoice = computer();

    // add layer on top of the playing filed so that user can't pick another circle
    disable.classList.add('disabled');
    
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win();
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose();
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw();
            break;
    }
    score.textContent = scoreCount;
}

function win() {
    displayWin.innerHTML = 'you win';
    return scoreCount++;
}

function lose() {
    displayWin.innerHTML = 'you lose';
    return scoreCount--;
}

function draw() {
    displayWin.innerHTML = 'it\' a draw';
    return
}
