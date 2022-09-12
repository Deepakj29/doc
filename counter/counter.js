import React from 'react';
import counterdisplay from './counterdisplay';


class counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            val: 0
        }
    }
    plusbutton = () => {
        this.setState({ val: this.state.val + 1 })

    }
    minusbutton = () => {
        if(this.state.val>0)
        this.setState({ val: this.state.val - 1 })
    }
    reset=()=>{
        this.setState({val:0})
    }
    render() {
        return (
            <>
                <div className="container bg-primary mt-5 text-center  text-white">
                <h3 className="p-3">COUNTER APP</h3>
                <button className=" btn btn-success m-4 " onClick={this.plusbutton}>+</button>
                <counterdisplay count={this.state.val}> </counterdisplay>
                <button className=" btn btn-danger m-4 "onClick={this.minusbutton}>-</button>
                <button className=" btn btn-warning m-5 "onClick={this.reset}>Reset</button>
                </div>
            </>


        )
    }

}
export default counter;