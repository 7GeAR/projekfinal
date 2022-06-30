/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar ()
{
    return(
        <div className="site-header">
            <div className="logo">
            <h1>your name</h1>
            </div>
            <div className="menu">
            <div className="navbar">
                <a className="btn btn-navbar" href="#" data-toggle="collapse" data-target=".nav-collapse">
                <i className="fw-icon-th-list" />
                </a>
                <div className="nav-collapse collapse">
                <ul className="nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#portofolio">Portfolio</a></li>
                    <li className="no-border-right"><a href="#contact">Contact</a></li>
                </ul>
                </div>{/*/.nav-collapse */}
            </div>
            <div className="mini-menu">
                <label>
                <select className="selectnav">
                    <option value="#" selected>Home</option>
                    <option value="#">About</option>
                    <option value="#">→ Another action</option>
                    <option value="#">→ Something else here</option>
                    <option value="#">→ Another action</option>
                    <option value="#">→ Something else here</option>
                    <option value="#">Services</option>
                    <option value="#">Work</option>
                    <option value="#">Contact</option>
                </select>
                </label>
            </div>
            </div>
        </div>
    )
}