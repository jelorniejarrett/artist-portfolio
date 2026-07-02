/* ========================================
   MASTER ILLUSTRATOR REGISTRY
   GLOBAL DATA
======================================== */

const artworks = [

{
    title: "Fantasy Portrait",
    series: "OC",
    color: "green",

    mood: "Epic",
    style: "Semi-Realistic",
    type: "Portrait",

    date: "2026-06-12",
    image: "images/gallery/MyProtrait-OC-6-12-26.png"
},

{
    title: "Desscaras",
    series: "Ichi the Witch",
    color: "yellow",

    mood: "Calm",
    style: "Painterly",
    type: "Character Illustration",

    date: "2026-06-06",
    image: "images/gallery/Desscaras-Ichi-the-Witch-6-6-26.png"
},

{
    title: "Ryomen Sukuna",
    series: "Jujutsu Kaisen",
    color: "red",

    mood: "Dark",
    style: "Anime",
    type: "Poster",

    date: "2026-06-11",
    image: "images/gallery/RyomenSukuna-JujutsuKaisen-6-11-26.png"
},

{
    title: "Chun-Li",
    series: "Street Fighter",
    color: "blue",

    mood: "Energetic",
    style: "Anime",
    type: "Poster",

    date: "2026-06-10",
    image: "images/gallery/Chun-Li-Street-Fighter-6-11-26.png"
},

{
    title: "Yuji Itadori / Sukuna",
    series: "Jujutsu Kaisen",
    color: "red green",

    mood: "Epic",
    style: "Anime",
    type: "Poster",

    date: "2026-05-30",
    image: "images/gallery/YujiItadori-RyomenSukuna-5-30-26.png"
},

{
    title: "Emma Frost",
    series: "Marvel",
    color: "blue",

    mood: "Calm",
    style: "Semi-Realistic",
    type: "Portrait",

    date: "2026-05-14",
    image: "images/gallery/EmmaFrost-Marvel-5-14-26.png"
},

{
    title: "Emma Frost: Diamond Form",
    series: "Marvel",
    color: "blue",

    mood: "Epic",
    style: "Semi-Realistic",
    type: "Portrait",

    date: "2026-05-15",
    image: "images/gallery/EmmaForstDiamond-5-15-26.png"
},

{
    title: "Takano Uro",
    series: "Jujutsu Kaisen",
    color: "purple",

    mood: "Calm",
    style: "Anime",
    type: "Character Illustration",

    date: "2026-04-26",
    image: "images/gallery/TakanoUro-JujustuKaisen-4-26-26.png"
},

{
    title: "Maki Zenin",
    series: "Jujutsu Kaisen",
    color: "green",

    mood: "Energetic",
    style: "Anime",
    type: "Character Illustration",

    date: "2026-04-24",
    image: "images/gallery/MakiZenin-JujustuKaisen-4-24-26.png"
},

{
    title: "Makima",
    series: "Chainsaw Man",
    color: "red",

    mood: "Dark",
    style: "Anime",
    type: "Poster",

    date: "2026-03-02",
    image: "images/gallery/Makima-Chainsawman-3-2-26.png"
},

{
    title: "Power",
    series: "Chainsaw Man",
    color: "blue",

    mood: "Energetic",
    style: "Anime",
    type: "Character Illustration",

    date: "2026-02-06",
    image: "images/gallery/Power-Chainsawman-2-6-26.png"
}

];

/* ========================================
   GLOBAL SETTINGS
======================================== */

const commissionStatus = {

    open: false,

    text: "CLOSED"

};

/* ========================================
   GLOBAL HELPERS
======================================== */

function formatDate(dateString){

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US",{

        year: "numeric",

        month: "long",

        day: "numeric"

    });

}

/* Returns newest artwork first */

function getLatestArtworks(count = 2){

    return [...artworks]

        .sort((a,b)=>

            new Date(b.date) -

            new Date(a.date)

        )

        .slice(0,count);

}

/* ========================================
   ART CARD
======================================== */

const flipCard = document.querySelector(".flip-card-inner");

if(flipCard){

    let lastTap = 0;

    function flip(){

        flipCard.classList.toggle("flipped");

    }

    flipCard.addEventListener("dblclick", flip);

    flipCard.addEventListener("touchend",(e)=>{

        const currentTime = Date.now();

        const tapLength = currentTime - lastTap;

        if(tapLength < 300 && tapLength > 0){

            e.preventDefault();

            flip();

        }

        lastTap = currentTime;

    });

}