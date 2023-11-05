//  header
const usd_id = document.getElementById('usd_id')
const english_id = document.getElementById('english_id')
const header_usd_ul = document.querySelector('.header_usd_ul')
let en_lu = document.getElementById('en_lu')
const header_en_ul = document.querySelector('.header_en_ul')
let usd_lu = document.getElementById('usd_lu')
usd_id.addEventListener('click', (e) => {
    e.stopPropagation()
    if (header_en_ul.classList.contains('active')) {
        header_en_ul.classList.remove('active')
    }

    // usd_lu.style.transition = '0.9s'
    header_usd_ul.classList.toggle('active')

})
english_id.addEventListener('click', (e) => {
    e.stopPropagation()


    if (header_usd_ul.classList.contains('active')) {
        header_usd_ul.classList.remove('active')
    }
    header_en_ul.classList.toggle('active')

})

window.addEventListener('click', () => {

    if (header_usd_ul.classList.contains('active')) {
        header_usd_ul.classList.remove('active')
    }
    if (header_en_ul.classList.contains('active')) {
        header_en_ul.classList.remove('active')
    }
})

//  header_end
//  navbar_tab
let hamburger=document.getElementById('hamburger')
hamburger.addEventListener('click', () => {
    console.log('nikosh');
})



//  navbar_tab_end