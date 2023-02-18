import React from 'react'
import Jogo from './Jogo'
import Letras from './Letras'
import palavras from '../palavras'
import imagens from './imagens'
import alfabeto from './alfabeto'

export default function App() {
    let randomWord = "";
    const hiddenLetter = "_ ";
    let hiddenWord;

    let [gameWord, setGameWord] = React.useState("")

    let [letras, setLetras] = React.useState(alfabeto.map((l) => <button data-test="letter" key={alfabeto[alfabeto.indexOf(l)]} disabled class='desabilitado'>{l.toUpperCase()}</button>))

    let arrayRandomWord;

    function iniciarJogo() {
        randomWord = palavras[Math.floor(Math.random() * palavras.length)];
        contadorErros = 0;
        contadorImagem = 0;
        letrasClicadas = [];
        posicoesLetras = [];
        hiddenWord = [];
        arrayRandomWord = [];
        arrayRandomWord = randomWord.split('');

        resultado = setResultado('word')
        imagem = setImagem(imagens[contadorImagem])

        for (let i = 0; i < randomWord.length; i++) {
            hiddenWord.push(hiddenLetter)
        }

        console.log(arrayRandomWord);

        letras = setLetras(alfabeto.map((l) =>
            <button
                data-test="letter"
                key={alfabeto[alfabeto.indexOf(l)]}
                onClick={() => clicouLetra(l)}
                class={letrasClicadas.includes(l) ? 'desabilitado' : 'habilitado'}>{l.toUpperCase()}
            </button>));
        gameWord = setGameWord(hiddenWord);
        botaoEscolherPalavra = setBotaoEscolherPalavra(<button disabled class='startbutton' data-test="choose-word">Escolher Palavra</button>)
    }

    let contadorImagem = 0
    let contadorErros = 0

    let [imagem, setImagem] = React.useState(imagens[contadorImagem])

    let letrasClicadas = []
    let posicoesLetras = []
    let newArrayWord = []
    let [resultado, setResultado] = React.useState('word');

    function clicouLetra(letra) {
        letrasClicadas.push(letra);
        letras = setLetras(alfabeto.map((l) =>
            <button
                data-test="letter"
                key={alfabeto[alfabeto.indexOf(l)]}
                onClick={() => clicouLetra(l)}
                class={letrasClicadas.includes(l) ? 'desabilitado' : 'habilitado'}
                disabled={letrasClicadas.includes(l) ? true : ''}
            >
                {l.toUpperCase()}
            </button>));

        if (arrayRandomWord.includes(letra)) {
            let idx = arrayRandomWord.indexOf(letra)
            while (idx != -1) {
                posicoesLetras.push(idx);
                idx = arrayRandomWord.indexOf(letra, idx + 1);
            }

            for (let i = 0; i < arrayRandomWord.length; i++) {
                if (posicoesLetras.includes(i)) {
                    newArrayWord.push(arrayRandomWord[i] + ' ')
                } else {
                    newArrayWord.push(hiddenLetter)
                }
            }
            gameWord = setGameWord(newArrayWord);
            if (!newArrayWord.includes("_ ")) {
                letras = setLetras(alfabeto.map((l) => <button data-test="letter" key={alfabeto[alfabeto.indexOf(l)]} disabled class='desabilitado'>{l.toUpperCase()}</button>));
                botaoEscolherPalavra = setBotaoEscolherPalavra(<button class='startbutton' data-test="choose-word" onClick={iniciarJogo}>Escolher Palavra</button>);
                resultado = setResultado('word ganhou');
            }
        } else {
            imagem = setImagem(imagens[contadorImagem + 1])
            if (contadorImagem < 5) {
                contadorImagem++
            }
            contadorErros++;
        }

        if (contadorErros > 5) {
            letras = setLetras(alfabeto.map((l) => <button data-test="letter" key={alfabeto[alfabeto.indexOf(l)]} disabled class='desabilitado'>{l.toUpperCase()}</button>));
            botaoEscolherPalavra = setBotaoEscolherPalavra(<button class='startbutton' data-test="choose-word" onClick={iniciarJogo}>Escolher Palavra</button>);
            gameWord = setGameWord(arrayRandomWord)
            resultado = setResultado('word perdeu');
        }

        newArrayWord = [];
    }

    let [botaoEscolherPalavra, setBotaoEscolherPalavra] = React.useState(<button class='startbutton' data-test="choose-word" onClick={iniciarJogo}>Escolher Palavra</button>)

    return (
        <div class='app'>
            <Jogo palavraJogo={gameWord} startButton={botaoEscolherPalavra} image={imagem} result={resultado} />
            <Letras alfabetoInicial={letras} />
        </div>
    )
}