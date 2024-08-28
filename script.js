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

const image = document.getElementById('image');
console.log(image)


const team = [
    {
        name: 'Wayne',
        lastName: 'Barnett',
        job: 'Founder & CEO',
        imageProfile: 'https://erikastreppa.it/wp-content/uploads/2019/04/risata-obama.jpg'
    },
    {
        name: 'Angela',
        lastName: 'Caroll',
        job: 'Chief Editor',
        imageProfile: 'https://img.freepik.com/free-photo/positive-female-smiling-funny-model-posing-near-pink-wall-studio_158538-3433.jpg'
    },
    {
        name: 'Walter',
        lastName: 'Gordon',
        job: 'Office Manager',
        imageProfile: 'https://previews.123rf.com/images/mimagephotography/mimagephotography1604/mimagephotography160400325/55806111-close-up-ritratto-di-un-uomo-pi%C3%B9-anziano-bello-che-sorride-al-di-fuori.jpg'
    },
    {
        name: 'Angela',
        lastName: 'Lopez',
        job: 'Founder & CEO',
        imageProfile: 'https://img.freepik.com/premium-photo/smiling-woman-with-long-hair-casual-attire-poses-against-light-background-during-daytime_1247367-48048.jpg'
    },
    {
        name: 'Scott',
        lastName: 'Estrada',
        job: 'Developer',
        imageProfile: 'https://img.freepik.com/foto-premium/uomo-d-affari-che-sorride-e-che-fa-segno-giusto_13339-95622.jpg'
    },
    {
        name: 'Barbara',
        lastName: 'Ramos',
        job: 'Graphic Designer',
        imageProfile: 'https://sprint24.com/pic/lg/10-siti-dove-scaricare-immagi/c/-/ciu6488k.jpg'
    },

]


// ciclo per girare nell'array
for (let i = 0; i < team.length; i++) {
    let fullDesc = `
    <h1>${team[i].name} ${team[i].lastName}</h1>
    <h3>${team[i].job}</h3> 
    <img src="${team[i].imageProfile}"></img>
    <hr>
    `;
    console.log(fullDesc)
    information.innerHTML += fullDesc;

}