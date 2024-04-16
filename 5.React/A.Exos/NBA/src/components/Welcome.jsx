export default function Welcome(props){
    const Connected = props.User ? true : false;
    return (
        <>
            <div>
                {Connected ? ( 
                    <h2 className="Welcome">Welcome {props.User}</h2> 
                ) : ( 
                    <h2 className="Welcome">Vous devez être connecté</h2> 
                )}

            </div>
        </>
    );
}