import React, { useState } from "react";
import Kosar from "./Kosar";
import Termekek from "./Termekek";
import { termekLista } from "../TermekAdatok";

// 'KosarKezelo' komponens definiálása
export default function KosarKezelo() {
  // Kosár állapotának nyomon követése
  const [kosar, setKosar] = useState([]);

  // Termék hozzáadása a kosárhoz
  const katt = (termek) => {
    const letezoTermek = kosar.find((t) => t.id === termek.id);
    if (letezoTermek) {
      setKosar(
        kosar.map((t) =>
          t.id === termek.id ? { ...t, mennyiseg: t.mennyiseg + 1 } : t
        )
      );
    } else {
      setKosar([...kosar, { ...termek, mennyiseg: 1 }]);
    }
  };

  // Mennyiség növelése
  const noveles = (termek) => {
    setKosar(
      kosar.map((t) =>
        t.id === termek.id ? { ...t, mennyiseg: t.mennyiseg + 1 } : t
      )
    );
  };

  // Mennyiség csökkentése
  const csokkentes = (termek) => {
    if (termek.mennyiseg === 1) {
      torles(termek);
    } else {
      setKosar(
        kosar.map((t) =>
          t.id === termek.id ? { ...t, mennyiseg: t.mennyiseg - 1 } : t
        )
      );
    }
  };

  // Termék törlése a kosárból
  const torles = (termek) => {
    setKosar(kosar.filter((t) => t.id !== termek.id));
  };

  return (
    <div className="App-container">
      <div className="termekek">
        {/* Termékek komponens meghívása 'katt' prop-pal */}
        <Termekek termekLista={termekLista} katt={katt} />
      </div>
      <aside className="kosar-oldalsav">
        {/* Kosár komponens meghívása és a megfelelő prop-ok átadása */}
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
