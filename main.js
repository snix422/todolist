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

    const arr = str.toLowerCase().split('');
    const vowel = ['a', 'e', 'i', 'o', 'u', 'y'];

    word.textContent = input.value;

    const arrReduced = arr.reduce(function(value, item) {
        if (vowel.includes(item)) {
            value += 1;
        }
        return value;
    }, 0)

    counterVowel.textContent = `Liczba samogłosek: ${arrReduced}`;
    input.value = "";
}

btnCountVowel.addEventListener('click', countVowel);