import { OneGame } from "./types";

export const gameStorageKey = 'localGames';

export const getAllGames = () => {
    return JSON.parse(localStorage.getItem(gameStorageKey) || '[]');
}

export const addNewGame = (game: OneGame) => {
    const currentGames = JSON.parse(localStorage.getItem(gameStorageKey) || '[]');

    console.log(currentGames);

    localStorage.setItem(gameStorageKey, JSON.stringify([...(currentGames || []), game]));
}

export const formatDate = (date: Date) => {
    return (`${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
}
