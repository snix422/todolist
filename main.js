const vowelContainer = document.querySelector('.vowel-container');
const btnCountVowel = document.querySelector('.btnCount');
const input = document.querySelector('.contentWord')


const countVowel = () => {
    const divVowel = document.createElement('div');
    const divVowelItem = document.createElement('div');
    const word = document.createElement('span');
    const counterVowel = document.createElement('span');

    vowelContainer.appendChild(divVowel);
    divVowel.appendChild(divVowelItem);
    divVowelItem.appendChild(word);
    divVowelItem.appendChild(counterVowel);


    divVowel.classList.add('vowel-score');
    divVowelItem.classList.add('vowel-score_item');

    let str = input.value;

    const arr = str.split('');
    console.log(arr);

    let sum = 0;
    word.textContent = input.value;

    for (i = 0; i < arr.length; i++) {

        if (arr[i].toLowerCase().match('a')) {
            sum = sum + 1;
        }
        if (arr[i].toLowerCase().match('e')) {
            sum = sum + 1;
        }
        if (arr[i].toLowerCase().match('i')) {
            sum = sum + 1;
        }
        if (arr[i].toLowerCase().match('o')) {
            sum = sum + 1;
        }
        if (arr[i].toLowerCase().match('u')) {
            sum = sum + 1;
        }
        if (arr[i].toLowerCase().match('y')) {
            sum = sum + 1;
        }

        console.log(arr[i]);

    }
    counterVowel.textContent = `Liczba samogłosek: ${sum}`;

    input.value = "";



}

btnCountVowel.addEventListener('click', countVowel);