import "../Card.css"
import Div2 from "./Div2"

const Card = (props)=>{
    return(
        <>
        <div className="container" style={{background:props.color}}>
        <div className="div1">
        <h3>{props.date}</h3>
        <p className="casestudy">{props.box}</p>
        <h1>{props.heading}</h1>
        <h3>{props.subheading}</h3>
        </div>
        <Div2 div2src={props.src} div2arrowsrc={props.arrowsrc} />
        {/* <div className="div2">
            <img src={props.src} alt="logoimg"></img>
            <img src={props.arrowsrc} alt="logoimg"></img>
        </div> */}
        </div>
        </>

    )
}
export default Card