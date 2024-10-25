import React from "react";

// 'Termek' komponens definiálása, amely két prop-ot kap: 'kartya' és 'katt'
export default function Termek({ kartya, katt }) {
  return (
    // A kártya stílusa és szerkezete
    <div className="card h-100">
      {/* Kártya fejléc, amely a termék címét jeleníti meg */}
      <h5 className="card-header">{kartya.title}</h5>
      {/* A kártya teste, amely rugalmas elrendezést alkalmaz */}
      <div className="card-body d-flex flex-column">
        {/* Termékkép megjelenítése rugalmas méretezéssel és arányok megtartásával */}
        <img
          src={kartya.image}
          className="img-fluid"
          style={{ height: "100px", width: "100%", objectFit: "contain" }}
          alt={kartya.title}
        />
      
        {/* Alsó margó hozzáadása az utolsó elemhez, hogy az alsó részhez igazodjon */}
        <div className="mt-auto">
          {/* Termék árának megjelenítése */}
          <h2 className="card-text">Ár: {kartya.price}</h2>
          {/* Kosárba tesz gomb, amely kattintáskor meghívja a 'katt' függvényt */}
          <button className="btn btn-primary kosar" onClick={() => katt(kartya)}>
            Kosárba tesz
          </button>
        </div>
      </div>
    </div>
  );
}
