/* const titre = document.querySelector("h1");

titre.addEventListener('click', fonctionAnimation)
titre.addEventListener('mouseenter', fonctionAnimation)

function fonctionAnimation(){
    titre.style.backgroundColor = "green";
    titre.style.fontSize = "3rem"
    titre.style.transition = "2s ease-in-out"
    console.log("bonjour");
} */
/* 
const myArray = [5124, true, {pays:10}];

const couleurDePeau = {
    europe: "blanc",
    afrique:"noir",
    asie:"asiatique",
    ameriqueDuSud:"latino",
    ameriqueDuNord: "noir et blanc"
}

const element = document.querySelector("h1");

element.addEventListener("dblclick", fonctionDeCouleur)

function fonctionDeCouleur(){
    element.style.backgroundColor = "purple";
}
console.log(myArray); */

/* let prix = 500;
let choix = prix > 200 ? "Premium" : "Basique";
console.log(choix); */

/*
function generateNumber(){
    return Math.floor(Math.random() * 100);
}

 function nombreMyster(){
    const entre0et100 = generateNumber();
    const nombreTentative = 5;
   // let naPasTrouver = true;


    let entree = parseInt(prompt('entrez un nombre compris entre 0 et 100'))
    //do{}
    while(entree !== generateNumber){
        if(entree > entre0et100){
            alert("c'est moins");
        }else if(entree < entre0et100){
            alert("c'est plus")
        }else{
            alert(`vous avez gagnez: ${entre0et100}`);
        }
    }
}
nombreMyster(); */


/* for(let i =100; i >= 100; i--){
    console.log(i);
} */


/* function snake_case(camelCaces){
    if(typeof camelCaces === "string"){
        const majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0;  i < camelCaces.length; i++) {
            if(majuscule.includes(camelCaces[i])){
                if(i==0){
                    camelCaces = camelCaces.replace(camelCaces[i], camelCaces[i].toLowerCase());
                }else{
                    camelCaces = camelCaces.replace(camelCaces[i], "_" + camelCaces[i].toLowerCase());
                }
             // camelCaces = camelCaces.replace(camelCaces[i], "_" + camelCaces[i].toLowerCase());
            }
        }
        return camelCaces;
    }
}
console.log(snake_case("JeSuis")); */

/* let jeSuis = "je suis jean marc";

console.log(jeSuis.replaceAll("jean marc","harden")); */


/* try{
    console.log("debut du test");
    
}
catch(err){
    console.log(`Erreur ${err}`);
}
finally{
    console.log("envoi quelque chose après le try ou le catch")
} */

/* const capitale = {
    autriche: "viene",
    argentine: "buenos aires",
    estonie: "tallinn",
    australie: "cambera",
    coteDivoire: "abidjan"
}

for (const capitales in capitale) {
    console.log(`${capitales}: ${capitale[capitales]}`);
}



const capital = ["Fraise","Cerises","Orange","Annas"];

for (const monElement of capital) {
    console.log(monElement);
} */

/* function verificationDeLettreZ(lettreZ){
    for (const rechercheLettre of lettreZ) {
        const lettre = "z"
        if( rechercheLettre === lettre){
            console.log("le texte contient la lettre z");
            break;
    }
}
verificationDeLettreZ("nyza"); */

/* const btn = document.querySelector('button');

btn.addEventListener('click', evenement);

  function evenement() {
    btn.style.backgroundColor = "blue";
    btn.style.borderRadius = "100px";
    btn.style.width = "200px";
    btn.style.border = "none";
    console.log("bonjour");
  }
  btn.removeEventListener('click', evenement); */

/*   window.addEventListener('load', function(e){
    console.log("bonjour");
  }) */

/* document.addEventListener('keydown', function(e){
    console.log(e.key)
}) */

function snake_case(chaine){
    if(typeof chaine === "string"){
        const miniscules = 'abcdefghijklmnopqrstuvwyz';
        const majuscules = miniscules.toUpperCase();
        let result = "";

        for (const caractere of chaine) {
            if(!(miniscules + majuscules).includes(caractere)){
                return "la chaine n'est pas en chaine";
            }


            const indice = chaine.indexOf(caractere);

            if(indice === 0){
                if(majuscules.includes(caractere)){
                    return "la chaine n'est pas en chaine";
                }
                result += caractere;
            }else{

                if(majuscules.includes(caractere)){
                    result += `_${caractere.toLocaleLowerCase()}`;
                }else{
                    result += caractere;
                }              
            }
        }
        return result;
    }
    return "la chaine n'est pas en chaine";
}
console.log(snake_case("bonjourMonsieur"));