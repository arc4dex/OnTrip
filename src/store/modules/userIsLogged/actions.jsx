import { IS_LOGGED } from "./actionsTypes";

export const changeUseState = (value) => ({
    type: IS_LOGGED,
    value
})