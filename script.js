let text = [];
let block_content = document.getElementsByClassName('block');

window.addEventListener('keydown', function (event) {
    let area_value = document.getElementById('area');

    for (let j = 0; j < block_content.length; j++) {
        if (block_content[j].textContent.toLowerCase() == event.key) {
            block_content[j].style.background = 'gray';
            block_content[j].style.color = 'white';
        }
    }

    if (event.keyCode === 8) {
        let backspace_string = '';

        backspace_string = text[0];
        text[0] = backspace_string.substring(0, backspace_string.length - 1)
        area_value.value = text[0];
    } else if (event.keyCode === 9) {
        let tab_string = '';

        tab_string = text[0];
        tab_string += '\t';
        text[0] = tab_string;
        area_value.value = text[0];
    } else if (event.keyCode === 13) {
        let enter_string = '';

        enter_string = text[0];
        enter_string += '\n';
        text[0] = enter_string;
        area_value.value = text[0];
    } else if (event.code == 'ShiftLeft') {
        document.getElementById('shiftleft').style.background = "gray";
        document.getElementById('shiftleft').style.color = "white";
    } else if (event.code == 'ShiftRight') {
        document.getElementById('shiftright').style.background = "gray";
        document.getElementById('shiftright').style.color = "white";
    } else if (event.keyCode === 20) {
        document.getElementById('capslock').style.background = "gray";
        document.getElementById('capslock').style.color = "white";
    } else if (event.keyCode === 32) {
        document.getElementById('space').style.background = "gray";
        document.getElementById('space').style.color = "white";
        text.push(event.key);
        for (let i = 1; i <= text.length - 1; i++) {
            text[0] += text[i];
            text.pop();
            console.log(text);
        }
        area_value.value = text[0];
    }
    else {
        text.push(event.key);
        for (let i = 1; i <= text.length - 1; i++) {
            text[0] += text[i];
            text.pop();
            console.log(text);
        }
        area_value.value = text[0];
    }
});

window.addEventListener('keyup', function (event) {

    for (let j = 0; j < block_content.length; j++) {
        if (block_content[j].textContent == event.key) {
            block_content[j].style.background = 'white';
            block_content[j].style.color = 'black';
        }
    }

    if (event.code == 'ShiftLeft') {
        document.getElementById('shiftleft').style.background = "white";
        document.getElementById('shiftleft').style.color = "black";
    } else if (event.code == 'ShiftRight') {
        document.getElementById('shiftright').style.background = "white";
        document.getElementById('shiftright').style.color = "black";
    } else if (event.keyCode === 20) {
        document.getElementById('capslock').style.background = "white";
        document.getElementById('capslock').style.color = "black";
    } else if (event.keyCode === 32) {
        document.getElementById('space').style.background = "white";
        document.getElementById('space').style.color = "black";
    }
});