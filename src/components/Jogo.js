import palavras from './palavras'

export default function Jogo() {

    const imagens = [
        'assets/forca0.png',
        'assets/forca1.png',
        'assets/forca2.png',
        'assets/forca3.png',
        'assets/forca4.png',
        'assets/forca5.png',
        'assets/forca6.png',
    ]

    let randomWord = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(randomWord);

    const hiddenLetter = "_ ";
    let hiddenWord = "";

    for (let i = 0; i < randomWord.length; i++) {
        hiddenWord += hiddenLetter;
    }

    return (
        <div class='jogo'>
            <img src={imagens[0]} />
            <div class='btnword'>
                <button>Escolher Palavra</button>
                <div class='word'>
                    {hiddenWord}
                </div>
            </div>
        </div>
    )
}