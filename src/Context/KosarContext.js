import {  createContext, useState } from "react";
import { termekLista } from "../TermekAdatok";

export const KosarContext=createContext("");
export const KosarProvider=({children})=>{
   
  // Kosár állapotának nyomon követése
  const [kosar, setKosar] = useState([]);
 
     // Termék hozzáadása a kosárhoz
  function kosarbaRak(termek) {

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
  function noveles(termek){
    setKosar(
      kosar.map((t) =>
        t.id === termek.id ? { ...t, mennyiseg: t.mennyiseg + 1 } : t
      )
    );
  };

  // Mennyiség csökkentése
  function csokkentes(termek){
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
  function torles(termek){
    setKosar(kosar.filter((t) => t.id !== termek.id));
  };


return (
    <KosarContext.Provider value={{termekLista, kosar, kosarbaRak, noveles, csokkentes,torles}}>
        {children}
    </KosarContext.Provider>
)
}