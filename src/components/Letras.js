import alfabeto from './alfabeto'

export default function Letras() {
    return (
        <ul class='alfabeto'>
            {alfabeto.map((l) => <li>{l.toUpperCase()}</li>)}
        </ul>
    )
}