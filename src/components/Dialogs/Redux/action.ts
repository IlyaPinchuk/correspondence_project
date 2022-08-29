import {IMessageAction, IMessageChangeAction} from "../../../Models/interfaces";

export const NEW_MESSAGE = 'NEW-MESSAGE';
export const SEND_MESSAGE = 'SEND-MESSAGE';
//
// export interface IMessageAction {
//     type: typeof SEND_MESSAGE
// }
//
// export interface IMessageChangeAction {
//     type: typeof NEW_MESSAGE,
//     newMessageBody: string
// }


export const sendMessage = (): IMessageAction => ({type: SEND_MESSAGE});
export const onMessageChange = (text: string): IMessageChangeAction => ({type: NEW_MESSAGE, newMessageBody: text});

