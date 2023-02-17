import alfabeto from './alfabeto'

export default function Letras(props) {
    let chosenLetter

    return (
        <div class='alfabeto'>
            {props.alfabetoInicial}
        </div>
    )
}

// onClick={
//     function escolheLetra() {
//         chosenLetter = l
//         console.log(chosenLetter)
//     }
// }