import React from "react";
import Termek from "./Termek";

// 'Termekek' komponens definiálása, amely egy prop-ot kap: 'termekLista'
export default function Termekek({ termekLista }) {
  return (
    <div className="container"> {/* Konténer az elrendezéshez */}
      <div className="row"> {/* Bootstrap rács rendszerének használata */}
        {termekLista.map((kartya, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4"> {/* Oszlopbeállítások különböző méretű képernyőkhöz és margó hozzáadása */}
            <Termek kartya={kartya} />
          </div>
        ))}
      </div>
    </div>
  );
}


