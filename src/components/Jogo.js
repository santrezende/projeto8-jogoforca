import imagens from './imagens'

export default function Jogo(props) {

    return (
        <div class='jogo'>
            <img src={imagens[0]} />
            <div class='btnword'>
                {props.startButton}
                <div class='word'>
                    {props.palavraInicial}
                </div>
            </div>
        </div>
    )
}