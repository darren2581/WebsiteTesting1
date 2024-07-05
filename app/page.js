import Image from 'next/image';
import CurtinImage from '../public/Curtin.jpeg';

export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Darren&apos;s Portfolio</title>
      </head>
      <body>
        <header id="header">
          <h1>Darren&apos;s Portfolio</h1>
        </header>
        <div id="sidebar">
          <div class="profile">
            <Image src={CurtinImage} alt="Curtin" title="Author Personal Picture" id="picProfile" />
            <p class="role">Darren Tan Thong En</p>
            <p>(Software Engineer)</p>
          </div>
          <div class="nav">
            <h4><a href="#header">Home</a></h4>
          </div>
          <div class="nav">
            <h4><a href="#about">About</a></h4>
          </div>
          <div class="nav">
            <h4><a href="#education">Education</a></h4>
          </div>
          <div class="nav">
            <h4><a href="#experience">Experience</a></h4>
          </div>
          <div class="nav" id="contact">
            <h4><a href="#contact">Contact</a></h4>
          </div>
        </div>
        <div class="content">
          <div class="container">
            <div class="profileMobile">
              <Image src={CurtinImage} alt="Curtin" title="Author Personal Picture" id="profileMobile" />
              <p class="role">Software Engineer</p>
            </div>
            <h2 id="about">About</h2>
            <p class="introduction">
            Hi, welcome to my portfolio. My name is Darren Tan Thong En, and I am a Software Engineering student at Curtin University Malaysia. 
            I am currently in the process of learning and discovering new possibilities in the field of computing. 
            I am passionate about learning new technologies and applying them to solve real-world problems. I am always prepared to take on new challenges and learn new things. 
            I hope to showcase my capabilities and skills through this portfolio.
            </p>
            <h3>Skills</h3>
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
          <div class="container">
            <h2 id="education">Education</h2>
            <ul class="education">
              <li>Foundation in Science and Engineering (Curtin University)</li>
              <li>Bachelor of Software Engineering (Curtin University)</li>
            </ul>
          </div>
          <div class="container">
            <h2 id="experience">Programming Experince</h2>
            <table class="experience">
              <thead>
                <tr>
                  <th class="tbheader">Projects</th>
                  <th class="tbheader">Completion Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><a href="https://github.com/darren2581/Exhibition-Feedback-System">Exhibition Feedback System</a></td>
                  <td>01/05/2023 - 10/06/2023</td>
                </tr>
                <tr>
                  <td><a href="https://github.com/darren2581/Team-Statistics-System">Team Statistics System</a></td>
                  <td>16/09/2023 - 15/10/2023</td>
                </tr>
                <tr>
                  <td><a href="https://github.com/darren2581/FIFA-World-Cup-Database">FIFA World Cup Database</a></td>
                  <td>29/09/2023 - 15/10/2024</td>
                </tr>
                <tr>
                  <td><a href="https://github.com/darren2581/2D-Snake-Game">2D Snake Game</a></td>
                  <td>22/03/2024 - 19/05/2024</td>
                </tr>
                <tr>
                  <td><a href="https://github.com/darren2581/Numerology-Analysis-System">Numerology Analysis System</a></td>
                  <td>25/04/2024 - 24/05/2024</td>
                </tr>
                <tr>
                  <td><a href="https://github.com/darren2581/Airline-Management-System">Airline Management System</a></td>
                  <td>01/05/2024 - 31/05/2024</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="container">
            <h2 id="contact">Contact Details</h2>
            <p><em>Email:</em> darrentanthongen@gmail.com</p>
            <p><em>Phone:</em> +6014-5752581</p>
            <p><em>Instagram:</em><a href="https://www.instagram.com/darren_2581"> darren_2581</a></p>
            <p><em>Github: </em><a href="https://github.com/darren2581"> www.github.com/darren2581</a></p>
            <p><em>LinkedIn:</em><a href="https://www.linkedin.com/in/darren2581"> www.linkedin.com/in/darren2581</a></p>
          </div>
          <fieldset>
            <legend>Message</legend>
            <form action="mailto: darrentanthongen@gmail.com" method="post" enctype="text/plain">
              <label for="name">Name:</label><br />
              <input type="text" id="name" name="name" required /><br />
              <label for="email">Email:</label><br />
              <input type="email" id="email" name="email" required /><br />
              <label for="message">Message:</label><br />
              <textarea id="message" name="message" required></textarea><br />
              <input type="submit" value="Submit" />
            </form>
          </fieldset>
        </div>
      </body>
    </html>
  );
}
