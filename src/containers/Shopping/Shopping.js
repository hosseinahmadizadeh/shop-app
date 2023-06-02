import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";

const prices = {
  product1: 20,
  product2: 30,
  product3: 40,
  product4: 50,
};

class Shopping extends React.Component {
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
    },
    totalPrice: 0,
    purchased: false,
  };
  addProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount + 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;

    const priceAdd = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice + priceAdd;

    this.setState({ products: updatedProducts, totalPrice: newPrice });
    console.log("Add Product");
  };
  removeProductHandler = (type) => {
    let prevCount = this.state.products[type];
    let updatedCount = prevCount - 1;
    let updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;

    let priceSub = prices[type];
    let prevPrice = this.state.totalPrice;
    let newPrice = prevPrice - priceSub;

    this.setState({ prosucts: updatedProducts, totalPrice: newPrice });

    console.log("Remove Product");
  };
  purchasedHandler = () => {
    this.setState({ purchased: true });
  };
  modalCloseHandler = () => {
    this.setState({ purchased: false });
  };
  purchaseContinueHandler = () => {
    console.log("purchaseContinueHandler");
  };
  render() {
    console.log("Test");
    return (
      <Wrapper>
        <Controls
          productAdd={this.addProductHandler}
          productRemove={this.removeProductHandler}
          price={this.state.totalPrice}
          order={this.purchasedHandler}
        />
        <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
          <Order
            products={this.state.products}
            continue={this.purchaseContinueHandler}
            cancel={this.modalCloseHandler}
            price={this.state.totalPrice}
          />
        </Modal>
      </Wrapper>
    );
  }
}

export default Shopping;
