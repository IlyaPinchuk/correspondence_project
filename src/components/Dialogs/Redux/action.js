export const NEW_MESSAGE = 'NEW-MESSAGE';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessage = () => ({type: SEND_MESSAGE});
export const onMessageChange = (text) => ({type: NEW_MESSAGE, newMessageBody: text});

