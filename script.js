document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {



            document.querySelectorAll(".card").forEach((c) => {
                if (c !== card){
                    c.classList.remove("is-flipped");
                }
            });


            card.classList.toggle('is-flipped');
        });
    });
});



function mudar1() {
    Swal.fire({
        title: "Produzir Gametas",
        text: "A meiose é o processo responsável por formar os gametas (óvulos e espermatozoides) nos organismos que se reproduzem sexuadamente. Ela reduz o número de cromossomos pela metade, garantindo que a fecundação mantenha o número de cromossomos típico da espécie.",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

function mudar2() {
    Swal.fire({
        title: "Duas",
        html: "A meiose é composta por duas divisões celulares consecutivas: <br>Meiose I - Separa os cromossomos homólogos <br>Meiose II - Separa as cromátides-irmãs",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

function mudar3() {
    Swal.fire({
        title: " 4",
        text: "Ao final da meiose, são geradas quatro células filhas haploides (n), todas com metade do número de cromossomos da célula original. Essas células são geneticamente diferentes entre devido ao crossing-over e à segregação independente dos cromossomos.",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

function mudar4() {
    Swal.fire({
        title: "Prófase I",
        text: "O crossing-over (ou permutação gênica) ocorre durante a prófase | da meiose, mais especificamente na subfase chamada paquiteno. Nesse estágio, os cromossomos homólogos se emparelham (sinapse) e podem trocar segmentos entre si que aumenta a variabilidade genética dos gametas.",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}
function mudar5() {
    Swal.fire({
        title: "Em pares de homólogos na linha equatorial",
        text: "Na metáfase I da meiose, os cromossomos homólogos (cada um com duas cromátides irmãs) se alinham aos pares no plano equatorial da célula. Esse arranjo em pares é uma das principais características que diferencia a meiose, da mitose, onde os cromossomos se alinhamindividualmente.",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

function mudar6() {
    Swal.fire({
        title: "Crossing-over ",
        text: "O crossing-over (troca de segmentos entre cromátides de cromossomos homólogos) ocorre somente na prófase | da melose | e não ocorre na meiose II. Esse processo é fundamental (para aumentar a variabilidade genética).",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

function mudar7() {
    Swal.fire({
        title: "Nos ovarios e nos testiculos",
        html: "A meiose ocorre nas gônadas: <br>Ovários nas mulheres ⭢ produçaõ de óvulos Testículos nos homens ⭢ produção de espermatozoídes.",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

function mudar8() {
    Swal.fire({
        title: "Reprodução sexuada e variabilidade genética ",
        text: "A meiose é o processo de divisão celular que forma os gametas (óvulos e espermatozoides) com metade do número de cromossomos (célulashaploides), sendo essencial para a reprodução sexuada. Além disso, eventos como o crossing-over e a segregação Independente dos cromossomos promovem variabilidade genética o que é fundamental para a evolução das espécies.",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

  
function mudar9() {
    Swal.fire({
        title: "Dois (2n)",
        text: "Antes da meiose começar, as células são diploides (2n), ou seja, possuem dois conjuntos de cromossomos - um herdado do pai e outro da mãe. Durante a interfase (antes da prófase I), os cromossomos são duplicados, mas o número de conjuntos continua sendo 2n, pois as cromátides irmãs ainda fazem parte do mesmo cromossomo. A meiose então reduz esse número para n (haploide), formando gametas.",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}

function mudar10() {
    Swal.fire({
        title: "Sexuadamente",
        text: "A meiose ocorre em organismos que se reproduzem sexuadamente, pois é o processo responsável pela formação de gametas (óvulos e espermatozoides), que se unem na fecundação para formar um novo organismo. Esse tipo de reprodução permite a variabilidade genética, essencial para a adaptação e evolução das espécies. ",
        icon: "info",
        iconColor: "#A9C46C",
        customClass: {
            popup: 'popup-classe',
            title: 'titulo-class',
            confirmButton: 'botao-classe'
        }
    });
}
