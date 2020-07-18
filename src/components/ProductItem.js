import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <center><img width="200px" height="200px;" src={"Image/" +this.state.item.image}></img></center>
              <h1> {this.item.id} </h1>
              <center><h3> {this.state.item.title} </h3></center>
              <p> {this.state.item.price}.VNĐ </p>
              <p> {this.state.item.oldPrice}.VNĐ </p>
              <center><button class="btn btn-success" onClick={this.props.onItemClick}>Dat mua</button></center>
            </div>
          </div>
        </div>

      </div>

    );
  }
}
export default ProductItem;