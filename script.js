let massive = ['Метод splice() - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.array.splice(start[, deleteCount[, item1[, item2[, ...]]]])', 'Метод filter() - создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.', 'Метод map() - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.'],
    mas = ['Метод splice() - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.array.splice(start[, deleteCount[, item1[, item2[, ...]]]])', 'Метод filter() - создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.', 'Метод map() - создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.'],
    title = [],
    btnCont = document.querySelector('.first__continue'),
    btnNull = document.querySelector('.first__null');

btnCont.innerHTML = 'Начать'

btnCont.addEventListener('click', function(event){
    event.preventDefault();
    choose();
    btnCont.innerHTML = 'Продолжить'
});

mainInfo(massive)

function choose(){
    if(massive.length == 0 && title.length == 0){
        alert('Ты все прошел');
        btnCont.innerHTML = 'Начать';
        btnNull.style.display = 'flex';
        btnNull.innerHTML = 'Обновить';
        return false;
    }
    let ran = random(0, massive.length);
    alert(title[ran] + '?');
    alert(massive[ran]);
    for(let key in massive){
        massive[ran] == massive[key] ? massive.splice(key,1) : '';
    }
    for(let key in title){
        title[ran] == title[key] ? title.splice(key,1) : '';
    }
  
}

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


function mainInfo(arr1){
    for(let key of arr1){
    title.push(key.split(' - ')[0]);
}
}