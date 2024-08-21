// PAGES----------------
import { NotFound } from "../pages/NotFound/NotFound"
import {SignIn} from "../pages/SignIn/SignIn"
import {SignUp} from "../pages/SignUp/SignUp"
import {Game} from "../pages/Game/Game"
// consts
import { PATHS } from "../consts/paths"

// public routes ----------------
export const PUBLIC_ROUTES = [
    {
        path: PATHS.signUp,
        Element: SignUp,
    },
    {
        path: PATHS.signIn,
        Element: SignIn,
    },
    {
        path: PATHS.notFound,
        Element: NotFound,
    }
]

// private routes ----------------
export const PRIVATE_ROUTES = [
    {
        path: PATHS.game,
        Element: Game,
    },
    // {
    //     path: PATHS.signUp,
    //     Element: SignUp,
    // },
    // {
    //     path: PATHS.signIn,
    //     Element: SignIn,
    // },
    {
        path: PATHS.notFound,
        Element: NotFound,
    }
]