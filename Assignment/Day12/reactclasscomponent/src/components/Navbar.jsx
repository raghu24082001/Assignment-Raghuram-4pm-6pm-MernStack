import { Component } from "react";
import del from '../assets/react.svg'

class Navbar extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                <div className='box1'> 
                    <div><img src={del} width={'70%'} alt="" /></div>
                <div className='box2'>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Career</a>
                    <a href="">Login</a>
                    
                </div>
                </div>
                </> 
        )
    }
}

export default Navbar

