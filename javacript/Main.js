
import {Glasses} from './glasses.js'
import {GlassesList} from './glassesList.js'

const glassList = new GlassesList()

const dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? "},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const showGlassesList = () => {
    const divGlassesList = $('#vglassesList')

    dataGlasses.map((item) => {
        const gl = new Glasses(item.id, item.src, item.virtualImg, item.brand, item.name, item.color, item.price, item.description)
        glassList.addGlasList(gl)
    })
    divGlassesList.innerHTML = glassList.renderGlasses()
}

showGlassesList()

const tryOnGlasses = (e) => {
    const gID = e.target.id
    let glObject = {}
    glassList.glist.forEach((gl) => {
        if(gl.id == gID) {
            glObject = gl
        }
    })
    showInfor(glObject)
}

window.tryOnGlasses = tryOnGlasses

const showInfor = (objGlasses) => {
    const glAvatar = $('#avatar')
    const glInfor = $('#glassesInfo')
    glAvatar.innerHTML = `
        <img id="glasses" src="${objGlasses.virtualImg}">
    `
    glInfor.innerHTML = `
        <h5>${objGlasses.name} - ${objGlasses.brand} (${objGlasses.color})</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">$${objGlasses.price}</span>
            <span class="text-success">${objGlasses.status}</span>
        </p>
        <p class="card-text">
            ${objGlasses.description}
        </p>
    `
    glInfor.style.display = 'block'
}

const removeGlasses = (isDisplay) => {
    const glasses = $('#glasses')

    if (glasses == null) {
        return;
    }
    if (isDisplay) {
        glasses.style.opacity = 0.9;
    } else {
        glasses.style.opacity = 0;
    }
}

window.removeGlasses = removeGlasses