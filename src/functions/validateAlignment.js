export const validateAlignment = (
  props,
  team,
  cantBad,
  cantGood,
  setCantBad,
  setTeam,
  setCantGood
) => {
  let message = "";
  if (props.biography.alignment === "bad" && team.length < 6 && cantBad < 3) {
    setCantBad(cantBad + 1);
    setTeam([...team, props]);
    // toast('¡Personaje agregado al equipo!');
    return (message = "¡Personaje agregado al equipo!");
  } else if (
    props.biography.alignment === "good" &&
    team.length < 6 &&
    cantGood < 3
  ) {
    setCantGood(cantGood + 1);
    setTeam([...team, props]);
    // toast("¡Personaje agregado al equipo!");
    return (message = "¡Personaje agregado al equipo!");
  } else if (team.length === 6) {
    return (message = "¡el equipo ya esta completo!");
  }
};
