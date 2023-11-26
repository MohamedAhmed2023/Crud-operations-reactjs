import { Link } from 'react-router-dom';
import "./NavBar.css"
import menu from "../../images/menu (1).png"
function NavBar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand" href="#">CRUD</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img class="navbar-toggler-icon" src={menu}></img>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to={'/'} href="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="Products" >All products</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'Products/add'}>Add Prodects </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default NavBar;