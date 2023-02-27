const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // показывает сколько классов у элемента
// console.log(btns[0].classList.item(0)); // показывает какоц класс под номер 0
// console.log(btns[1].classList.add('red', 'ryrthbvs')); // добавляет класс red
// console.log(btns[0].classList.remove('blue')); // удаляет класс blue
// console.log(btns[0].classList.toggle('blue')); // добавляет класс blue, если его не было

// if (btns[1].classList.contaimn('red')) {
//     console.log('red'); // если у второй кнопки есть класс red ты выведется в консоль
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className); // устаревший метод, выводит в строку все класс

// делегирование событий

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == "BUTTON") {
        console.log('Hello');
    }
}); // обработчик события

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
// });

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches("button.red")) {
        console.log('Hello');
    }
}); // метод сотрудников Google, matcs - соответствия, совпадения

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
// console.log('Hello');
//     });
// }); // динамически созданный элемент не будт принимать действие


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);