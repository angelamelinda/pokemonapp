export const POKEMON_PAGE_LIMIT = 20;

export const API_BASE_URL = "https://pokeapi.co/api/v2";

export const API_URL = {
  ALL_POKEMON:
    API_BASE_URL + "/pokemon?offset=:offset&limit=" + POKEMON_PAGE_LIMIT + "/",
  DETAIL: API_BASE_URL + "/pokemon/:id/",
  TYPE: API_BASE_URL + "/type/",
  TYPE_DETAIL: API_BASE_URL + "/type/:name/"
};

export const COLOR = {
  WHITE: "#FFF",
  SUSHI: "#729f3f",
  SHAKE_SPEARE: "#53a4cf",
  BURNT_SIENNA: "#f16e57",
  CUPID: "#fdb9e9",
  MINE_SHAFT: "#212121",
  PUMPKIN: "#fd7d24",
  CONCRETE: "#F2F2F2",
  RED: "#E00"
};

export const TYPE_CONFIG = {
  bug: {
    color: COLOR.WHITE,
    background: [COLOR.SUSHI, COLOR.SUSHI]
  },
  dragon: {
    color: COLOR.WHITE,
    background: [COLOR.SHAKE_SPEARE, COLOR.BURNT_SIENNA]
  },
  fairy: {
    color: COLOR.MINE_SHAFT,
    background: [COLOR.CUPID, COLOR.CUPID]
  },
  fire: {
    color: COLOR.WHITE,
    background: [COLOR.PUMPKIN, COLOR.PUMPKIN]
  },
  ghost: {
    color: COLOR.MINE_SHAFT,
    background: ["#7b62a3", "#7b62a3"]
  },
  ground: {
    color: COLOR.MINE_SHAFT,
    background: ["#f7de3f", "#ab9842"]
  },
  normal: {
    color: COLOR.MINE_SHAFT,
    background: ["#a4acaf", "#a4acaf"]
  },
  psychic: {
    color: COLOR.WHITE,
    background: ["#f366b9", "#f366b9"]
  },
  steel: {
    color: COLOR.MINE_SHAFT,
    background: ["#9eb7b8", "#9eb7b8"]
  },
  dark: {
    color: COLOR.WHITE,
    background: ["#707070", "#707070"]
  },
  electric: {
    color: COLOR.MINE_SHAFT,
    background: ["#eed535", "#eed535"]
  },
  fighting: {
    color: COLOR.WHITE,
    background: ["#d56723", "#d56723"]
  },
  flying: {
    color: COLOR.MINE_SHAFT,
    background: ["#3dc7ef", "#bdb9b8"]
  },
  grass: {
    color: COLOR.MINE_SHAFT,
    background: ["#9bcc50", "#9bcc50"]
  },
  ice: {
    color: COLOR.MINE_SHAFT,
    background: ["#51c4e7", "#51c4e7"]
  },
  poison: {
    color: COLOR.WHITE,
    background: ["#b97fc9", "#b97fc9"]
  },
  rock: {
    color: COLOR.WHITE,
    background: ["#a38c21", "#a38c21"]
  },
  water: {
    color: COLOR.WHITE,
    background: ["#4592c4", "#4592c4"]
  }
};

export const ERROR_MESSAGE = {
  DEFAULT: "Sorry, something went wrong! Please try again!",
  POKEMON_NOT_FOUND: "Sorry, pokemon not found!"
};
