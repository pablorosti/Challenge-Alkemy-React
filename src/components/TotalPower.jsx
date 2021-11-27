import React, { useContext } from 'react'
import { TeamContext } from '../context/TeamContext';
import { ProgressBar } from './ProgressBar';
import { totalPowerstats } from '../functions/totalPowerstats';
import { avarage } from '../functions/avarage';

export const TotalPower = () => {
    //Obtenemos el equipo actual
    const { team } = useContext(TeamContext);

    const combat = team?.map((t) => parseInt(t.powerstats.combat));
    const durability = team?.map((t) => parseInt(t.powerstats.durability));
    const inteligence = team?.map((t) => parseInt(t.powerstats.intelligence));
    const power = team?.map((t) => parseInt(t.powerstats.power));
    const speed = team?.map((t) => parseInt(t.powerstats.speed));
    const strength = team?.map((t) => parseInt(t.powerstats.strength));
    const weight = team?.map((t) => parseInt(t.appearance.weight[1]));
    const height = team?.map((t) => parseInt(t.appearance.height[1]));

    //Calculamos el promedio de peso y altura
    const totalAverageWeight = avarage(weight);
    const totalAvarageHeight = avarage(height);

    //Calculamos el total de powerstats de cada personaje
    const totalCombat = totalPowerstats(combat);
    const totalDurability = totalPowerstats(durability);
    const totalInteligence = totalPowerstats(inteligence);
    const totalPower = totalPowerstats(power);
    const totalSpeed = totalPowerstats(speed);
    const totalStrength = totalPowerstats(strength);

    return (
        <>
            <ProgressBar title='Durabilidad' total={totalDurability} />
            <ProgressBar title='Combate' total={totalCombat} />
            <ProgressBar title='Inteligencia' total={totalInteligence} />
            <ProgressBar title='Poder' total={totalPower} />
            <ProgressBar title='Velocidad' total={totalSpeed} />
            <ProgressBar title='Fuerza' total={totalStrength} />

            <h6>Peso promedio: {Math.round(totalAverageWeight)}</h6>
            <h6>Altura promedio: {Math.round(totalAvarageHeight)}</h6>
        </>
    )
}
