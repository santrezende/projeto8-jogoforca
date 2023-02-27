export default function Jogo(props) {

    return (
        <div className='jogo'>
            <img data-test="game-image" src={props.image} />
            <div className='btnword'>
                {props.startButton}
                <div data-test="word" className={props.result}>
                    {props.palavraJogo}
                </div>
            </div>
        </div>
    )
}