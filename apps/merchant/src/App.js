import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Logo from './images/logo.png';
import Header from './includes/Header';
import Menu from './includes/menu';
import Footer from './includes/footer';
import Dashboard from './dashboard';
import Setup from './setup';
import Active from './orders/active';
import History from './orders/history';
import Orders from './orders/orders';
import Customer from './customers';
import StockHistory from './stockHistory';
import FreshProduct from './freshProduct';
import Category from './category';
import Product from './inventory';
import ExistingProduct from './existingProduct';
import BulkUpload from './bulkUpload';
import Chat from './chat';
import Analytics from './analytics';
import Report from './report';
import ReportDetail from './report-details';
import PrpductDetails from './productDetails';
import GiftCards from './giftCards';
import CreateGiftCards from './createGiftCards';
import BuildToEarn from './buildToEarn';
import Discount from './discount';
import CreateDiscount from './createDiscount';
import OnlineStore from './onlineStore';
import Settings from './settings';
import Login from './login';
import Reset from './reset';
import Signup from './signup';
import NoMatch from './noMatch';
// import $ from 'jquery';

function App() {
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);
  useEffect(() => {
    
  }, [showHeaderFooter]);
  return (
    <div>
        
    {/* <div className="preloader">
        <img src={Logo} alt="logo"/>
        <div className="preloader-icon"></div>
    </div> */}
    <div className={showHeaderFooter ?  'layout-wrapper' : '' }>
    {showHeaderFooter ? <Header /> : '' } 
    {showHeaderFooter ?  <Menu/> : '' }
    <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/setup" element={<Setup />} />
          <Route exact path="/active-orders" element={<Active />} />
          <Route exact path="/order-history" element={<History />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/customers" element={<Customer />} />
          <Route exact path="/stock-history" element={<StockHistory />} />
          <Route exact path="/fresh-product" element={<FreshProduct />} />
          <Route exact path="/category" element={<Category />} />
          <Route exact path="/inventory" element={<Product />} />
          <Route exact path="/existing-product" element={<ExistingProduct />} />
          <Route exact path="/bulk-upload" element={<BulkUpload />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/report-details" element={<ReportDetail />} />
          <Route exact path="/product-details" element={<PrpductDetails />} />
          <Route exact path="/gift-cards" element={<GiftCards />} />
          <Route exact path="/create-gift-cards" element={<CreateGiftCards />} />
          <Route exact path="/build-to-earn" element={<BuildToEarn />} />
          <Route exact path="/discount" element={<Discount />} />
          <Route exact path="/create-discount" element={<CreateDiscount />} />
          <Route exact path="/online-store" element={<OnlineStore />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/login" element={<Login headerFooterHandler={() => setShowHeaderFooter(false)} />} />
          <Route exact path="/reset" element={<Reset headerFooterHandler={() => setShowHeaderFooter(false)} />} />
          <Route exact path="/signup" element={<Signup headerFooterHandler={() => setShowHeaderFooter(false)} />} />
          <Route path="*" element={<NoMatch headerFooterHandler={() => setShowHeaderFooter(false)}/>} />
        </Routes>
      </Router>
    {showHeaderFooter ? <Footer /> : ''} 
    </div>
    </div>
  );
}

export default App;