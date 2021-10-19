const popupLinks = document.querySelectorAll('.popup-link')
const Body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')
let unlock = true
const timeout = 800
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

    Mobile = true

} 
else {
    Mobile = false
}
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index]
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '')
            const curentPopup = document.getElementById(popupName)
            popupOpen(curentPopup)
            e.preventDefault()
        })
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')

if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const element = popupCloseIcon[index];
        element.addEventListener('click', function (e) {
            popupClose(element.closest('.popup'))
            e.preventDefault
        })

    }
}
const closeX = document.querySelector('.close-popup')
const vids = document.querySelectorAll('#video-block') //получилл список всех видео, прошёлся циклом. зафиксировал mouover-ом нужный iframe и после закрывания попапа, запаузил нужное видео

function popupOpen(curentPopup) {
    
    
    if (Mobile){
        
    }
    else{
        $.each(vids, function (index, value) {
            $(value).mouseover(function (e) {
                currentiframe = e.target
            })
        })
    }

    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popun.open')
        if (popupActive) {
            popupClose(popupActive, false)
        }
        else {
            BodyLock();
        }
        curentPopup.classList.add('open')
        curentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'))
                currentiframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
            }
            if (e.target == closeX){
                popupClose(e.target.closest('.popup'))
                currentiframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
            }
        })
    }

    document.querySelector('.slick-arrow').classList.add('hide')
    document.querySelector('.slick-next').classList.add('hide')
}



function popupClose(popupActive, doUnlock = true) {


    if (unlock) {
        popupActive.classList.remove('open')
        if (doUnlock) {
            BodyUnLock();
        }

    }
    Body.classList.remove('lock')

    document.querySelector('.slick-arrow').classList.remove('hide')
    document.querySelector('.slick-next').classList.remove('hide')

}



function BodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.video').offsetWidth + 'px'
    for (let index = 0; index < lockPadding.length; index++) {
        const element = lockPadding[index];
        // element.style.paddingRight = lockPaddingValue
    }
    // Body.style.paddingRight = lockPaddingValue
    Body.classList.add('lock')

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

function BodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const element = lockPadding[index];
            // element.style.paddingRight = '0px'
        }
        // Body.style.paddingRight = '0px'
    })
    unlock = false
    setTimeout(function () {
        unlock = true
    }, timeout)
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open')
        popupClose(popupActive)
    }
})