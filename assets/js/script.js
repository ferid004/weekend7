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

const usd_id_tab = document.getElementById('usd_id_tab')
const english_id_tab = document.getElementById('english_id_tab')
const nav_usd_ul_tab = document.querySelector('.nav_usd_ul_tab')
const nav_en_ul_tab = document.querySelector('.nav_en_ul_tab')


usd_id_tab.addEventListener('click', (e) => {
    e.stopPropagation()
    if (nav_en_ul_tab.classList.contains('active')) {
        nav_en_ul_tab.classList.remove('active')
    }

    nav_usd_ul_tab.classList.toggle('active')

})

english_id_tab.addEventListener('click', (e) => {
    e.stopPropagation()
    if (nav_usd_ul_tab.classList.contains('active')) {
        nav_usd_ul_tab.classList.remove('active')
    }
    nav_en_ul_tab.classList.toggle('active')

})
window.addEventListener('click', () => {

    if (nav_usd_ul_tab.classList.contains('active')) {
        nav_usd_ul_tab.classList.remove('active')
    }
    if (nav_en_ul_tab.classList.contains('active')) {
        nav_en_ul_tab.classList.remove('active')
    }
})

//  navbar_tab
let hamburger = document.getElementById('hamburger')
hamburger.addEventListener('click', () => {
    console.log('nikosh');
})



//  navbar_tab_end