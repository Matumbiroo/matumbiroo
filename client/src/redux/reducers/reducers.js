import {
    SPOTIFY_TOKENS, SPOTIFY_ME_BEGIN, SPOTIFY_ME_SUCCESS, SPOTIFY_ME_FAILURE
} from '../actions/actions';



const initialState = {
    accessToken: null,
    refreshToken: null,
    matumUser: {
        isAuthenticated: false,
        user: {
            email:"",
            username: ""
        },
        authError: {
            signup: "",
            login: "",
            verify: ""
        }
    },
    user: {
        loading: false,
        country: null,
        display_name: null,
        email: null,
        external_urls: {},
        followers: {},
        href: null,
        id: null,
        images: [],
        product: null,
        type: null,
        uri: null,
    },
    recentlyPlayed: [],
    audioFeatures: [],
    currentSong: {
        name: null,
        artists: [{name: ""}],
        gifs: [{images: {
            fixed_height: {
                webp: ""
            }
        }}]
    },
    currentSongAudio: [],
    searchedSong: {
        gifs: [{images: {
            fixed_height: {
                webp: ""
            }
        }}]
    }
};

const mainReducer = function(state = initialState, action) {
    switch (action.type) {
        // when we get the tokens... set the tokens!
        case SPOTIFY_TOKENS:
            const {accessToken, refreshToken} = action;
            return Object.assign({}, state, {accessToken, refreshToken});

        // set our loading property when the loading begins
        case SPOTIFY_ME_BEGIN:
            return Object.assign({}, state, {
                user: Object.assign({}, state.user, {loading: true})
            });

        // when we get the data merge it in
        case SPOTIFY_ME_SUCCESS:
            return Object.assign({}, state, {
                user: Object.assign({}, state.user, action.data, {loading: false})
            });

        // currently no failure state :(
        case SPOTIFY_ME_FAILURE:
            return state;
        case "SET_RECENTLY_PLAYED":
            return {
                ...state,
                recentlyPlayed: action.recent,

            };
        case "SET_AUDIO_FEATURES":
            return {
                ...state,
                audioFeatures: action.audioFeatures
            };
        case "SET_CURRENT_SONG":
            return {
                ...state,
                currentSong: action.currentSong,
            };
        case "CLEAR_GIFS":
            return {
                ...state,
                currentSong: {
                    ...state.currentSong,
                    gifs: [{images: {
                        fixed_height: {
                            webp: ""
                        }
                    }}]
                }
            };
        case "AUTHENTICATE":
            return {
                ...state.matumUser,
                isAuthenticated: action.isValid,
                user: action.user,
                authError: {
                    ...initialState.matumUser.authError
                }
            }
        case "LOGOUT":
            return {
                ...initialState.matumUser
            }
        case "AUTH_ERROR":
            return {
                ...state.matumUser,
                authError: {
                    ...state.matumUser.authError,
                    ...action.err
                }
            }
        default:
            return state;
    }
};

export default mainReducer;