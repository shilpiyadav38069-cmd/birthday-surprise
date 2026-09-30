function showScreen(screenId) {

    document.querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

    document
        .getElementById(screenId)
        .classList.add("active");
}


let enteredPassword = "";

const correctPassword = "0210";


function pressNumber(number) {

    if (enteredPassword.length >= 4) {
        return;
    }

    enteredPassword += number;

    updatePasswordDisplay();

}


function updatePasswordDisplay() {

    const dots =
        document.querySelectorAll(
            "#passwordDisplay span"
        );

    dots.forEach((dot, index) => {

        if (index < enteredPassword.length) {

            dot.innerText = "●";

            dot.classList.add("filled");

        } else {

            dot.innerText = "○";

            dot.classList.remove("filled");

        }

    });

}


function clearPassword() {

    enteredPassword =
        enteredPassword.slice(0, -1);

    updatePasswordDisplay();

}


function checkPassword() {

    if (
        enteredPassword ===
        correctPassword
    ) {

        document.getElementById(
            "wrongPassword"
        ).innerText = "";

        showScreen(
            "loadingScreen"
        );

        startLoading();

        const music =
            document.getElementById(
                "birthdayMusic"
            );

        music.play().catch(() => {});

    } else {

        const box =
            document.querySelector(
                ".welcome-box"
            );

        box.classList.add("shake");

        document.getElementById(
            "wrongPassword"
        ).innerText =
            "❌ Wrong code. Try again.";

        setTimeout(() => {

            box.classList.remove(
                "shake"
            );

        }, 400);

        enteredPassword = "";

        updatePasswordDisplay();

    }

}


function startLoading() {

    let progress = 0;

    const bar =
        document.getElementById(
            "loadingBar"
        );

    const percent =
        document.getElementById(
            "loadingPercent"
        );


    const timer = setInterval(() => {

        progress++;

        /* Update bar */

        bar.style.width =
            progress + "%";


        /* Update percentage */

        percent.innerText =
            progress + "%";


        /* Complete */

        if (progress >= 100) {

            clearInterval(timer);


            setTimeout(() => {

                showScreen(
                    "cakeScreen"
                );

            }, 600);

        }

    }, 45);

}


function blowCandle() {

    const flames =
        document.querySelectorAll(
            ".flame"
        );


    /* TURN OFF ALL CANDLES */

    flames.forEach(flame => {

        flame.style.display =
            "none";

    });


    /* START CELEBRATION */

    const cakeScreen =
        document.getElementById(
            "cakeScreen"
        );


    cakeScreen.classList.add(
        "celebrate"
    );


    /* CONFETTI */

    setTimeout(() => {

        createConfetti();

    }, 400);


    /* GO TO FINAL SCREEN */

    setTimeout(() => {
    showScreen("finalScreen");
    startTypingEffect();
}, 5000);

}


function createConfetti() {

    const cakeScreen =
        document.getElementById(
            "cakeScreen"
        );


    for (
        let i = 0;
        i < 120;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.classList.add(
            "confetti-piece"
        );


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.top =
            "-20px";


        piece.style.animationDuration =
            (2 + Math.random() * 3)
            + "s";


        piece.style.animationDelay =
            (Math.random() * 1.5)
            + "s";


        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";


        cakeScreen.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 6000);

    }

}


function randomColor() {

    const colors = [
        "#ff0000",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#ff00ff",
        "#ffffff"
    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}
function startTypingEffect() {
    const message = document.getElementById("typingMessage");

    const text =
        "May your special day be filled with love, laughter and happiness. " +
        "May every beautiful wish in your heart come true. ❤️";

    let index = 0;

    message.innerHTML = "";

    function typeCharacter() {
        if (index < text.length) {
            message.innerHTML += text.charAt(index);
            index++;

            setTimeout(typeCharacter, 45);
        }
    }

    typeCharacter();
}