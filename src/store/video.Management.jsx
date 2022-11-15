import { pathsVideo } from "../routes/pathsVideo";

const initialState = {
    urlVideo1: "",
    urlVideo2: ""
}

export const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "[event]VideoAllUpdated": // Actualiza el primer y segundo video
            const result1 = pathsVideo.filter(
                e => (e.name === action.namePage)
            )
            const { url:url1 } = result1.length ? result1[0] : { url: '' }

            const result2 = pathsVideo.filter(
                e => (e.name === action.nameSlide)
            )
            const { url:url2 } = result2.length ? result2[0] : { url: '' }
            return {
                ...state,
                urlVideo1: url1,
                urlVideo2: url2
            }
        case "[event]VideoPageUpdated": // Actualiza el video de la pagina
            const resultPage = pathsVideo.filter(
                e => (e.name === action.namePage)
            )
            const { url: urlPage } = resultPage.length ? resultPage[0] : { url: '' }
            return {
                ...state,
                urlVideo1: urlPage
            }
        case "[event]VideoSlideUpdated": // Actualiza el video del slide
            const resultSlide = pathsVideo.filter(
                e => (e.name === action.nameSlide)
            )
            const { url: urlSlide } = resultSlide.length ? resultSlide[0] : { url: '' }
            return {
                ...state,
                urlVideo2: urlSlide
            }
        default:
            return state;
    }
}

export const updateAccessibilityVideos = (page, slide) => ({
    type: page && slide ? '[event]VideoAllUpdated' : (page ? '[event]VideoPageUpdated' : '[event]VideoSlideUpdated'),
    namePage: page ? `video-p${page}-s1-1` : '',
    nameSlide: slide ? `video-p${page}-s1-2` : ''
});
