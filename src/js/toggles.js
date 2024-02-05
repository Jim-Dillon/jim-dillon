"use strict";
function toggleClasses(element) {
    const classList = element.classList;
    if (classList.contains('toggle-on')) {
        classList.remove('toggle-on');
        classList.add('toggle-off');
    }
    else if (classList.contains('toggle-off')) {
        classList.remove('toggle-off');
        classList.add('toggle-on');
    }
    else {
        classList.add('toggle-on');
    }
    const parentElement = element.parentElement;
    const parentClassList = parentElement.classList;
    if (parentClassList.contains('toggle-green')) {
        parentClassList.remove('toggle-green');
        parentClassList.add('toggle-grey');
    }
    else if (parentClassList.contains('toggle-grey')) {
        parentClassList.remove('toggle-grey');
        parentClassList.add('toggle-green');
    }
    else {
        parentClassList.add('toggle-green');
    }
    const wordsOnElement = parentElement.querySelector('.toggle-words__on');
    const wordsOffElement = parentElement.querySelector('.toggle-words__off');
    if (classList.contains('toggle-on')) {
        wordsOnElement.classList.add('words-active');
        wordsOffElement.classList.remove('words-active');
    }
    else if (classList.contains('toggle-off')) {
        wordsOnElement.classList.remove('words-active');
        wordsOffElement.classList.add('words-active');
    }
}
