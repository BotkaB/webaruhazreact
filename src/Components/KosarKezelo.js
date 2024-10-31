import React, { useContext } from "react";
import Kosar from "./Kosar";
import Termekek from "./Termekek";
import { KosarContext } from "../Context/KosarContext"; // KosarContext importálása

// 'KosarKezelo' komponens definiálása
export default function KosarKezelo() {
  const { termekLista, kosar, noveles, csokkentes, torles, kosarbaRak } = useContext(KosarContext); // KosarContext használata a szükséges értékek eléréséhez

  return (
    <div className="App-container">
      <div className="termekek">
        {/* Termékek komponens meghívása és a contextből származó terméklista átadása */}
        <Termekek termekLista={termekLista} katt={kosarbaRak} />
      </div>
      <aside className="kosar-oldalsav">
        {/* Kosár komponens meghívása és a contextből származó értékek és függvények átadása */}
        <Kosar
          kosar={kosar}
          noveles={noveles}
          csokkentes={csokkentes}
          torles={torles}
        />
      </aside>
    </div>
  );
}

/*
Magyarázat:
- A `KosarKezelo` komponens a `KosarContext` használatával éri el a szükséges adatokat és függvényeket (termekLista, kosar, noveles, csokkentes, torles, kosarbaRak).
- A `Termekek` komponens a contextből származó `termekLista`-t és a `kosarbaRak` függvényt kapja propként.
- A `Kosar` komponens a contextből származó `kosar`, `noveles`, `csokkentes`, és `torles` értékeket és függvényeket kapja propként.
*/
