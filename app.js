/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/
document.getElementById('btn').addEventListener('click',()=>{

let cities=document.getElementById('city');
let cityName=cities.options[cities.selectedIndex].value;
let population=0,literacyRate=0;
let language='';
let result=document.getElementById('result');

switch(cityName){
    case 'Bengaluru':
        population = 8443675;
        literacyRate = 88.71;
        language = 'Kannada';
        break;

    case 'Chennai':
        population = 4646732;
        literacyRate = 90.20;
        language = 'Tamil';
        break;

    case 'Mumbai':
        population = 12442373;
        literacyRate = 89.73;
        language = 'Marathi';
        break;

    case 'Delhi':
        population = 16787941;
        literacyRate = 86.20;
        language = 'Hindi';
        break;
}
console.log(cityName,population);
result.textContent=`The Indian city of ${cityName} \n
has a population of ${population}.
Language spoken is ${language} 
and literacy rate is ${literacyRate}%.`
});


