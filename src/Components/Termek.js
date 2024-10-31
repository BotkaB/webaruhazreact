import React, { useContext } from "react";
import Button from "./Button"; 
import { KosarContext } from "../Context/KosarContext";

export default function Termek({ kartya}) {
    const {kosarbaRak}=useContext(KosarContext);
    return (
        <div className="card h-100"> {/* A kártya stílusa és szerkezete */}
            <h5 className="card-header">{kartya.title}</h5> {/* Kártya fejléc, amely a termék címét jeleníti meg */}
            <div className="card-body d-flex flex-column"> {/* A kártya teste, amely rugalmas elrendezést alkalmaz */}
                <img
                    src={kartya.image} /* Termékkép forrása */
                    className="img-fluid" /* Termékkép megjelenítése rugalmas méretezéssel és arányok megtartásával */
                    style={{ height: "100px", width: "100%", objectFit: "contain" }}
                    alt={kartya.title} /* Alternatív szöveg a képhez */
                /> {/* Önzáró elem */}
             
                <div className="mt-auto"> {/* Alsó margó hozzáadása az utolsó elemhez, hogy az alsó részhez igazodjon */}
                    <h2 className="card-text">Ár: {kartya.price}</h2> {/* Termék árának megjelenítése */}
                    <Button className="btn btn-primary kosar" onClick={() => kosarbaRak(kartya)}>
                        Kosárba tesz {/* Gyermek elemként megjelenített tartalom, például szöveg vagy ikon */}
                    </Button>
                </div>
            </div>
        </div>
    );
}


