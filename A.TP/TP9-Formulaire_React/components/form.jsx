import "./form.css"



export default function Form(){
    return (
        <div class="Container">
            <form>
                <div>
                <label htmlFor="name" class="UserNameForm">
                    UserName :
                </label>
                <input type="text" id="name" class="UserNameInput" />
                </div>
            </form>
        </div>
    )
}