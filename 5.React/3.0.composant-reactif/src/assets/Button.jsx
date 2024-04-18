export default function Button({propsButton}) {
    return <button 
            onClick={() => propsButton("Test")} 
            className="btn btn-reverse-primary">Save</button>;
}