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
        // console.log(toggle.parentElement);
        // console.log (toggle.parentNode);
        // toggle.parentNode.classList.toggle('active');
        toggle.parentElement.classList.toggle('active');
    })
})
