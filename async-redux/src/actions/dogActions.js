import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const fetchStart = () => {
    return({type:FETCH_START})
}
export const fetchSuccess = (data) => {
    return({type:FETCH_SUCCESS, payload:data})
}

export const fetchFail = (err) => {
    return({type:FETCH_FAIL, payload:err})
}

export const getDogs = (breed) => {
    return (dispatch) => {
        dispatch(fetchStart())

        axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then((res) => {
            dispatch(fetchSuccess(res.data.message))
        })
        .catch((err) => {
            dispatch(fetchFail(err))
        })
    }
}