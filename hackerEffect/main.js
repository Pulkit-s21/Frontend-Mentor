const letters = "ABCDEFGHIJKLMNOPQRSTUVYXYZ"

document.querySelector("h1").onmouseover = e => {
    let iterations = 0

    const interval = setInterval(() => {
        e.target.innerText = e.target.innerText.split("")
        .map((letter,index) => {
            if(index < iterations){
                return e.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        iterations += 1 / 3

        if(iterations >= e.target.dataset.value.length) {
            clearInterval(interval)
        }
    }, 30);
}