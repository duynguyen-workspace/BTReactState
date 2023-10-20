import React from 'react'

const GlassesList = (props) => {
    const {glassList, updateGlassesModel} = props

    return (
        <div className="container mt-5 px-5">
            <div className='row'>
                {glassList.map(glasses => {
                    return (
                        <div className='col-2' key={glasses.id}>
                            <button className='btn' onClick={() => {updateGlassesModel(glasses)}}>
                                <img src={glasses.url} style={{width: 160}} alt="" />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default GlassesList
