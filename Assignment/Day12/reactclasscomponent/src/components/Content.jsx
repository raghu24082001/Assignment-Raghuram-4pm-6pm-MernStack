import { Component } from "react";

class Content extends Component{
    constructor(){
        super()
        
        this.state = {
            count:0
        }
    }
    
    increment = ()=>(
            this.setState (
                {
                    count: this.state.count + 1
                }
            )
        )

     

    decrement = ()=>(
            this.setState (
                {
                    count: this.state.count - 1
                }
            )
        )


    render(){
        return(
            <>
                <div className='box3'>
                <div onClick={this.increment} className="box4">+</div>
                <div className="box4">{this.state.count} </div>
                <div onClick={this.decrement} className="box4">-</div>
                </div>
                </> 
        )
    }
}

export default Content

