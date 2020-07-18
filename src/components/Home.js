import React, { Component } from 'react';
import ProductItem from './ProductItem';


class Home extends Component{
        constructor(){
            super();
            let products = JSON.parse(localStorage.getItem("products"));  
            this.state={
                products:products
            }
        }
       
    onItemClick() {
        return (event) => {
           
            alert("Thank you your order");
           
        }
    }
    render(){
       
        return(
            <div>
               {this.state.products.map((item) =>
                <ProductItem onItemClick={this.onItemClick()} item={item} />)
               }
            </div>
        )
    }

}
export default Home;