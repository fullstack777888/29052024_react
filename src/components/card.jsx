function Card(props) {

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        width: '300px',
        margin: '20px',
    };


    return (
        <div style={cardStyle}>
            {
                props.imgSource ? <img style={{
                    width: '200px', height: '200px'
                }} src={props.imgSource} alt={props.alt}></img>
                    : <p>no image</p>
            }
            <h4>{props.title}</h4>
            <p>{props.type}</p>
            <p><b>price {props.price}</b></p>
        </div >
    )
}

export default Card;

