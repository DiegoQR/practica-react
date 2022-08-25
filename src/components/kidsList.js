import React from "react";
import Kid from "./kid.js"

export default function KidsList(props) {
    const kids = [
        {
            id: "1",
            name: "Manuel Artiaga",
            age: "13",
            picture: "../images/kid2.jpg"
        }, {
            id: "2",
            name: "Pablo Rosales",
            age: "8",
            picture: "../images/kid2.jpg"
        }, {
            id: "3",
            name: "Andres Rojas",
            age: "10",
            picture: "../images/kid3.jpg"
        }
    ];

    const kidsComponents = kids.map((kid) => { return <Kid child={kid} key={kid.index} /> });

    return (
        <div className="row">
            <div className="col-lg-8 mx-auto">
                <ul class="list-group shadow">
                    { kidsComponents }
                </ul>
            </div>
        </div>
    );
}
