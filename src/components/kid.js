import React from "react";

export default function Kid(props){
    const { child, ...rest } = props.child;
    const key = rest.key;

    return (
        <li class="list-group-item" key={key}>
            <div class="media align-items-lg-center flex-column flex-lg-row p-3">
                <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">{child.name}</h5>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                        <h6 class="font-weight-bold my-2">{child.age}</h6>
                        <ul class="list-inline small">
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                            <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                        </ul>
                    </div>
                    <img src={`file:///${child.picture}`} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"></img>
                </div>
            </div> 
        </li>
    );
}