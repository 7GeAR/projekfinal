/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
export default function Portofolio()
{
    return(
        <div className="portfolio-block" id="portofolio">
                <div className="portfolio-title">
                <h1>portfolio</h1>
                <h2>Integer vitae libero ac risus egestas placerat</h2>
                </div>
                <div className="links">
                <a href="#">Tomdicmt</a>
                <a href="#">Voluptin</a>
                <a href="#">fermentu</a>
                </div>
                <div className="row-fluid">
                <ul className="thumbnails">
                    <li className="no-space">
                    <a href="#" className="circle"><img src= {img1} alt =""/></a>
                    </li>
                    <li>
                    <a href="#" className="circle"><img src={img2} alt =""  /></a>
                    </li>
                    <li>
                    <a href="#" className="circle"><img src={img3} alt ="" /></a>
                    </li>
                    <li>
                    <a href="#" className="circle"><img src={img4} alt ="" /></a>
                    </li>
                    <li>
                    <a href="#" className="circle"><img src={img5} alt ="" /></a>
                    </li>
                    <li>
                    <a href="#" className="circle"><img src={img6} alt =""  /></a>
                    </li>
                    <li>
                    <a href="#" className="circle"><img src={img7} alt =""  /></a>
                    </li>
                </ul>
                </div>
            </div>
    )
}