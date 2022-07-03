/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import Navbar from "./komponen/navbar";
import Banner from "./komponen/baner";
import Hello from "./komponen/Hello";
import Service from "./komponen/Service";
import Kontak from './komponen/Kontak';
import Penutup from "./komponen/Penutup";

export default function Homepage (){
    return(
        <div className="container">
        <div className="row-fluid">
            <div className="span8 offset2">
            <Navbar />
            <Banner />
            <Hello/>
            <Service/>
            <Kontak/>
            <Penutup/>
            

            </div>
        </div>
        </div>

    )
}