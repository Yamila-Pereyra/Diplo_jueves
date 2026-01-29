import { Personaje } from "@/app/components/personaje";

export default async function Personajes() {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    const personajes = (await response.json()).results;

    return (
        <div>

            <h1>Personajes</h1>
            {personajes.map((personaje) => (
                <Personaje
                    key={personaje.id}
                    {...personaje}
                />
            ))}
        </div>
    );
}