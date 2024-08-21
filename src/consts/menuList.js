import {PATHS} from "../consts/paths"

const PUBLIC_MENU_LIST = [
    {
        to: PATHS.home,
        text: 'HOME'
    },
    {
        to: `/${PATHS.signIn}`,
        text: 'SIGN IN'
    },
    {
        to: `/${PATHS.signUp}`,
        text: 'SIGN UP'
    },    
]

const PRIVATE_MENU_LIST = [
    {
        to: PATHS.home,
        text: 'HOME'
    },
    // {
    //     to: `/${PATHS.signIn}`,
    //     text: 'SIGN IN'
    // },
    // {
    //     to: `/${PATHS.signUp}`,
    //     text: 'SIGN UP'
    // },
    {
        to: `/${PATHS.game}`,
        text: 'GAME'
    }
]

export {PUBLIC_MENU_LIST, PRIVATE_MENU_LIST}