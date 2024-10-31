import React, {useContext} from "react";
import Button from "./Button"; // Button komponens importálása
import { KosarContext } from "../Context/KosarContext";


export default function KosarTermek({ termek }) {
    const{csokkentes,noveles,torles}=useContext(KosarContext);
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


