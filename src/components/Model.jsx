
const Model = ({glassesModel}) => {
    return (
        <div className="mt-5 position-relative">
            <img src="./glassesImage/model.jpg" className="model" alt="model img" />
            <img src={glassesModel.url} className="glass d-inline-block position-absolute start-50 top-25 translate-middle-x" alt="glasses img" />

            <div className="info position-absolute start-50 bottom-0 bg-primary text-white translate-middle-x" style={{width: 370}}>
                <h1 className="fs-4 fw-bold">{glassesModel.name}</h1>
                <p>{glassesModel.desc}</p>
                <span>{glassesModel.price}</span>
            </div>
        </div>
    )
}

export default Model
