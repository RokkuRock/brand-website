import React from 'react';
import authors from "../data/author.json";

const MyProfile: React.FC = () => {
  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <h4 className="w3-center">The Author</h4>
        <p className="w3-center"><img src={authors[0].imgUrl} className="w3-circle" style={{height: '300px', width: '200px'}} alt="Avatar" /></p>    
        <hr />
        <div>
          <p>Education</p>
            <ul>
            <li>National Taipei University<span></span> Bachelor of Foreign Languages and Applied Linguistics</li>
            <li>National Taipei University<span></span> Master of Information Management (pre-enrolled)</li>
            </ul>
          <p>Core Skills</p>
            <ul>
            <li>Language: JLPT N1, TOEIC 890 </li>
            <li>Programming Languages: Typescript, Solidity, Python</li>
            <li>Frameworks: React.js, Node.js, Bootstrap, Tornado</li>
            <li>Development tools: Git, Firebase API, Docker, WSL, VirtualBox, Vite</li>
            </ul>
          <p>Special Experience</p>
            <ul>
            <li>Spring semester at Rikkyo University, 2021</li>
            <li>Research Assistant for Director Professor, Graduate Institute of Information Management</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

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

export function About() {
  return (
    <div>
      <TopHeader />
      <MyProfile />
    </div>
  );
}
