const numbers = {
    0: `<i class="fa-solid fa-0"></i>`,
    1: `<i class="fa-solid fa-1"></i>`,
    2: `<i class="fa-solid fa-2"></i>`,
    3: `<i class="fa-solid fa-3"></i>`,
    4: `<i class="fa-solid fa-4"></i>`,
    5: `<i class="fa-solid fa-5"></i>`,
    6: `<i class="fa-solid fa-6"></i>`,
    7: `<i class="fa-solid fa-7"></i>`,
    8: `<i class="fa-solid fa-8"></i>`,
    9: `<i class="fa-solid fa-9"></i>`,        
}
let counter = 0
const buttons = document.querySelectorAll('.books button')
function incrementCounter() {
    counter++; 
    const counterString = counter.toString(); 
    let iconEquivalent = '';
    for (let i = 0; i < counterString.length; i++) {
        const digit = parseInt(counterString[i]); 
        iconEquivalent += numbers[digit]; 
    }
    document.getElementById('counter').innerHTML = iconEquivalent; 
}
buttons.forEach(button => {
    button.addEventListener('click', incrementCounter)
})