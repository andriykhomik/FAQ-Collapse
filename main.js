// const faqs = document.querySelectorAll('.faq');
//
// faqs.forEach((faq)=> {
//     faq.querySelector('button').addEventListener('click', ()=>{
//             faq.classList.toggle('active');
//     })
// })

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', ()=> {
        toggle.parentNode.classList.toggle('active');
    })
})
