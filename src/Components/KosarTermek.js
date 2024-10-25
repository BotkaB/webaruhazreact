import React from "react";

// 'KosarTermek' komponens definiálása, amely négy prop-ot kap: 'termek', 'noveles', 'csokkentes' és 'torles'
export default function KosarTermek({ termek, noveles, csokkentes, torles }) {
  return (
    <tr>
      <td>
        {/* Termékkép megjelenítése kicsiben, arányok megtartásával */}
        <img
          src={termek.image}
          alt={termek.title}
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
      </td>
      <td>{termek.title}</td> {/* Termék neve */}
      <td>{termek.price} Ft</td> {/* Termék ára */}
      <td>
        {/* Mennyiség csökkentése gomb */}
        <button onClick={() => csokkentes(termek)}> - </button>
        {/* Jelenlegi mennyiség megjelenítése */}
        <span>{termek.mennyiseg}</span>
        {/* Mennyiség növelése gomb */}
        <button onClick={() => noveles(termek)}> + </button>
      </td>
      <td>{(termek.price * termek.mennyiseg).toFixed(2)} Ft</td> {/* Összesen oszlop kerekítve */}
      <td>
        {/* Termék törlése gomb */}
        <button onClick={() => torles(termek)}> Törlés </button>
      </td>
    </tr>
  );
}
