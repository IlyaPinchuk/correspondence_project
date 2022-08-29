import {
    ADD_POST,
    DELETE_POST,
    IS_OWNER,
    isOwner,
    SET_PHOTO,
    SET_STATUS,
    SET_USER_PROFILE,
    UPDATE_NEW_POST_TEXT
} from "./action";


let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi. how are you?',
            count: 15,
            img: 'data:image/jpeg;base64,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'
        },
        {
            id: 2,
            message: 'its my first post',
            count: 20,
            img: 'data:image/png;base64,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'
        }],
    newPostText: '',
    profile: {
        fullName: '',
        photos: {
            small: null,
        },
        contacts: {
            facebook: null,
            twitter: null,
            instagram: null,
            github: null,

        },
        userId: null,
    },
    status: '',
    photo: null,
    isOwner: false,

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPostText: '',
                posts: [
                    ...state.posts,
                    {id: 5, message: state.newPostText, count: 0, img: ''}
                ]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case IS_OWNER: {
            return {
                ...state,
                isOwner: action.owner


            }

        }
        default:
            return state;
    }
};


export default profileReducer;