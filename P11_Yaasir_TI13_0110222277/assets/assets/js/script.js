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

    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // Jika Pilihan sama akan seri
    if(pilihanUser == pilihanComputer){
        alert("Draw");
    }

    // Jika Pilihan user yang menang
    if(pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("YOU WIN");
    }

    // Jika Pilihan user yang kalah
    if(pilihanUser == "Rock" && pilihanComputer == "Paper"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Scissors"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Rock"){
        alert("COMPUTER WIN");
    }
}