import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <h1 className="logo">
          <img src={require('../img/logo.jpg')} alt="logo" className="header-logo"></img>
        </h1>
        <ul className="nav-bar">
          <li className="header-menu">메뉴소개</li>
          <li className="header-store">매장소개</li>
          <li className="header-event">이벤트</li>
          <li className="header-mypage">마이페이지</li>
        </ul>
        <div className="nav-button">
          <button className="header-inquiry">가맹점 문의</button>
          <div className="header-login-group">
            <button className="header-signin">로그인</button>
            <button className="header-signup">회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
