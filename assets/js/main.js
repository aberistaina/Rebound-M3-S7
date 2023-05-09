let texto = document.getElementById("parrafoLorem").textContent
let palabras = ["sed", "vehicula", "vivamus", "nam", "eros", "vestibulum", "quam", "sollicitudin", "finibus", "dictum", "morbi"]
const regex = new RegExp(`\\b(${palabras.join('|')})\\b`, 'gi');
let array = texto.match(regex)

console.log(array)

let palabraSed = "sed"
palabraSed = array.filter(function(palabra){
    return palabra === palabraSed;
})
sed = palabraSed.length
if(sed ||= (sed==6)){
    console.log(`%csed: ${palabraSed.length}`,'color: #FF5500')
}


let palabravehicula = "vehicula"
palabravehicula = array.filter(function(palabra){
    return palabra === palabravehicula;
})
vehicula = palabravehicula.length
if(vehicula ||= (vehicula==4)){
    console.log(`%cvehicula: ${palabravehicula.length}`,'color: #FF99B2')
}

let palabravivamus = "vivamus"
palabravivamus = array.filter(function(palabra){
    return palabra === palabravivamus;
})
vivamus = palabravivamus.length
if(vivamus ||= (vivamus==3)){
    console.log(`%cvivamus: ${palabravivamus.length}`,'color: #FF99F5')
}

let palabranam = "nam"
palabranam = array.filter(function(palabra){
    return palabra === palabranam;
})
nam = palabranam.length
if(nam ||= (nam==3)){
    console.log(`%cnam: ${palabranam.length}`,'color: #BB99FF')
}

let palabraeros = "eros"
palabraeros = array.filter(function(palabra){
    return palabra === palabraeros;
})
eros = palabraeros.length
if(eros ||= (eros==2)){
    console.log(`%ceros: ${palabraeros.length}`,'color: #99C5FE')
}

let palabravestibulum = "vestibulum"
palabravestibulum = array.filter(function(palabra){
    return palabra === palabravestibulum;
})
vestibulum = palabravestibulum.length
if(vestibulum ||= (vestibulum==2)){
    console.log(`%cvestibulum: ${palabravestibulum.length}`,'color: #00CEFF')
}

let palabraquam = "quam"
palabraquam = array.filter(function(palabra){
    return palabra === palabraquam;
})
quan = palabraquam.length
if(quan ||= (quan==2)){
    console.log(`%cquam: ${palabraquam.length}`,'color: #01FFEE')
}

let palabrasollicitudin = "sollicitudin"
palabrasollicitudin = array.filter(function(palabra){
    return palabra === palabrasollicitudin;
})
sollicitudin = palabrasollicitudin.length
if(sollicitudin ||= (sollicitudin==2)){
    console.log(`%csollicitudin: ${palabrasollicitudin.length}`,'color: #00FF9F')
}

let palabrafinibus = "finibus"
palabrafinibus = array.filter(function(palabra){
    return palabra === palabrafinibus;
})
finibus = palabrafinibus.length
if(finibus ||= (finibus==2)){
    console.log(`%cfinibus: ${palabrafinibus.length}`,'color: #B6FF01')
}

let palabradictum = "dictum"
palabradictum = array.filter(function(palabra){
    return palabra === palabradictum;
})
dictum = palabradictum.length
if(dictum ||= (dictum==2)){
    console.log(`%cdictum: ${palabradictum.length}`,'color: #FFFF00')
}

let palabramorbi = "morbi"
palabramorbi = array.filter(function(palabra){
    return palabra === palabramorbi;
})
morbi = palabramorbi.length
if(morbi ||= (morbi==2)){
    console.log(`%cmorbi: ${palabramorbi.length}`,'color: #FFB600')
}





texto = document.getElementById("parrafoLorem").textContent.replaceAll("sed", "<b>UNO</b>").replaceAll("vehicula", "<b>DOS</b>").replaceAll("vivamus", "<b>TRES</b>").replaceAll("nam", "<b>CUATRO</b>").replaceAll("eros", "<b>CINCO</b>").replaceAll("vestibulum", "<b>SEIS</b>").replaceAll("quam", "<b>SIETE</b>").replaceAll("sollicitudin", "<b>OCHO</b>").replaceAll("finibus", "<b>NUEVE</b>").replaceAll("dictum", "<b>DIEZ</b>").replaceAll("morbi", "<b>ONCE</b>")

 document.getElementById("parrafoLorem").innerHTML = texto

