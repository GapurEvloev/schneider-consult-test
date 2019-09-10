// Задаем формат даты
function formatDate(date) {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return `${dd}.${mm}.${yy}`;
}
// вычисляем дату плижайшего понедельника
(function() {
    date = new Date();
    m = new Date();
    if (date.getDay()) { m.setDate(date.getDate() + 8 - date.getDay()) } else { m.setDate(date.getDate() + 1) }


    document.querySelector('.header__info-item').innerText += " " + formatDate(m) + "!"; //вывод на странице
})();