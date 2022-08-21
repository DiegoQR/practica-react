import React from "react";
import Kid from "./kid.js"

export default function KidsList(props) {
    const kids = [
        {
            name: "Manuel Artiaga",
            age: "13",
            picture: "../images/kid2.jpg"
        }, {
            name: "Pablo Rosales",
            age: "8",
            picture: "../images/kid2.jpg"
        }, {
            name: "Andres Rojas",
            age: "10",
            picture: "../images/kid3.jpg"
        }
    ];


    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <ul class="list-group shadow">
                    <Kid child={kids[0]}/>
                    <Kid child={kids[1]}/>
                    <Kid child={kids[2]}/>
                </ul>
            </div>
        </div>
    );
}
