/* ========================================
   SORT ARTWORKS (NEWEST FIRST)
======================================== */

const sortedArtworks = [...artworks].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
);

/* ========================================
   LATEST 2 WORKS
======================================== */

const latestContainer = document.getElementById("latestWorks");

if (latestContainer) {

    const latestTwo = sortedArtworks.slice(0, 2);

    latestContainer.innerHTML = "";

    latestTwo.forEach(art => {

        latestContainer.innerHTML += `
            <div class="latest-card">

                <img src="${art.image}" alt="${art.title}">

                <div class="latest-info">

                    <h3>${art.title}</h3>

                    <p>
                        <strong>CLASSIFICATION:</strong>
                        ${art.series}
                    </p>

                    <p>
                        <strong>ARCHIVED:</strong>
                        ${formatDate(art.date)}
                    </p>

                </div>

            </div>
        `;
    });
}

/* ========================================
   REGISTRY STATISTICS
======================================== */

/* Total Artwork */
const artCountEl = document.getElementById("artCount");
if (artCountEl) {
    artCountEl.innerText = artworks.length;
}

/* Fan Universes */
const universes = new Set(artworks.map(a => a.series));

const seriesCountEl = document.getElementById("seriesCount");
if (seriesCountEl) {
    seriesCountEl.innerText = universes.size;
}

/* Original Characters (FIXED) */
const ocCountEl = document.getElementById("ocCount");

if (ocCountEl) {

    const ocCount = artworks.filter(art =>
        art.series.toLowerCase() === "oc" ||
        art.series.toLowerCase().includes("original")
    ).length;

    ocCountEl.innerText = ocCount;
}

/* ========================================
   COMMISSION STATUS (FIXED + SYNCED)
======================================== */

/* ========================================
   COMMISSION STATUS
======================================== */

const statusEl =
document.getElementById("commissionStatus");

if(statusEl){

    statusEl.textContent =
        commissionStatus.text;

    if(commissionStatus.open){

        statusEl.style.color =
        "#2ea44f";

    }

    else{

        statusEl.style.color =
        "#b32424";

    }

}

/* ========================================
   EMAIL
======================================== */

const emailEl = document.getElementById("registryEmail");
const emailButton = document.getElementById("emailButton");

const registryEmail = "opecstasy.art@gmail.com";

if (emailEl) emailEl.innerText = registryEmail;
if (emailButton) emailButton.href = `mailto:${registryEmail}`;

/* ========================================
   DATE FORMATTER
======================================== */

function formatDate(dateString) {

    const date = new Date(dateString);

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}.${day}.${year}`;
}

window.addEventListener("DOMContentLoaded", () => {

    const stamp = document.querySelector(".registry-stamp");

    if (stamp) {
        setTimeout(() => {
            stamp.classList.add("active");
        }, 300);
    }

});