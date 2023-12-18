const sections = document.querySelectorAll('section');
const navDiv = document.querySelectorAll('.panel-sec1 div a');


window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= (sectionTop - sectionHeight/5)){
            current = section.getAttribute('id')
        }
    })
    navDiv.forEach(a => {
        a.classList.remove('active-tab')
        if(a.classList.contains(current)){
            a.classList.add('active-tab')
        }
    })
})