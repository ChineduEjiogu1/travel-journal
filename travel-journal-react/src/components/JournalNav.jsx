import '/src/JournalNav.css'
import webEarth from '/src/assets/web-earth.svg'

function JournalNav(){
    return (
        <>
            <nav>
                <img src={webEarth} alt="" />
                <h6>My Travel Journal</h6>
            </nav>
        </>
    )
}

export default JournalNav;