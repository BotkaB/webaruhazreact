import React from "react";
import Button from "./Button"; // Button komponens importálása

// 'KosarTermek' komponens definiálása, amely négy prop-ot kap: 'termek', 'noveles', 'csokkentes' és 'torles'
export default function KosarTermek({ termek, noveles, csokkentes, torles }) {
    return (
        <tr>
            <td>
                <img
                    src={termek.image}
                    alt={termek.title}
                    style={{ width: "50px", height: "50px", objectFit: "contain" }} /* Termékkép megjelenítése kicsiben, arányok megtartásával */
                />
            </td>
            <td>{termek.title}</td> {/* Termék neve */}
            <td>{termek.price} Ft</td> {/* Termék ára */}
            <td>
                <Button onClick={() => csokkentes(termek)}> - </Button> {/* Csökkentés gomb */}
                <span>{termek.mennyiseg}</span> {/* Termék mennyisége */}
                <Button onClick={() => noveles(termek)}> + </Button> {/* Növelés gomb */}
            </td>
            <td>{(termek.price * termek.mennyiseg).toFixed(2)} Ft</td> {/* Összesen oszlop kerekítve */}
            <td>
                <Button onClick={() => torles(termek)}> Törlés </Button> {/* Törlés gomb */}
            </td>
        </tr>
    );
}

/*
Magyarázat:
- A `KosarTermek` komponens négy prop-ot kap: `termek`, `noveles`, `csokkentes` és `torles`.
- A `termek` tartalmazza a termék adatait, beleértve a nevét, képét, árát és mennyiségét.
- A `noveles` egy függvény, amely növeli a termék mennyiségét.
- A `csokkentes` egy függvény, amely csökkenti a termék mennyiségét.
- A `torles` egy függvény, amely eltávolítja a terméket a kosárból.
- Az `img` elem kicsiben jeleníti meg a termékképet, megőrizve az arányait.
- A gombok (`Button` komponens) az eseménykezelő funkciókat hívják meg.
*/
