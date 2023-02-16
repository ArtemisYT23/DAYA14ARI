const Key = localStorage.getItem('tocken');

//Estados Iniciales
const initialState = {
    Tocken: Key,
    Route: "",
    previewActive: false,
    videoActive: false,
    
}

const TOCKEN_LOGIN_SUCCESS = "TOCKEN_LOGIN_SUCCESS";
const TOCKEN_LOGIN_ERROR = "TOCKEN_LOGIN_ERROR";
const CLEAR_TOCKEN_SESION_CLOSE_SECURITY = "CLEAR_TOCKEN_SESION_CLOSE_SECURITY";
const ACTIVE_PREVIEW_MODAL = "ACTIVE_PREVIEW_MODAL";
const ACTIVE_VIDEO_MODAL = "ACTIVE_VIDEO_MODAL";

export default function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case TOCKEN_LOGIN_SUCCESS:
        case TOCKEN_LOGIN_ERROR:
        case CLEAR_TOCKEN_SESION_CLOSE_SECURITY:
        case ACTIVE_PREVIEW_MODAL:
        case ACTIVE_VIDEO_MODAL:
            return action.payload;
        default:
            return state;
    }
};

//obtener tocken de inicio de sesion 
export const setLoginUserTocken = (tocken, route) => async (dispatch, getState) => {
    const { sesion } = getState();
    localStorage.setItem('tocken', tocken);
    const Key = localStorage.getItem('tocken');
    dispatch({
        type: TOCKEN_LOGIN_SUCCESS,
        payload: { ...sesion, Tocken: Key, Route: route },
    })
};

//Error al obtener tocken de inicio de sesion 
export const setErrorUserTocken = () => async (dispatch, getState) => {
    const { sesion } = getState();
    localStorage.removeItem('tocken');
    dispatch({
        type: TOCKEN_LOGIN_ERROR,
        payload: { ...sesion, Tocken: "", Route: "" }
    })
}

//Eliminar tocken cierre de sesion 
export const setClearTockenInvalidate = () => async (dispatch, getState) => {
    const { sesion } = getState();
    localStorage.removeItem('tocken');
    dispatch({
        type: CLEAR_TOCKEN_SESION_CLOSE_SECURITY,
        payload: { sesion, Tocken: "" },
    })
}

//Activar modal de previsualizacion
export const setActiveModalPreviewHistory = (bool) => async (dispatch, getState) => {
    const { sesion } = getState();
    dispatch({
        type: ACTIVE_PREVIEW_MODAL,
        payload: { ...sesion, previewActive: bool }
    })
}

//Activar modal de video
export const setActiveModalVideoPlay = (bool) => async (dispatch, getState) => {
    const { sesion } = getState();
    dispatch({
        type: ACTIVE_VIDEO_MODAL,
        payload: { ...sesion, videoActive: bool }
    })
}