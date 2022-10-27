const conselho = [
    "Se você é bom em alguma coisa, nunca faça de graça.",
    "Fazer ou não fazer, não existe tentar.",
    "É o que você faz agora que faz a diferença.",
    "Até que você comece a acreditar em si mesmo, você não terá uma vida!",
    "A vida não para e começa a sua conveniência.",
    "Você sabe qual é o problema da vida real? Não há música de perigo.",
    "Quando você tem um sonho, você tem que agarrá-lo e nunca deixá-lo ir.",
    "Tome uma ideia. Faça dessa ideia a sua vida - pense nela, sonhe com ela, viva essa ideia. Deixe o cérebro, os músculos, os nervos, cada parte do seu corpo, estar cheio dessa ideia, e deixe cada outra ideia sozinha. Este é o caminho para o sucesso.",
    "O sucesso é caminhar de fracasso em fracasso sem perder o entusiasmo.",
    "Não é o mais forte da espécie que sobrevive, nem o mais inteligente, mas o que mais responde às mudanças",
    "Não tenha medo de desistir do bom para ir para o grande.",
    "Existem dois tipos de pessoas que lhe dirão que você não pode fazer a diferença neste mundo: aqueles que têm medo de tentar e aqueles que têm medo de você ter sucesso.",
    "O sucesso é a soma de pequenos esforços, repetidos dia após dia.",
    "Daqui a vinte anos, você ficará mais desapontado com as coisas que não fez do que com as que fez. Então jogue fora as bóias. Navegue para longe do porto seguro. Pegue os ventos alísios em suas velas. Explore . Sonhe. Descubra.",
    "Você pode ter que lutar uma batalha mais de uma vez para vencê-la.",
    "A melhor vingança é o sucesso maciço.",
    "Um bom plano executado com violência agora é melhor do que um plano perfeito executado na próxima semana",
    "Se você passar a vida tentando ser bom em tudo, nunca será bom em nada.",
    "Para ser insubstituível, é preciso ser sempre diferente",
    "Corrija a causa, não o sintoma"
];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function exibirConselho() {
    const numeroAleatorio = getRandomInt(0, conselho.length);
    const conselhoP = document.getElementById("conselho");
    conselhoP.innerHTML = conselho[numeroAleatorio];
    
    if (conselho[numeroAleatorio].length < 100) {
        conselhoP.style.fontSize = "30px";
    } else if (conselho[numeroAleatorio].length < 200) {
        conselhoP.style.fontSize = "25px";
    } else {
        conselhoP.style.fontSize = "20px"; 
    }
}

document.getElementsByTagName("button")[0].addEventListener("click", exibirConselho);
