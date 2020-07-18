import React, { Component } from 'react';


class Products extends Component{
    onAddProduct(event) {
        event.preventDefault();
        let name = event.target["name"].value;
        let code = event.target["code"].value;
        let price = event.target["price"].value;
        let oldPrice = event.target["oldPrice"].value;
        let image = event.target["image"].files.item(0).name;
        let products = JSON.parse(localStorage.getItem("products"));
        if (!products) {
            products = [];
        }
        let oldItem = products.find((element) => element.name === name);
        if (oldItem) {
            alert("Sản phẩm này đã tồn tại!!");
        }
        else {
            let product = {
                name: name,
                code:code,
                price: price,
                oldPrice: oldPrice,
                image: image
            }
            products.push(product);
            localStorage.setItem("products", JSON.stringify(products));
            alert("Successfull");
            console.log(products);
        }
    }
    render(){
        return(
            <div>
                <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
                <script src="//code.jquery.com/jquery.js"></script>
                <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

                <form onSubmit={this.onAddProduct}>
                    <input type="text" required name="name" placeholder="name" />
                    <input type="text" required name="code" placeholder="code" />
                    <input type="text" required name="price" placeholder="price" />
                    <input type="text" required name="oldPrice" placeholder="oldPrice" />
                    <input type="file" required name="image" placeholder="image" />
                    <button class="btn btn-info" type="submit" >Add product</button>

                </form>
            </div>
        )
    }

}
export default Products;