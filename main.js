window.addEventListener('DOMContentLoaded', function () {

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Создаём элементы DOM-дерева контейнер для клавиатуры и вывода ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    const container = document.createElement('div');
    const output = document.createElement('textarea');
    const keyboard = document.createElement('div');
    let lang = 'EN';


    container.classList.add('container');
    output.classList.add('output');
    keyboard.classList.add('keyboard');

    const keysEn = [
        ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
        ['Caps-Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593', 'Shift'],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'],
    ];

    const keysRu = [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
        ['Caps-Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593', 'Shift'],
        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592', '&#8595', '&#8594', 'Ctrl'],
    ];

    const keyAttribute = [
        ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
        ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
        ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
        ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
        ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
    ];




    for (let i = 0; i < keysEn.length; i++) {
        const divRow = document.createElement('div');

        divRow.classList.add('keyboards__rows');

        for (let k = 0; k < keysEn[i].length; k++) {
            const divKey = document.createElement('div');
            divKey.classList.add('key');

            switch (keysEn[i][k]) {
                case 'Backspace':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case 'Tab':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case 'Del':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case 'Caps-Lock':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case 'Enter':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case 'Shift':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case '&#8593':
                    divKey.classList.add('spec-key');
                    break;
                case 'Ctrl':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case 'Win':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case 'Alt':
                    divKey.classList.add('spec-key', keysEn[i][k].toLowerCase());
                    break;
                case ' ':
                    divKey.classList.add('space');
                    break;
                case '&#8592':
                    divKey.classList.add('spec-key');
                    break;
                case '&#8595':
                    divKey.classList.add('spec-key');
                    break;
                case '&#8594':
                    divKey.classList.add('spec-key');
                    break;
            }
            divKey.setAttribute('data-key-prop', `${keyAttribute[i][k]}`);

            if (!divKey.dataset.keyProp.includes('Digit') && !divKey.classList.contains('spec-key')) {
                if (lang === 'EN') {
                    divKey.innerHTML = `
                        <span class="key-value rus hidden">${keysRu[i][k]}</span>
                        <span class="key-value eng">${keysEn[i][k]}</span>
                        `
                } else if (lang === 'RU') {
                    divKey.innerHTML = `
                        <span class="key-value rus">${keysRu[i][k]}</span>
                        <span class="key-value eng hidden">${keysEn[i][k]}</span>
                        `
                }
            } else {
                divKey.innerHTML = `
                        <span class="key-value eng">${keysEn[i][k]}</span>
                        `
            }

            divRow.append(divKey);
        }
        keyboard.append(divRow);
    }



    container.append(output, keyboard)
    document.body.append(container);









})