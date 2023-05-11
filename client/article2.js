
let bar=document.querySelector('.loadingBar')
function scrollHandler(){;
    let currentScrollPosition = window.scrollY
    let body=document.querySelector('body').scrollHeight
    let percent=currentScrollPosition/(body)*100
    bar.style.width=`${percent}%`
}
window.addEventListener('scroll',scrollHandler)