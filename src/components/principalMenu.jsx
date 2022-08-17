import React, { Component } from 'react';


class PrincipalMenu extends Component {
    state = { 
        count: 23
     };
    render() { 
        return (
            <React.Fragment>
                <h1 className='display'> 
                    Menu Principal
                    <small class="text-muted m-3">Hogar de niños</small> 
                </h1>
                <button className='btn btn-primary btn-sm m-2'> Mostrar lista de niños </button>
                <button className='btn btn-secondary btn-sm m-2'> Registrar niño </button>
            </React.Fragment> 
        );
    }

    formatCount(){
        const { count } = this.state
        return count == 0 ? 'Zero' : count;
    }
}
 
export default PrincipalMenu;