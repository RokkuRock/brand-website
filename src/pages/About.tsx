import React from 'react';
import authors from "../data/author.json";
import TopHeader from './Home';

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

export default MyProfile;

export function About() {
  return (
    <div>
      <TopHeader />
      <MyProfile />
    </div>
  );
}
