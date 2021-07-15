import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions/dogActions'

const initialState = {
    dogData: [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1023.jpg"
    ],
    isFetching: false,
    error:''
}

export const dogReducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state,
                isFetching: true
            })
        case(FETCH_SUCCESS):
            return({
                ...state,
                isFetching: false,
                dogData: action.payload
            })
        case(FETCH_FAIL): 
            return({
                ...state,
                error:''
            })
        default:
            return({
                ...state
            })
    }
}