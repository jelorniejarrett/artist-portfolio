document
.getElementById("scanButton")
.addEventListener("click", runScan);

function runScan(){

    const projectType =
    document.getElementById("projectType").value;

    const mood =
    document.getElementById("mood").value;

    const style =
    document.getElementById("style").value;

    const color =
    document.getElementById("color").value;

    const results =
    document.getElementById("results");

    /* =====================
       VALIDATION
    ===================== */

    if(

        projectType === "Select" ||

        mood === "Select" ||

        style === "Select" ||

        color === "Select"

    ){

        results.innerHTML = `

        <div class="error-card">

            <h3>

                REGISTRY ERROR 04

            </h3>

            <p>

                INSUFFICIENT PROJECT DATA

            </p>

            <p>

                Analysis suspended until all
                parameters have been provided.

            </p>

        </div>

        `;

        return;
    }

    /* =====================
       FIND BEST MATCH
    ===================== */

    let bestMatch = null;

    let highestScore = -1;

    artworks.forEach(art => {

        let score = 0;

        /* PROJECT TYPE */

        if(

            art.type &&

            art.type.toLowerCase() ===
            projectType.toLowerCase()

        ){

            score += 40;

        }

        /* MOOD */

        if(

            art.mood &&

            art.mood.toLowerCase() ===
            mood.toLowerCase()

        ){

            score += 25;

        }

        /* STYLE */

        if(

            art.style &&

            art.style.toLowerCase() ===
            style.toLowerCase()

        ){

            score += 25;

        }

        /* COLOR */

        if(

            art.color &&

            art.color.toLowerCase()
            .includes(
                color.toLowerCase()
            )

        ){

            score += 10;

        }

        if(score > highestScore){

            highestScore = score;

            bestMatch = art;

        }

    });

    /* =====================
       LOADING SCREEN
    ===================== */

    results.innerHTML = `

    <div class="scan-loading">

        <h3>

            INITIATING REGISTRY ANALYSIS

        </h3>

        <div class="loading-bar">

            <div class="loading-fill"></div>

        </div>

        <div class="scan-status">

            Searching archived illustrations...

        </div>

    </div>

    `;

    /* WAIT FOR ANIMATION */

    setTimeout(() => {

        displayResult(
            bestMatch,
            highestScore
        );

    }, 2500);

}

/* =====================
   DISPLAY RESULT
===================== */

function displayResult(
    artwork,
    score
){

    const results =
    document.getElementById("results");

    if(!artwork){

        results.innerHTML = `

        <div class="waiting-state">

            <h3>

                NO MATCH FOUND

            </h3>

        </div>

        `;

        return;
    }

    results.innerHTML = `

    <div class="result-card">

        <img
            src="${artwork.image}"
            alt="${artwork.title}"
        >

        <div class="result-info">

            <div class="compatibility">

                ${score}% MATCH

            </div>

            <h2>

                ${artwork.title}

            </h2>

            <p>

                <strong>CLASSIFICATION:</strong>

                ${artwork.series}

            </p>

            <p>

                <strong>PROJECT TYPE:</strong>

                ${artwork.type}

            </p>

            <p>

                <strong>STYLE:</strong>

                ${artwork.style}

            </p>

            <p>

                <strong>MOOD:</strong>

                ${artwork.mood}

            </p>

            <p>

                <strong>ARCHIVED:</strong>

                ${formatDate(
                    artwork.date
                )}

            </p>

            <p>

                Registry analysis indicates
                a strong compatibility
                with the selected
                project requirements.

            </p>

        </div>

    </div>

    `;

}

/* =====================
   DATE FORMATTER
===================== */

function formatDate(
    dateString
){

    const date =
    new Date(dateString);

    const month =
    String(
        date.getMonth() + 1
    ).padStart(2,"0");

    const day =
    String(
        date.getDate()
    ).padStart(2,"0");

    const year =
    date.getFullYear();

    return `${month}.${day}.${year}`;
}

window.addEventListener("load", () => {

    document
        .querySelector(".registry-stamp")
        .classList.add("active");

});