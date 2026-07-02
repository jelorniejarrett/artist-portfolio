/* ========================================
   SHOP INITIALIZATION
======================================== */

window.addEventListener("DOMContentLoaded", () => {

    /* Registry Stamp */

    const stamp =
    document.querySelector(".registry-stamp");

    if(stamp){

        setTimeout(() => {

            stamp.classList.add("active");

        },500);

    }

    /* ====================================
    COMMISSION STATUS
    ==================================== */

    const status =
    document.getElementById("commissionStatus");

    if(status){

        status.textContent =
            commissionStatus.text;

        if(commissionStatus.open){

            status.classList.add(
                "status-open"
            );

        }

        else{

            status.classList.add(
                "status-closed"
            );

        }

    }

    /* ====================================
       CARD ENTRANCE ANIMATION
    ==================================== */

    const cards =
    document.querySelectorAll(".commission-card");

    cards.forEach((card,index)=>{

        card.style.opacity = "0";

        card.style.transform =
        "translateY(40px)";

        setTimeout(()=>{

            card.style.transition =
            "all .6s ease";

            card.style.opacity = "1";

            card.style.transform =
            "translateY(0)";

        },300 + (index * 180));

    });

    /* ====================================
       PINBOARD HOVER EFFECT
    ==================================== */

    document
    .querySelectorAll(".pinned-paper")
    .forEach(paper=>{

        paper.addEventListener("mousemove",e=>{

            const rect =
            paper.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateY =
            ((x / rect.width)-0.5) * 4;

            const rotateX =
            -((y / rect.height)-0.5) * 4;

            paper.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-4px)
            `;

        });

        paper.addEventListener("mouseleave",()=>{

            paper.style.transform = "";

        });

    });

});