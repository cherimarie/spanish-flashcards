const set1 = [
  {en: "We talk",
  es: "Nosotros hablamos"},
  {en: "You write (informal)",
  es: "Tú escribes"},
  {en: "I need",
  es: "Yo necesito"},
  {en: "I have",
  es: "Yo tengo"},
  {en: "They eat",
  es: "Ellos comen"},
  {en: "He dances",
  es: "Él baila"},
  {en: "She swims",
  es: "Ella nada"},
  {en: "You call",
  es: "Tú llamas"},
  {en: "I arrive",
  es: "Yo llego"},
  {en: "We listen",
  es: "Nosotros escuchamos"},
  {en: "You learn (informal)",
  es: "Tú aprendes"},
  {en: "I want",
  es: "Yo quiero"},
  {en: "They explain",
  es: "Ellos explican"},
  {en: "He visits",
  es: "Él visita"},
  {en: "We drink",
  es: "Nosotros bebemos"},
  {en: "You share (informal)",
  es: "Tú compartes"},
  {en: "They share",
  es: "Ellos comparten"},
  {en: "We write",
  es: "Nosotros escribimos"},
  {en: "They run",
  es: "Ellos corren"},
  {en: "You all eat.",
  es: "Ustedes comen"},
  {en: "I understand",
  es: "Yo comprendo"},
  {en: "We sing",
  es: "Nosotros cantamos"},
  {en: "You draw (informal)",
  es: "Tú dibujas"},
  {en: "We study",
  es: "Nosotros estudiamos"},
  {en: "He teaches",
  es: "Él enseña"},
  {en: "They work",
  es: "Ellos trabajan"},
  {en: "She shares",
  es: "Ella comparte"},
  {en: "He reads",
  es: "Él lee"},
  {en: "We skate",
  es: "Nosotros patinamos"},
  {en: "You all talk",
  es: "Ustedes hablan"},
  {en: "We need",
  es: "Nosotros Necesitamos"},
  {en: "She uses",
  es: "Ella usa"},
  {en: "They need",
  es: "Ellos necesitan"},
  {en: "We practice",
  es: "Nosotros practicamos"},
  {en: "She draws",
  es: "Ella dibuja"},
  {en: "He writes",
  es: "Él escribe"},
  {en: "You sing (informal)",
  es: "Tú cantas"},
  {en: "You dance (formal)",
  es: "Usted baila"},
  {en: "She practices",
  es: "Ella practica"},
  {en: "We use",
  es: "Nosotros usamo"}
]

const set2 = []

let ACTIVE_SET = set1
let ACTIVE_CARD = 0
const languageSwapper = {'en': 'es', 'es': 'en'}
let ACTIVE_LANGUAGE = 'en'

const cardContainer = document.getElementById("cards")

const setButtons = document.querySelectorAll('button[class^="set"]')
setButtons.forEach(function(setButt){
  setButt.addEventListener("click", function(){
    selectActiveSet(setButt)
  })
})
function selectActiveSet(setButt){
  setButtons.forEach(function(butt){
    butt.classList.remove("active")
  })
  ACTIVE_SET = eval(setButt.classList[0])
  setButt.classList.add("active")
  startSet()
}

const languageButton = document.querySelector('#language')
languageButton.addEventListener("click", swapLanguages)
document.querySelector("#cards").addEventListener("click", swapLanguages)
function swapLanguages(){
  ACTIVE_LANGUAGE = languageSwapper[ACTIVE_LANGUAGE]
  displayInActiveLanguage()
}
function displayInActiveLanguage(){
  cardContainer.setAttribute("class", `show-${ACTIVE_LANGUAGE}`)
  languageButton.innerHTML = ACTIVE_LANGUAGE
}

document.querySelector("#prev").addEventListener("click", function(){
  if(ACTIVE_CARD > 0){
    ACTIVE_CARD--
  }
  drawCard(ACTIVE_SET, ACTIVE_CARD)
})

document.querySelector("#next").addEventListener("click", function(){
  if(ACTIVE_CARD < ACTIVE_SET.length){
    ACTIVE_CARD++
  }
  drawCard(ACTIVE_SET, ACTIVE_CARD)
})

document.querySelector("#shuffle").addEventListener("click", function(){
  ACTIVE_CARD = Math.floor(Math.random() * Math.floor(ACTIVE_SET.length))
  drawCard(ACTIVE_SET, ACTIVE_CARD)
})

function startSet(){
  drawCard(ACTIVE_SET, ACTIVE_CARD)
}

function drawCard(set, card){
  cardContainer.innerHTML = ''
  el = set[card]
  if(!el){
    return
  }

  let newCard = document.createElement("div")
  let newEs = document.createElement("p")
  newEs.setAttribute("class", "es")
  newEs.innerHTML = el.es
  let newEn = document.createElement("p")
  newEn.setAttribute("class", "en")
  newEn.innerHTML = el.en
  newCard.append(newEs)
  newCard.append(newEn)
  cardContainer.append(newCard)
}

document.querySelector(".answers #display").addEventListener("click", function(){
  const vocabContainer = document.getElementById("vocab")
  ACTIVE_SET.forEach(function(el){
    let newVocab = document.createElement("p")
    let newEs = document.createElement("span")
    newEs.setAttribute("class", "es")
    newEs.innerHTML = el.es
    let separator = document.createTextNode(" : ")
    let newEn = document.createElement("span")
    newEn.setAttribute("class", "en")
    newEn.innerHTML = el.en
    newVocab.append(newEs)
    newVocab.append(separator)
    newVocab.append(newEn)
    vocabContainer.append(newVocab)
  })
})

function loadUp(){
  displayInActiveLanguage()
  selectActiveSet(setButtons[0])
}

window.onload = loadUp
