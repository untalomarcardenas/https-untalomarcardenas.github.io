// * ~~ Typing ~~
let typed = new Typed('.typing',{
    strings: ['Desarrollador Backend','Desarrollador Frontend', 'Informatico'],
    typeSpeed: 200,
    BackSpeed: 80,
    loop: true
});

//* ~~ Aside ~~
const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

navList.forEach(navItem =>{

    const link = navItem.firstChild;
    
    link.addEventListener("click", ()=>{

        allSection.forEach(section => {
            section.classList.remove('back-section');
        })

        navList.forEach(element =>{
            let a = element.firstChild;
            if(a.classList.contains('active')){
                let id = a.getAttribute('href').split('#')[1];
                document.querySelector("#"+id).classList.add('back-section');
            }
            a.classList.remove('active');
        });
        link.classList.add('active');
        showSection(link);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
        
    })
})

function showSection(element){
    allSection.forEach(section => {
        section.classList.remove('active');
    })
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active')
}

function updateNav(element){
    navList.forEach()
}


const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', ()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    allSection.forEach(section =>{
        section.classList.toggle('open')
    })
}



// for(let i = 0; i <totalNavList; i++){
//     const a = navList[i].querySelector("a")
//     a.addEventListener("click", () =>{
//         a.classList.add("active");
//     })
// }



// Soy una persona orientada al cumplimiento de objetivos y requisitos, con capacidad para liderar y resolver problemas de manera eficiente. Me caracterizo por mi responsabilidad, compromiso y trabajo en equipo.
// Poseo competencias en el ámbito técnico y operativo, lo que me permite analizar, diseñar y ejecutar soluciones tecnológicas adaptadas a diferentes necesidades. Además, tengo experiencia en la administración de plataformas tecnológicas y en el soporte técnico a equipos de cómputo.

// Me destaco por mis relaciones interpersonales sólidas y la capacidad de trabajar tanto en equipo como de manera independiente. Además, tengo un alto sentido de responsabilidad y una fácil adaptación a las políticas y lineamientos organizacionales.