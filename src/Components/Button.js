import React from "react";

// 'Button' komponens definiálása, amely három prop-ot kap: 'onClick', 'children' és 'className'
export default function Button({ onClick, children, className }) {
  return (
    // Gomb elem létrehozása a kapott osztálynévvel és kattintási eseménykezelővel
    <button className={className} onClick={onClick}>
      {/* Gyermek elemek megjelenítése a gomb belsejében */}
      {children} 
      {/* Gyermek elemként megjelenített tartalom, például szöveg vagy ikon */}
    </button>
  );
}

/* 
Magyarázat:
A Button komponens három prop-ot kap:
1. onClick: egy függvény, amelyet a kattintási esemény kezel.
2. children: a gomb belsejében megjelenő tartalom (pl. szöveg, ikon stb.).
3. className: a gomb stílusának meghatározására szolgáló osztálynév.

A children prop a JSX egyik beépített tulajdonsága, amely lehetővé teszi, hogy a komponens belsejében található elemeket jelenítsük meg. Ez hasznos, ha a gomb belsejében változó tartalmat szeretnénk megjeleníteni, például különböző szövegeket vagy ikonokat.
*/
