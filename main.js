const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq)=> {
    faq.querySelector('button').addEventListener('click', ()=>{
        if (faq.classList.value.includes('active')){
            faq.classList.remove('active');
        } else {
            faq.classList.add('active');
        }
    })
})

