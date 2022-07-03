/* eslint-disable jsx-a11y/anchor-is-valid */

import img1 from "../src/assets/img/img1.png";
import img2 from "../src/assets/img/img2.png";
import img3 from "../src/assets/img/img3.png";
import img4 from "../src/assets/img/img4.png";
import img5 from "../src/assets/img/img5.png";
import img6 from "../src/assets/img/img6.png";
import img7 from "../src/assets/img/img7.png";
import React from 'react';
import Navbar from "./komponen/navbar";
import Banner from "./komponen/baner";
import Hello from "./komponen/Hello";

export default function Homepage (){
    return(
        <div className="container">
        <div className="row-fluid">
            <div className="span8 offset2">
            <Navbar />
            <Banner />
            <Hello/>
            <div className="featured-content" id = "service">
                <div className="row-fluid">
                <div className="span6">
                    <div className="block">
                    <h1>Nunc dignissim risus </h1>
                    <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu <span>vulputate magna eros eu erat</span>. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                    <a href="#" className="btn">more info</a>
                    </div>
                </div>
                <div className="span6">
                    <div className="block">
                    <h1>Vivamus vestibulum nulla </h1>
                    <p className="last">Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                    <ul className="ruler-top">
                        <li><a href="#">Integer vita /</a></li>
                        <li><a href="#">Egestis /</a></li>
                        <li><a href="#">Tindidunt</a></li>
                    </ul>
                    <a href="#" className="btn">more info</a>
                    </div>
                </div>
                </div>
            </div>
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
            <div className="contact-info" id = "contact">
                <h1>contact me</h1>
                <h2>lorem ger vitae libero ac risus</h2>
                <form>
                <div className="controls">
                    <input id="name" name="name" type="text" className="span5" placeholder="Name here.." /> 
                    <input id="email" name="email" type="email" className="span5" placeholder="Email here.." />
                </div>
                <div className="controls">
                    <textarea id="message" name="message" className="span10" placeholder="Message here.." rows={5} defaultValue={""} />
                </div>
                <div className="controls">
                    <button id="contact-submit" type="submit" className="btn">Submit</button>
                </div>
                </form>
            </div>
            <div className="site-footer">
                <div className="row-fluid">
                <div className="span6 align-right">
                    <h1>Designed By</h1>
                    <ul>
                    <li><a href="http://www.alltemplateneeds.com">www.alltemplateneeds.com</a></li>
                    <li><a href="http://www.alldesignneeds.com">www.alldesignneeds.com</a></li>
                    </ul>
                </div>
                <div className="span6">
                    <h1>Images From</h1>
                    <ul>
                    <li><a href="http://www.wallpaperswide.com">www.wallpaperswide.com </a></li>
                    <li><a href="http://www.wallcoo.net">www.wallcoo.net</a></li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    )
}