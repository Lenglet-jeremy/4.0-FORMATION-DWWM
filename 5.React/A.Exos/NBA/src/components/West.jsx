export default function West(props){
    return (
        <>
        <div className="Card">
            <p>CITY : <span class="CardTextValues">{props.Name}</span></p>
            <p>NAME : <span class="CardTextValues">{props.City}</span></p>
            <img src={props.Logo} alt="" />
        </div>
        </>
    );
}