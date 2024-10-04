// * ~~ Typing ~~
let typed = new Typed(".typing",{
    strings: ["Desarrollador Backend","Desarrollador Frontend", "Informatico"],
    typeSpeed: 200,
    BackSpeed: 80,
    loop: true
});

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
console.log(totalNavList);
for(let i = 0; i <totalNavList; i++){
    const a = navList[i].querySelector("a")
    a.addEventListener("click", () =>{
        a.classList.add("active");
    })
}



// Soy una persona orientada al cumplimiento de objetivos y requisitos, con capacidad para liderar y resolver problemas de manera eficiente. Me caracterizo por mi responsabilidad, compromiso y trabajo en equipo.
// Poseo competencias en el ámbito técnico y operativo, lo que me permite analizar, diseñar y ejecutar soluciones tecnológicas adaptadas a diferentes necesidades. Además, tengo experiencia en la administración de plataformas tecnológicas y en el soporte técnico a equipos de cómputo.

// Me destaco por mis relaciones interpersonales sólidas y la capacidad de trabajar tanto en equipo como de manera independiente. Además, tengo un alto sentido de responsabilidad y una fácil adaptación a las políticas y lineamientos organizacionales.