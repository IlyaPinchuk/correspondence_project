import {NEW_MESSAGE, SEND_MESSAGE} from "../components/Dialogs/Redux/action";


export interface IDialogsReducerShape {
    messages: Array<IMessages>,
    dialogs: Array<IDialogs>,
    newMessageText: string
}

export interface IMessages {
    id: number,
    message: string
}

export interface IDialogs {
    id: number,
    name: string
    img: string
}

export interface IMessageAction {
    type: typeof SEND_MESSAGE
}

export interface IMessageChangeAction {
    type: typeof NEW_MESSAGE,
    newMessageBody: string
}

export interface IAuthReducerShape {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    photo: any,
    captchaUrl: string | null
}

export interface IProfileReducerShape {
    posts: Array<IPosts>
    newPostText: string
    status: string
    photo: string | null
    isOwner: boolean
    profile: {
        fullName: string
        userId: number | null
        photos: {
            small: string | null
        }
        contacts: {
            facebook: string | null
            twitter: string | null
            instagram: string | null
            github: string | null
        }
    }
}

export interface IPosts {
    id: number
    message: string
    count: number
    img: string
}

