// import React from 'react';

import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css';
const GrandPa = () => {
    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <section className="flex">
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;