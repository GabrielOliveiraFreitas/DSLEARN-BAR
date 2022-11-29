'use strict';

// COUVERT
let couvert = 4;

// VALOR DOS PRODUTOS
const cervejaValue = 5;
const refrigeranteValue = 3;
const espetinhoValue = 7;

// FEMININO
const fIngresso = 8;
const fCerveja = 3;
const fEspetinho = 1;
const fRegrigerante = 0;

// EQUAÇÃO DE CONSUMO FEMININO
let fConsumo = (refrigeranteValue * fRegrigerante) + (cervejaValue * fCerveja) + (espetinhoValue * fEspetinho) + fIngresso + couvert;

if (fConsumo > 30) {
    fConsumo = fConsumo - 4;
    console.log(fConsumo);
} else console.log(fConsumo);

// MASCULINO
const mIngresso = 10;
const mCerveja = 7;
const mEspetinho = 2;
const mRegrigerante = 1;

// EQUAÇÃO DE CONSUMO MASCULINO
let mConsumo = (refrigeranteValue * mRegrigerante) + (cervejaValue * mCerveja) + (espetinhoValue * mEspetinho) + mIngresso + couvert;

if (mConsumo > 30) {
    mConsumo = mConsumo - 4;
    console.log(mConsumo);
} else console.log(fConsumo);
