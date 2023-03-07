import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <div className="top-header" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="top-header-title" style={{ textAlign: "center" }}>
        <h1>
          <a href="https://rockbrand-652a6.firebaseapp.com/" style={{textDecoration: "none"}}>
            <span className="site-title" style={{ fontFamily: "Dancing Script, cursive", fontSize: "3rem" }}>Rock Profile</span>
          </a>
        </h1>
        <p className="site-subtitle" style={{ fontFamily: "Dancing Script, cursive", fontSize: "1.5rem", marginTop: 0 }}>外語系斜槓工程師</p>
      </div>
    </div>
  );
};

export default TopHeader;

export function Home() {
  return (
    <div>
      <TopHeader />
    </div>
  );
}
