import dataPackage from "../../package.json";
 
const initialState = {
    name: ""
}

const initalNameCookie =`studentName-${dataPackage.name}`;

export const userStudentReducer = (state = initialState, action) => {
    switch (action.type) {
        case "[auth]UpdateNameUser": // Actualiza el usuario
            const search = new URLSearchParams(location.search)
            const { name } = action
            document.cookie = `${initalNameCookie}=${search.get("name") || getCookieUserName()}; max-age=2000; path=/;`;
            return {
                ...state,
                name
            }
        default:
            return state;
    }
}

export const updateNameUserStudent = (name) => ({
    type: '[auth]UpdateNameUser',
    name
});

export const getCookieUserName = () => {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + initalNameCookie.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : "Estudiante 01";
}