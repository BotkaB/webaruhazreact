import React, {useContext} from "react";
import KosarTermek from "./KosarTermek";
import { KosarContext } from "../Context/KosarContext";


export default function Kosar() {

  const {kosar, noveles, csokkentes, torles}=useContext(KosarContext);
  // Végösszeg kiszámítása két tizedesjegyre kerekítve
  const vegosszesen = kosar.reduce(
    (osszes, termek) => osszes + termek.price * termek.mennyiseg,
    0
  ).toFixed(2);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Kép</th>
          <th>Termék</th>
          <th>Ár</th>
          <th>Mennyiség</th>
          <th>Összesen</th>
          <th>Művelet</th>
        </tr>
      </thead>
      <tbody>
        {/* A kosárban lévő termékek megjelenítése */}
        {kosar.map((termek, index) => (
          <KosarTermek
            key={index}
            termek={termek}
            noveles={noveles}
            csokkentes={csokkentes}
            torles={torles}
          />
        ))}
        <tr>
          <td colSpan="4">Végösszesen</td> {/* Oszlopok összefogása a végösszeg sorhoz. Ez biztosítja, hogy a "Végösszesen" szöveg szépen igazodjon, és ne legyen elválasztva a végösszeg értékétől. */}
          <td>{vegosszesen} Ft</td> {/* Végösszeg megjelenítése */}
        </tr>
      </tbody>
    </table>
  );
}
