export default function Chute(props) {

    return (
        <div className='chute'>
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" type='text' value={props.texto} onChange={props.changeInput} />
            <button data-test="guess-button" onClick={props.checkPalpite}>Chutar</button>
        </div>
    )
}