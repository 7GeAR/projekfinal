/* eslint-disable jsx-a11y/anchor-is-valid */
import bannerImage from "../assets/img/banner-image.jpg";
export default function Banner()
{
    return(
        <div className="banner-shadow">
                <div className="banner">
                <div className="carousel slide" id="myCarousel">
                    {/* Carousel items */}
                    <div className="carousel-inner">
                    <div className="item active">
                        <img src={bannerImage} alt="" />
                        <div className="carousel-caption">
                        <div className="social-icons">
                            <ul>
                            <li><a href="#"><i className="fw-icon-facebook icon" /></a></li>
                            <li><a href="#"><i className="fw-icon-twitter icon" /></a></li>
                            <li><a href="#"><i className="fw-icon-linkedin icon" /></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    )
}