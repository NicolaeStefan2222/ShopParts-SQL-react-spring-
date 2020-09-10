import React from "react";

class Cart extends React.Component{
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            status: "This is status",
        };
    }
    handleSubmit(event) {
        event.preventDefault();
    }



    render() {
        return (
            <div>
                <h1>this is your cart</h1>
        <h2>{this.state.status}</h2>
            </div>
        )
    }

}

export default Cart;
