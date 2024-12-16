import {Link} from 'react-router-dom'
const Navbar =  ()=>{
    return(
        <>
<navbar>
    <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/">Contact</Link></li>

    </ul>
</navbar>
    </>
    )
}
export default Navbar