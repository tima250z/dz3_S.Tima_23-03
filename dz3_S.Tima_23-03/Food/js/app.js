const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabcontainer'),
        tabHeaderItems = document.querySelectorAll('.tabheader__item');

    function hideTabContent() {
        tab.forEach(item => {
            item.style.display = 'none';
        });

        tabHeaderItems.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tab[i].style.display = 'block';
        tabHeaderItems[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    let slideIndex = 0;
    let timer = setInterval(function() {
        slideIndex++;
        if (slideIndex > 3) {
            slideIndex = 0;
        }
        hideTabContent();
        showTabContent(slideIndex);
    }, 3000);

});
// modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()

modal.onclick = event => event.target === modal ? closeModal() : false
modal.onkeydown = event => event.code === 'Escape' ? closeModal() : false

function openModalScroll () {
    const page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        window.removeEventListener('scroll', openModalScroll)
    }
}

window.addEventListener('scroll', openModalScroll)
modalTimeout = setTimeout(openModal, 10000)

// data


const deadline = '2023-03-22'


function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date(),
        days = Math.floor((time / (1000 * 60 * 60 * 24))),
        hours = Math.floor((time / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((time / 1000 / 60) % 60),
        seconds = Math.floor((time / 1000) % 60)

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(element, deadline) {
    const elem = document.querySelector(element),
        days = elem.querySelector('#days'),
        hours = elem.querySelector('#hours'),
        minutes = elem.querySelector('#minutes'),
        seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
        const time = getTimeRemaining(deadline)
        days.innerHTML =   time.days
        hours.innerHTML =  time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds
    }
}

setClock('.timer', deadline)








