import { useContext, useEffect } from "react";
import { CharacterCard } from "./components/CharacterCard";
import { InputSearch } from "./components/InputSearch";
import { NavBar } from "./components/NavBar";
import { Spinner } from "./components/Spinner";
import { TotalPower } from "./components/TotalPower";
import { TeamContext } from "./context/TeamContext";

function App() {
  const { team, render, characters, loading } = useContext(TeamContext);

  useEffect(() => {}, [render]);

  return (
    <>
      <NavBar />

      <div className="container">
        <InputSearch />
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {characters?.map((character) => {
              return (
                <div className="col-md-3 col-sm-12">
                  <CharacterCard key={character.id} {...character} />
                </div>
              );
            })}
          </div>
        )}
        {/* Equipo seleccionado */}
        {team.length > 0 ? (
          <>
            <h2 className="text-center text-success mt-4">
              Estadisticas de tu equipo
            </h2>
            <TotalPower />
            <div className="row">
              {team?.map((tm) => {
                return (
                  <div className="col-md-3 col-sm-12" key={tm.id}>
                    <CharacterCard
                      key={tm.id}
                      {...tm}
                      delete={true}
                      power={true}
                    />
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default App;
