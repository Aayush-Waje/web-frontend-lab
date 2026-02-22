window.onload = () => {
    const welcomeDiv = document.querySelector("div.welcome");
    window.setTimeout(() => {
        welcomeDiv.innerHTML = "You finishted the lab!";
    }, 4000)   
};