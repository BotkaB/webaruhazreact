import React, { useContext } from "react";
import KosarTermek from "./KosarTermek";
import { KosarContext } from "../Context/KosarContext"; // KosarContext importálása

// 'Kosar' komponens definiálása
export default function Kosar() {
  const { kosar, noveles, csokkentes, torles } = useContext(KosarContext);

  const vegosszesen = kosar.reduce(
    (osszes, termek) => osszes + termek.price * termek.mennyiseg,
    0
  ).toFixed(2);

  return (
    <div className="kosar-container">
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
          {kosar.map((termek, index) => (
            <KosarTermek
              key={index}
              termek={termek}
              noveles={noveles}
              csokkentes={csokkentes}
              torles={torles}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Végösszesen</td>
            <td>{vegosszesen} Ft</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
