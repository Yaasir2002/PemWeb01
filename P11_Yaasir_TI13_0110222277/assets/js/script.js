// Menangkap Semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
    // Jika Diklik akan menjalankan fungsi computerChoice
    a.addEventListener("click",(element) => {
        computerChoice(element);
    })
);

function computerChoice(element){
    // Tangkap Pilihan User
    let pilihanUser = element.target.innerText;

    // Menangkap Element Result Dengan queryselcetor untuk menampung nilai hasil game
    let pilihanComputer = document.querySelector("#result");

    let choices = ["Rock","Paper","Scissors"];

    pilihanComputer.innerHTML = choices[Math.round(Math.random() * choices.length)];
    pilihanComputer.innerHTML;
}