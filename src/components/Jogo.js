export default function Jogo(props) {

    return (
        <div class='jogo'>
            <img data-test="game-image" src={props.image} />
            <div class='btnword'>
                {props.startButton}
                <div data-test="word" class='word'>
                    {props.palavraJogo}
                </div>
            </div>
        </div>
    )
}