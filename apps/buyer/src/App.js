import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./includes/Header";
import Menu from "./includes/menu";
import Footer from "./includes/footer";
import Details from "./details";
import Store from "./store";
import Cart from "./cart";
import Orders from "./orders";
import Main from "./main";
import Login from "./login";
import Register from "./register";
import Checkout from "./checkout";
import NoMatch from "./404page";
import Stall from "./stall";
import DecryptMnemonic from "./decryptMnemonic";
import RedirectToForm from "./form";
import ProductInsert from "./insert_product";
import Product from "./product";
import { EmailProvider } from "./EmailContext";
import EmailListPage from "./mailDisplay";

function App() {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  useEffect(() => {}, [showHeaderFooter]);

  return (
    <>
      {showHeaderFooter ? <Header /> : ""}
      {/* {showHeaderFooter ? <Menu /> : ""} */}
      <Router>
        <EmailProvider>
          <Routes>
            <Route exact path="/details" element={<Details />} />
            <Route exact path="/store" element={<Store />} />
            <Route exact path="/stall" element={<Stall />} />
            <Route exact path="/" element={<Main />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/getMnemonic" element={<DecryptMnemonic />} />
            <Route exact path="/form" element={<RedirectToForm />} />
            <Route exact path="/new" element={<ProductInsert />} />
            <Route exact path="/xxx" element={<EmailListPage />} />

            <Route
              exact
              path="/login"
              element={
                <Login headerFooterHandler={() => setShowHeaderFooter(false)} />
              }
            />
            <Route
              exact
              path="/register"
              element={
                <Register
                  headerFooterHandler={() => setShowHeaderFooter(false)}
                />
              }
            />
            <Route path="*" element={<NoMatch />} />
            <Route exact path="/products" element={<Product />} />
          </Routes>
        </EmailProvider>
        ;
      </Router>
      {showHeaderFooter ? <Footer /> : ""}
    </>
  );
}

export default App;
