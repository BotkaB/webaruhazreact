import React from "react";
import Button from "./Button"; // Button komponens importálása

// 'Termek' komponens definiálása, amely két prop-ot kap: 'kartya' és 'katt'
export default function Termek({ kartya, katt }) {
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
                {/* <p className="card-text">{kartya.description}</p> */}
                <div className="mt-auto"> {/* Alsó margó hozzáadása az utolsó elemhez, hogy az alsó részhez igazodjon */}
                    <h2 className="card-text">Ár: {kartya.price}</h2> {/* Termék árának megjelenítése */}
                    <Button className="btn btn-primary kosar" onClick={() => katt(kartya)}>
                        Kosárba tesz {/* Gyermek elemként megjelenített tartalom, például szöveg vagy ikon */}
                    </Button>
                </div>
            </div>
        </div>
    );
}

/*
Magyarázat:
- A `Termek` komponens két prop-ot kap: `kartya` és `katt`.
- A `kartya` tartalmazza a termék adatait, beleértve a címét, képét és árát.
- A `katt` egy függvény, amely kezel egy kattintási eseményt, például amikor a felhasználó a "Kosárba tesz" gombra kattint.
- Az `img-fluid` osztály biztosítja, hogy a kép rugalmasan méreteződjön és megőrizze az arányait.
- Az `mt-auto` osztály alsó margót ad az elemhez, hogy a tartalom az alsó részhez igazodjon.
*/
