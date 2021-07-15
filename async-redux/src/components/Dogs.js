import React from 'react'
import { connect } from 'react-redux'
import './dog.css'

const Dogs = ({dogs, isFetching, error}) => {
    
    if (isFetching) {
        return(
            <h2>Loading...</h2>
        )
    }

    if (error) {
        return(
            <h2>We have encountered this error: {error}</h2>
        )
    }

    return(
        <div className='imgContainer'>
            {
                dogs.map((dogSrc, idx) => {
                    return <img src={dogSrc} key={idx} alt='dog' className='img'></img>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dogs: state.dogData,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Dogs);
