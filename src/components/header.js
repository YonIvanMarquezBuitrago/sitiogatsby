import React from "react";
import ilustration from '../img/undraw_dev_productivity_umsq.svg';
import Form from './contact.form';

export default ()=>(
    <header className="bg-blue-400">
        
        <div className="container mx-auto p-12 max-w-4xl ">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">Hola! Soy Yon Ivan</h1>
                    <p className="text-xl font-light">Creo aplicaciones Web y enseño Programación</p>
                </div>
                <img src={ilustration} alt="Productividad" style={{height:"300px"}}></img>
            </div>
                <div>
                <Form />
                </div>
        </div>
       
    </header>
)