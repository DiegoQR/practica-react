import React, { Component } from 'react';
import { useState } from 'react';
import KidsList, { kidsList } from './kidsList.js'


export default function PrincipalMenu() {
    const [showListKids, setShowListKids] = useState(false);

    function handleShowKidsListClick(){
        setShowListKids(!showListKids);
        console.log(showListKids);
    }

    const kidsList = (showListKids) ? <KidsList /> : <React.Fragment></React.Fragment>;

    return (
        <React.Fragment>
            <h1 className='display'> 
                Menu Principal
                <small class="text-muted m-3">Hogar de niños</small> 
            </h1>
            <button className='btn btn-primary btn-sm m-2' onClick={handleShowKidsListClick}> Mostrar lista de niños </button>
            <button className='btn btn-secondary btn-sm m-2'> Registrar niño </button>
            {kidsList}
        </React.Fragment> 
    );
}