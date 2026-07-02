const bootScreen = document.getElementById("bootScreen");

const bootBar = document.getElementById("bootBar");

const bootText = document.getElementById("bootText");

const bootMessages = [

    "Connecting to Registry...",

    "Verifying Archive Files...",

    "Scanning Illustration Database...",

    "Decrypting Metadata...",

    "Loading Gallery..."

];

let progress = 0;

let index = 0;

const bootAnimation = setInterval(()=>{

    progress += 20;

    bootBar.style.width = progress + "%";

    bootText.textContent = bootMessages[index];

    index++;

    if(progress >= 100){

        clearInterval(bootAnimation);

        setTimeout(()=>{

            bootScreen.classList.add("hide");

        },350);

    }

},220);

artworks.sort(
(a,b) => new Date(b.date) - new Date(a.date)
);

const gallery =
document.getElementById("galleryGrid");

const searchBar =
document.getElementById("searchBar");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

function formatDate(dateString){

    const date = new Date(dateString);

    const month =
        String(date.getMonth() + 1).padStart(2,"0");

    const day =
        String(date.getDate() + 1).padStart(2,"0");

    const year =
        date.getFullYear();

    return `${month}.${day}.${year}`;
}

function renderGallery(data){

    gallery.innerHTML = "";

    data.forEach(art => {

        const card =
        document.createElement("div");

        card.className =
        "gallery-item";

        card.innerHTML = `

            <img
                src="${art.image}"
                alt="${art.title}"
            >

            <div class="art-info">

                <p>
                    <strong>SUBJECT:</strong><br>
                    ${art.title}
                </p>

                <p>
                    <strong>CLASSIFICATION:</strong><br>
                    ${art.series}
                </p>

                <p>
                    <strong>ARCHIVED:</strong><br>
                    ${formatDate(art.date)}
                </p>

            </div>

        `;

        card.onclick = () => {

            lightbox.style.display =
            "flex";

            lightboxImage.src =
            art.image;
        };

        gallery.appendChild(card);

    });

}

renderGallery(artworks);

/* SEARCH */

searchBar.addEventListener(
"input",
e => {

    const term =
    e.target.value.toLowerCase();

    const filtered =
    artworks.filter(art =>

        art.title.toLowerCase().includes(term)

        ||

        art.series.toLowerCase().includes(term)

        ||

        art.color.toLowerCase().includes(term)

    );

    renderGallery(filtered);

});

/* CLOSE LIGHTBOX */

closeLightbox.onclick = () => {

    lightbox.style.display =
    "none";

};

lightbox.onclick = (e) => {

    if(e.target === lightbox){

        lightbox.style.display =
        "none";
    }

};

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

