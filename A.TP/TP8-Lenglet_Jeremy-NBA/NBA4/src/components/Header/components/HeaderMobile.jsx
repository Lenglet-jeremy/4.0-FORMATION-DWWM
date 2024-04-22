import styles from "./HeaderMobile.module.scss"

export default function HeaderMobile (){
    return (
        <ul className={`p-20 ${styles.container}`}> 
            <li>All</li>
            <li>West</li>
            <li>East</li>
        </ul>
    )
}