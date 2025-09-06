const loadLessons= ()=> {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((json)=> displayLessons(json.data));
}


const displayLessons=(lessons)=>{
    // 1.Get the container & empty (বাটন গুলার জন্য একটা মেইন দিভ & যাতে click হলে double না হয়ে যায় তাই  inner HTML empty করা হইছে )
const gettingContainer=document.getElementById("primary-btns");
gettingContainer.innerHTML="";

    // 2.Get into every lesson (লিংক এর প্রত্যেক টা লেভেল কে access করা) 
    for(lesson of lessons){


    // *Create Element (বাটন এর জন্য দিভ বানানো) 
const divForButton= document.createElement("div")
divForButton.innerHTML=`<button onclick="loadWords(${lesson.level_no})" class="btn btn-outline btn-accent w-[120px]"><i class="fa-brands fa-readme"></i> Level - ${lesson.level_no} </button>
    </div>`

    // *Append into container (বাটন এর দিভ গুলা মেইন দিভ এ ঢুকানো )
gettingContainer.append(divForButton);

    }
}

const loadWords= (id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then((res)=> res.json())
    .then((wordlink) => displayWords(wordlink.data));
};

const displayWords=(words)=>{
const wordContainer=document.getElementById("word-container")
wordContainer.innerHTML="";

for(word of words){

    const divForWords=document.createElement("div")

    divForWords.innerHTML=`<div class="h-[200px] w-[200px] bg-white flex flex-col items-center justify-center rounded-2xl gap-1 shadow">
        <h1 class="text-3xl font-bold">${word.word}</h1>
        <p class="text-l">${word.pronunciation}</p>
        <h3 class="text-xl text-gray-500">${word.meaning}</h3>
        <div class="w-[150px] flex justify-between items-center mt-4"> <i class="fa-solid fa-circle-info"></i>  <i class="fa-solid fa-volume-high"></i></div>
        </div>`

    wordContainer.append(divForWords);
}
}


loadLessons();

