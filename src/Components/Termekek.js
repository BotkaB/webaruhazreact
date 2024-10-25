import React from "react";
import Termek from "./Termek";

// 'Termekek' komponens definiálása, amely két prop-ot kap: 'termekLista' és 'katt'
export default function Termekek({ termekLista, katt }) {
  return (
    <div className="container"> {/* Konténer az elrendezéshez */}
      <div className="row"> {/* Bootstrap rács rendszerének használata */}
        {termekLista.map((kartya, index) => (
          <div key={index} className="col-md-3 col-sm-6 col-xs-12 mb-4"> {/* Oszlopbeállítások különböző méretű képernyőkhöz és margó hozzáadása */}
            <Termek kartya={kartya} katt={katt} /> {/* Termék komponens meghívása a megfelelő prop-okkal */}
          </div>
        ))}
      </div>
    </div>
  );
}


