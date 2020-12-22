// const dom = document
// console.log(dom);
// console.dir(dom);

// const tabs = document.querySelector('.tabsPanel')
// console.log(tabs);
//и мы получаем весь элемент с его внутреностями
const hour = document.querySelector(' .h')
const min  = document.querySelector(' .m')
const sec  = document.querySelector(' .s')
const numberHour = document.querySelector(' .hours')
const numberMin = document.querySelector(' .minutes')

function clock(){
     
    const time = new Date()
      second = time.getSeconds() * 6,
      minutes = time.getMinutes() * 6,
      hours = time.getHours() * 3

    sec.style.transform = `rotate(${second}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    hour.style.transform = `rotate(${hours}deg)`

    numberHour.innerHTML= setNull(time.getHours())
    numberMin.innerHTML= setNull(time.getMinutes())

    setTimeout(clock,  1000)

}
clock()
//когда произойдет что то вызовется функция и отработает

function setNull(number){
    const num = number < 10 ? '0${number}' : number
    return num
}
// function rec(i = 0){
//     if(i < 60){
//         console.log(1);
//       i++
//       rec(i)
//     }else{
//         return i
//     }
// }
// rec()






const links = document.querySelectorAll('.tabsItem')
     tabs = document.querySelectorAll('.tabsContentItem')
for(let i =0; i < links.length; i++){
    console.log(links[i]);
    links[i].addEventListener('click', function(e){
        console.log(this);
        e.preventDefault()
        for(let x = 0 ; x < links.length; x ++){
            links[x].classList.remove('active')
            tabs[x].classList.remove('active')
        }
        setActive(this, tabs[i])
    })
}

function setActive(item, tabContent) {
     item.classList.add('active')
     tabContent.classList.add('active')
}

//ДЗ Секундомер
const   watchBtn = document.querySelector('.stopwatch__btn'), //подключение к кнопке секундомера
        secondWatch = document.querySelector('.stopwatch__seconds'),//подключение к секундам
        minutesWatch = document.querySelector('.stopwatch__minutes'),//подключение к минутам
        hoursWatch = document.querySelector('.stopwatch__hours'),//подключение к часу
        seconfInfo = document.querySelector('.tabsLink__span');//подключение к индикатору
        
/* добавления события пользователя click  и callback с условиями связаные с надписью на кнопке*/
watchBtn.addEventListener('click', function () { 
    if (this.innerHTML == 'start') { //если на кнопке написано 'start'
        this.innerHTML = 'stop';//то изменить при клкике на "stop"
        seconfInfo.classList.add('active');//и добавить класс к индикатору, который отвечает за цвет
        let i = 0;//назначить переменную
        setTimeout(() => stopWatch(this, i), 1000)//установка паузы с помощью callback, рекурсии и количества в милисек 

    } else if (this.innerHTML == 'stop') { //если на кнопке написано 'stop'
        seconfInfo.classList.remove('active');//убрать класс у индикатора
        seconfInfo.classList.add('active_clear');//и добавить класс к индикатору
        this.innerHTML = 'clear';//то изменить при клкике на "clear"
    } else {//при клике на 'clear'
        seconfInfo.classList.remove('active_clear');//убрать класс у индикатора
        secondWatch.innerHTML = 0;//обнулить все показатели
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
        this.innerHTML = 'start';// изменить при клкике на "start"
    }
})
/*Функция самого секундомера*/
function stopWatch(el, i) { //функуия принимает 2 параметра
    if (el.innerHTML == 'stop') { //если написано 'stop' то
        if (i == 60) { //если i = 60
            i = 0;//обнулить i
            secondWatch.innerHTML = i //обнуляются секунды
            if (minutesWatch.innerHTML == 59) {  //если минуты = 59
                minutesWatch.innerHTML = 0;//обнулить минуты
                hoursWatch.innerHTML++;//добавить единицу к часу
            } else {
                minutesWatch.innerHTML++//минуты прибавляются
            }
        } else {
            i++ //секунды прибавляются
            secondWatch.innerHTML = i; 
        }
        setTimeout(() => stopWatch(el, i), 1000);//пауза с рекурсией
    } 
} 
