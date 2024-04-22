import styles from "./HeaderMobile.module.scss"


export default function HeaderMobile ({changeView, setShowMenu}){
    return (
        <>
            <ul className={`p-20 ${styles.container}`}> 
                <li onClick={() => {changeView("all"); setShowMenu(false)}}>All</li>
                <li onClick={() => {changeView("West"); setShowMenu(false)}}>West</li>
                <li onClick={() => {changeView("East"); setShowMenu(false)}}>East</li>
            </ul>
        </>
    )
}