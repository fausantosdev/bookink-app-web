import './styles.css'

export default () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">devbooking</span>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>    
                </div>
            </div>    
        </div>
    ) 
}