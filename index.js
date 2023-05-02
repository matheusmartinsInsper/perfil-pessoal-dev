const sobre=document.getElementById('#sobre');
const about= ()=>{
    window.scroll({
        top: document.getElementById('#stacklink')
        .getBoundingClientRect().top,
        left: 0,
        behavior: "smooth"
    })
}
sobre.addEventListener('click', about)