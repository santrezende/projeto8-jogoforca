import React from 'react'
import Jogo from './Jogo'
import Letras from './Letras'
import palavras from './palavras'
import imagens from './imagens'
import alfabeto from './alfabeto'

export default function App() {
    let randomWord = palavras[Math.floor(Math.random() * palavras.length)];

    const hiddenLetter = "_ ";
    let hiddenWord = "";

    for (let i = 0; i < randomWord.length; i++) {
        hiddenWord += hiddenLetter;
    }

    let [gameWord, setGameWord] = React.useState("")

    // acima eh Jogo e abaixo eh Letras //

    let [letras, setLetras] = React.useState(alfabeto.map((l) => <button disabled class='desabilitado'>{l.toUpperCase()}</button>))

    const startGame = function iniciarJogo() {
        letras = setLetras(alfabeto.map((l) => <button class='habilitado'>{l.toUpperCase()}</button>));
        gameWord = setGameWord(hiddenWord);
        botaoEscolher = setBotaoEscolher(<button disabled class='startbutton'>Escolher Palavra</button>)
    }

    let [botaoEscolher, setBotaoEscolher] = React.useState(<button class='startbutton' onClick={startGame}>Escolher Palavra</button>)

    return (
        <div class='app'>
            <Jogo palavraInicial={gameWord} palavraEscondida={hiddenWord} startButton={botaoEscolher} />
            <Letras alfabetoInicial={letras} />
        </div>
    )
}