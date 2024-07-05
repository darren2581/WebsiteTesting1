import Image from 'next/image';
import CurtinImage from '../public/Curtin.jpeg';

export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Darren&apos;s Portfolio</title>
      </head>
      <body>
        <header>
          <h1>Darren&apos;s Portfolio</h1>
        </header>
        <div id="sidebar">
          <div class="profile">
            <Image src={CurtinImage} alt="Curtin" title="Author Personal Picture" id="picProfile" />
            <p class="role">Software Engineer</p>
          </div>
          <div class="nav">
            <h4><a href="https://www.google.com">Home</a></h4>
          </div>
          <div class="nav">
            <h4><a href="https://www.google.com">About</a></h4>
          </div>
          <div class="nav">
            <h4><a href="https://www.google.com">Education</a></h4>
          </div>
          <div class="nav">
            <h4><a href="https://www.google.com">Experience</a></h4>
          </div>
          <div class="nav" id="contact">
            <h4><a href="https://www.google.com">Contact</a></h4>
          </div>
        </div>
        <div class="about">
          <div class="profileMobile">
            <Image src={CurtinImage} alt="Curtin" title="Author Personal Picture" id="profileMobile" />
            <p class="role">Software Engineer</p>
          </div>
          <h2 id="about">About</h2>
          <p class="introduction">
            Hi, Welcome to my Portfolio. My name is Darren Tan Thong En a Software Engineer Student at Curtin University Malaysia. 
            Currently in the process of learning and discovering new possibilities in the field of Computing. 
            I am passionate about learning new technologies and applying them to solve real-world problems. 
            I am always prepared to take on new challenges and learn new things. 
            Therefore, hope I am able to show you my capabilities and skills through this Portfolio.
          </p>
          <h3 class="skills">Skills</h3>
          <ul>
            <li>Java (Fluent)</li>
            <li>C++(Fluent)</li>
            <li>MySQL(Fluent)</li>
            <li>C(Fluent)</li>
            <li>HTML(Fluent)</li>
            <li>CSS (Good)</li>
            <li>JavaScript (Good)</li>
          </ul>
        </div>
        <div id="education">
           <ul>
            <li>Foundation in Science and Engineering (Curtin University)</li>
            <li>Bachelor of Software Engineering (Curtin University)</li>
          </ul>
        </div>
      </body>
    </html>
  );
}
