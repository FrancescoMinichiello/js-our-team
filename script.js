/*
1- recuperare gli elementi dal dom
2- inizializzare l'array
3- inserire nell'array i dati forniti (nome, ruolo e foto)
4- creare un ciclo per girare nell'array
5- stampare in console
6- stampare nel DOM
- per stampare nel dom abbiamo bisogno degli elementi che ci siamo recuperati al 
(nr-1)
*/

const information = document.querySelector('.information');
console.log(information)


const team = [
    {
        name: 'Wayne',
        lastName: 'Barnett',
        job: 'Founder & CEO',
        imageProfile: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        lastName: 'Caroll',
        job: 'Chief Editor',
        imageProfile: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        lastName: 'Gordon',
        job: 'Office Manager',
        imageProfile: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        lastName: 'Lopez',
        job: 'Founder & CEO',
        imageProfile: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        lastName: 'Estrada',
        job: 'Developer',
        imageProfile: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        lastName: 'Ramos',
        job: 'Graphic Designer',
        imageProfile: 'barbara-ramos-graphic-designer.jpg'
    },

]


// ciclo per girare nell'array
for (let i = 0; i < team.length; i++) {
    team.fi
    let fullDesc = `
    <h1>${team[i].name} ${team[i].lastName}</h1>
    <h3>${team[i].job}</h3> 
    <h5>${team[i].imageProfile}</h5>
    <hr>
    `;
    console.log(fullDesc)
    information.innerHTML += fullDesc;
}
