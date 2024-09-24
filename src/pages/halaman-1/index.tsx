import "./index.css";
import "./responsive.css"
import portfolio1 from "../../../public/project1.png"
import portfolio2 from "../../../public/project2.png"

function Example2() {
  return (
    <>
      <header className="header">
        <div className="main-container">
          <div className="nav">
            <div className="logo">
              <a href="/">IAM</a>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#portofolios">Portofolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className="burger">
              <div className="line-1"></div>
              <div className="line-2"></div>
              <div className="line-3"></div>
            </div>
          </div>
          <section className="hero" id="hero">
            <div className="hero-left">
              <h3 className="pre-title">My name is</h3>
              <h1 className="h1 hero-name">
                Indra <span>Arif Mursyid</span>
              </h1>
              <p>
                I am an enthusiastic web developer currently honing my skills in
                front-end and back-end technologies. Passionate about creating
                engaging, user-friendly web experiences, I am dedicated to
                continuous learning and improvement. My journey includes
                mastering HTML, CSS, and JavaScript, along with exploring
                frameworks like React and Node.js.
              </p>
            </div>
            <div className="hero-right">
              <img
                src="https://www.weact.org/wp-content/uploads/2016/10/Blank-profile.png"
                alt="Indra Mursyid"
              />
            </div>
          </section>
        </div>
      </header>

      <section id="education">
        <div className=" main-container">
          <h3 className="pre-title">Learning Path</h3>
          <h1 className="section-title">Education</h1>
        </div>

        <div className="education-grid">
          <div className="education-left">
            <div className="education">
              <div className="line">
                <div></div>
              </div>
              <div className="education-info">
                <h4 className="education-title">SMAN 6 Bone</h4>
                <p>Science class</p>
                <h4 className="education-year">2015-2018</h4>
              </div>
            </div>

            <div className="education">
              <div className="line">
                <div></div>
              </div>
              <div className="education-info">
                <h4 className="education-title">Hasanuddin University</h4>
                <p>Bachelor's-International Relations</p>
                <h4 className="education-year">2018-2022</h4>
              </div>
            </div>
          </div>

          <div className="education-right">
            <div className="education">
              <div className="line">
                <div></div>
              </div>
              <div className="education-info">
                <h4 className="education-title">SMART ILC</h4>
                <p>Grammar Class</p>
                <h4 className="education-year">2023</h4>
              </div>
            </div>

            <div className="education">
              <div className="line">
                <div></div>
              </div>
              <div className="education-info">
                <h4 className="education-title">Purwadhika</h4>
                <p>Web Development</p>
                <h4 className="education-year">2024</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="main-container">
          <h3 className="pre-title">Skills</h3>
          <h1 className="section-title skills-title">Skills in</h1>

          <div className="grid-3">
            <div className="skill">
              <div className="skill-ikon">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMi4wMiAwYzYuNjE0LjAxMSAxMS45OCA1LjM4MyAxMS45OCAxMiAwIDYuNjIzLTUuMzc2IDEyLTEyIDEyLTYuNjIzIDAtMTItNS4zNzctMTItMTIgMC02LjYxNyA1LjM2Ny0xMS45ODkgMTEuOTgxLTEyaC4wMzl6bTMuNjk0IDE2aC03LjQyN2MuNjM5IDQuMjY2IDIuMjQyIDcgMy43MTMgNyAxLjQ3MiAwIDMuMDc1LTIuNzM0IDMuNzE0LTdtNi41MzUgMGgtNS41MjNjLS40MjYgMi45ODUtMS4zMjEgNS40MDItMi40ODUgNi43NzEgMy42NjktLjc2IDYuNjcxLTMuMzUgOC4wMDgtNi43NzFtLTE0Ljk3NCAwaC01LjUyNGMxLjMzOCAzLjQyMSA0LjM0IDYuMDExIDguMDA5IDYuNzcxLTEuMTY0LTEuMzY5LTIuMDU5LTMuNzg2LTIuNDg1LTYuNzcxbS0uMTIzLTdoLTUuNzM2Yy0uMzMxIDEuMTY2LS43NDEgMy4zODkgMCA2aDUuNzM2Yy0uMTg4LTEuODE0LS4yMTUtMy45MjUgMC02bTguNjkxIDBoLTcuNjg1Yy0uMTk1IDEuOC0uMjI1IDMuOTI3IDAgNmg3LjY4NWMuMTk2LTEuODExLjIyNC0zLjkzIDAtNm02Ljc0MiAwaC01LjczNmMuMDYyLjU5Mi4zMDggMy4wMTkgMCA2aDUuNzM2Yy43NDEtMi42MTIuMzMxLTQuODM1IDAtNm0tMTIuODI1LTcuNzcxYy0zLjY2OS43Ni02LjY3MSAzLjM1LTguMDA5IDYuNzcxaDUuNTI0Yy40MjYtMi45ODUgMS4zMjEtNS40MDMgMi40ODUtNi43NzFtNS45NTQgNi43NzFjLS42MzktNC4yNjYtMi4yNDItNy0zLjcxNC03LTEuNDcxIDAtMy4wNzQgMi43MzQtMy43MTMgN2g3LjQyN3ptLTEuNDczLTYuNzcxYzEuMTY0IDEuMzY4IDIuMDU5IDMuNzg2IDIuNDg1IDYuNzcxaDUuNTIzYy0xLjMzNy0zLjQyMS00LjMzOS02LjAxMS04LjAwOC02Ljc3MSIvPjwvc3ZnPg=="
                  alt="HTML"
                />
              </div>
              <h4>HTML</h4>
              <p>still learning</p>
            </div>

            <div className="skill">
              <div className="skill-ikon">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTQzIDkuNjY3Yy0uNzMzLTEuMzkyLTEuOTE0LTMuMDUtMy42MTctNC43NTMtMi45NzctMi45NzgtNS40NzgtMy45MTQtNi43ODUtMy45MTQtLjQxNCAwLS43MDguMDk0LS44Ni4yNDZsLTEuMzYxIDEuMzZjLTEuODk5LS4yMzYtMy40Mi4xMDYtNC4yOTQuOTgzLS44NzYuODc1LTEuMTY0IDIuMTU5LS43OTIgMy41MjMuNDkyIDEuODA2IDIuMzA1IDQuMDQ5IDUuOTA1IDUuMzc1LjAzOC4zMjMuMTU3LjYzOC40MDUuODg1LjU4OC41ODggMS41MzUuNTg2IDIuMTIxIDBzLjU4OC0xLjUzMy4wMDItMi4xMTljLS41ODgtLjU4Ny0xLjUzNy0uNTg4LTIuMTIzLS4wMDFsLS4xNy4yNTZjLTIuMDMxLS43NjUtMy4zOTUtMS44MjgtNC4yMzItMi45bDMuODc5LTMuODc1Yy40OTYgMi43MyA2LjQzMiA4LjY3NiA5LjE3OCA5LjE3OGwtNy4xMTUgNy4xMDdjLS4yMzQuMTUzLTIuNzk4LS4zMTYtNi4xNTYtMy42NzUtMy4zOTMtMy4zOTMtMy4xNzUtNS4yNzEtMy4wMjctNS40OThsMS44NTktMS44NTZjLS40MzktLjM1OS0uOTI1LTEuMTAzLTEuMTQxLTEuNjg5bC0yLjEzNCAyLjEzMWMtLjQ0NS40NDYtLjY4NSAxLjA2NC0uNjg1IDEuODIgMCAxLjYzNCAxLjEyMSAzLjkxNSAzLjcxMyA2LjUwNiAyLjc2NCAyLjc2NCA1LjU4IDQuMjQzIDcuNDMyIDQuMjQzLjY0OCAwIDEuMTgtLjE5NSAxLjU0Ny0uNTYybDguMDg2LTguMDc4Yy45MS44NzQtLjc3OCAzLjUzOC0uNzc4IDQuNjQ4IDAgMS4xMDQuODk2IDEuOTk5IDIgMS45OTkgMS4xMDUgMCAyLS44OTYgMi0yIDAtMy4xODQtMS40MjUtNi44MS0yLjg1Ny05LjM0em0tMTYuMjA5LTUuMzcxYy41MjctLjUzIDEuNDcxLS43OTEgMi42NTYtLjc2MWwtMy4yMDkgMy4yMDZjLS4yMzYtLjk3OC0uMDQ5LTEuODQ1LjU1My0yLjQ0NXptOS4yOTIgNC4wNzlsLS4wMy0uMDI5Yy0xLjI5Mi0xLjI5Mi0zLjgwMy00LjM1Ni0zLjA5Ni01LjA2My43MTUtLjcxNSAzLjQ4OCAxLjUyMSA1LjA2MiAzLjA5Ni44NjIuODYyIDIuMDg4IDIuMjQ3IDIuOTM3IDMuNDU4LTEuNzE3LTEuMDc0LTMuNDkxLTEuNDY5LTQuODczLTEuNDYyeiIvPjwvc3ZnPg=="
                  alt="CSS"
                />
              </div>
              <h4>CSS</h4>
              <p>still learning</p>
            </div>

            <div className="skill">
              <div className="skill-ikon">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMi4wMiAwYzYuNjE0LjAxMSAxMS45OCA1LjM4MyAxMS45OCAxMiAwIDYuNjIzLTUuMzc2IDEyLTEyIDEyLTYuNjIzIDAtMTItNS4zNzctMTItMTIgMC02LjYxNyA1LjM2Ny0xMS45ODkgMTEuOTgxLTEyaC4wMzl6bTMuNjk0IDE2aC03LjQyN2MuNjM5IDQuMjY2IDIuMjQyIDcgMy43MTMgNyAxLjQ3MiAwIDMuMDc1LTIuNzM0IDMuNzE0LTdtNi41MzUgMGgtNS41MjNjLS40MjYgMi45ODUtMS4zMjEgNS40MDItMi40ODUgNi43NzEgMy42NjktLjc2IDYuNjcxLTMuMzUgOC4wMDgtNi43NzFtLTE0Ljk3NCAwaC01LjUyNGMxLjMzOCAzLjQyMSA0LjM0IDYuMDExIDguMDA5IDYuNzcxLTEuMTY0LTEuMzY5LTIuMDU5LTMuNzg2LTIuNDg1LTYuNzcxbS0uMTIzLTdoLTUuNzM2Yy0uMzMxIDEuMTY2LS43NDEgMy4zODkgMCA2aDUuNzM2Yy0uMTg4LTEuODE0LS4yMTUtMy45MjUgMC02bTguNjkxIDBoLTcuNjg1Yy0uMTk1IDEuOC0uMjI1IDMuOTI3IDAgNmg3LjY4NWMuMTk2LTEuODExLjIyNC0zLjkzIDAtNm02Ljc0MiAwaC01LjczNmMuMDYyLjU5Mi4zMDggMy4wMTkgMCA2aDUuNzM2Yy43NDEtMi42MTIuMzMxLTQuODM1IDAtNm0tMTIuODI1LTcuNzcxYy0zLjY2OS43Ni02LjY3MSAzLjM1LTguMDA5IDYuNzcxaDUuNTI0Yy40MjYtMi45ODUgMS4zMjEtNS40MDMgMi40ODUtNi43NzFtNS45NTQgNi43NzFjLS42MzktNC4yNjYtMi4yNDItNy0zLjcxNC03LTEuNDcxIDAtMy4wNzQgMi43MzQtMy43MTMgN2g3LjQyN3ptLTEuNDczLTYuNzcxYzEuMTY0IDEuMzY4IDIuMDU5IDMuNzg2IDIuNDg1IDYuNzcxaDUuNTIzYy0xLjMzNy0zLjQyMS00LjMzOS02LjAxMS04LjAwOC02Ljc3MSIvPjwvc3ZnPg=="
                  alt="javascript"
                />
              </div>
              <h4>Java Script</h4>
              <p>still learning</p>
            </div>

            <div className="skill">
              <div className="skill-ikon">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMi4wMiAwYzYuNjE0LjAxMSAxMS45OCA1LjM4MyAxMS45OCAxMiAwIDYuNjIzLTUuMzc2IDEyLTEyIDEyLTYuNjIzIDAtMTItNS4zNzctMTItMTIgMC02LjYxNyA1LjM2Ny0xMS45ODkgMTEuOTgxLTEyaC4wMzl6bTMuNjk0IDE2aC03LjQyN2MuNjM5IDQuMjY2IDIuMjQyIDcgMy43MTMgNyAxLjQ3MiAwIDMuMDc1LTIuNzM0IDMuNzE0LTdtNi41MzUgMGgtNS41MjNjLS40MjYgMi45ODUtMS4zMjEgNS40MDItMi40ODUgNi43NzEgMy42NjktLjc2IDYuNjcxLTMuMzUgOC4wMDgtNi43NzFtLTE0Ljk3NCAwaC01LjUyNGMxLjMzOCAzLjQyMSA0LjM0IDYuMDExIDguMDA5IDYuNzcxLTEuMTY0LTEuMzY5LTIuMDU5LTMuNzg2LTIuNDg1LTYuNzcxbS0uMTIzLTdoLTUuNzM2Yy0uMzMxIDEuMTY2LS43NDEgMy4zODkgMCA2aDUuNzM2Yy0uMTg4LTEuODE0LS4yMTUtMy45MjUgMC02bTguNjkxIDBoLTcuNjg1Yy0uMTk1IDEuOC0uMjI1IDMuOTI3IDAgNmg3LjY4NWMuMTk2LTEuODExLjIyNC0zLjkzIDAtNm02Ljc0MiAwaC01LjczNmMuMDYyLjU5Mi4zMDggMy4wMTkgMCA2aDUuNzM2Yy43NDEtMi42MTIuMzMxLTQuODM1IDAtNm0tMTIuODI1LTcuNzcxYy0zLjY2OS43Ni02LjY3MSAzLjM1LTguMDA5IDYuNzcxaDUuNTI0Yy40MjYtMi45ODUgMS4zMjEtNS40MDMgMi40ODUtNi43NzFtNS45NTQgNi43NzFjLS42MzktNC4yNjYtMi4yNDItNy0zLjcxNC03LTEuNDcxIDAtMy4wNzQgMi43MzQtMy43MTMgN2g3LjQyN3ptLTEuNDczLTYuNzcxYzEuMTY0IDEuMzY4IDIuMDU5IDMuNzg2IDIuNDg1IDYuNzcxaDUuNTIzYy0xLjMzNy0zLjQyMS00LjMzOS02LjAxMS04LjAwOC02Ljc3MSIvPjwvc3ZnPg=="
                  alt="javascript"
                />
              </div>
              <h4>React</h4>
              <p>still learning</p>
            </div>

            <div className="skill">
              <div className="skill-ikon">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMi4wMiAwYzYuNjE0LjAxMSAxMS45OCA1LjM4MyAxMS45OCAxMiAwIDYuNjIzLTUuMzc2IDEyLTEyIDEyLTYuNjIzIDAtMTItNS4zNzctMTItMTIgMC02LjYxNyA1LjM2Ny0xMS45ODkgMTEuOTgxLTEyaC4wMzl6bTMuNjk0IDE2aC03LjQyN2MuNjM5IDQuMjY2IDIuMjQyIDcgMy43MTMgNyAxLjQ3MiAwIDMuMDc1LTIuNzM0IDMuNzE0LTdtNi41MzUgMGgtNS41MjNjLS40MjYgMi45ODUtMS4zMjEgNS40MDItMi40ODUgNi43NzEgMy42NjktLjc2IDYuNjcxLTMuMzUgOC4wMDgtNi43NzFtLTE0Ljk3NCAwaC01LjUyNGMxLjMzOCAzLjQyMSA0LjM0IDYuMDExIDguMDA5IDYuNzcxLTEuMTY0LTEuMzY5LTIuMDU5LTMuNzg2LTIuNDg1LTYuNzcxbS0uMTIzLTdoLTUuNzM2Yy0uMzMxIDEuMTY2LS43NDEgMy4zODkgMCA2aDUuNzM2Yy0uMTg4LTEuODE0LS4yMTUtMy45MjUgMC02bTguNjkxIDBoLTcuNjg1Yy0uMTk1IDEuOC0uMjI1IDMuOTI3IDAgNmg3LjY4NWMuMTk2LTEuODExLjIyNC0zLjkzIDAtNm02Ljc0MiAwaC01LjczNmMuMDYyLjU5Mi4zMDggMy4wMTkgMCA2aDUuNzM2Yy43NDEtMi42MTIuMzMxLTQuODM1IDAtNm0tMTIuODI1LTcuNzcxYy0zLjY2OS43Ni02LjY3MSAzLjM1LTguMDA5IDYuNzcxaDUuNTI0Yy40MjYtMi45ODUgMS4zMjEtNS40MDMgMi40ODUtNi43NzFtNS45NTQgNi43NzFjLS42MzktNC4yNjYtMi4yNDItNy0zLjcxNC03LTEuNDcxIDAtMy4wNzQgMi43MzQtMy43MTMgN2g3LjQyN3ptLTEuNDczLTYuNzcxYzEuMTY0IDEuMzY4IDIuMDU5IDMuNzg2IDIuNDg1IDYuNzcxaDUuNTIzYy0xLjMzNy0zLjQyMS00LjMzOS02LjAxMS04LjAwOC02Ljc3MSIvPjwvc3ZnPg=="
                  alt="javascript"
                />
              </div>
              <h4>Typescript</h4>
              <p>still learning</p>
            </div>

          </div>
        </div>
      </section>

      <section id="portofolios">
        <div className="portofolios main container">
        <h3 className="pre-title">My Project</h3>
        <h1 className="section-title">Portofolio</h1>

        <div className="grid-3">
          <div className="portofolio">
            <div className="portofolio-cover">
              <img src={portfolio1} alt="portofilio" />
            </div>

            <div className="portofolio-info">
              <div className="portofolio-title">
                <h4>Cake Store Web</h4>
                <a href="/" className="porofolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg>
                </a>
                
              </div>
              <div className="portofolio-tags">
                <div>HTML</div>
                <div>CSS</div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum velit saepe quo. Eius, ducimus voluptatem voluptate sit ipsam quibusdam!
              </p>
            </div>
          </div>

          <div className="portofolio">
            <div className="portofolio-cover">
              <img src={portfolio2} alt="portofilio" />
            </div>

            <div className="portofolio-info">
              <div className="portofolio-title">
                <h4>Cake Kodam Website</h4>
                <a href="/" className="porofolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg>
                </a>
                
              </div>
              <div className="portofolio-tags">
                <div>HTML</div>
                <div>CSS</div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum velit saepe quo. Eius, ducimus voluptatem voluptate sit ipsam quibusdam!
              </p>
            </div>
          </div>

          <div className="portofolio">
            <div className="portofolio-cover">
              <img src={portfolio1} alt="portofilio" />
            </div>

            <div className="portofolio-info">
              <div className="portofolio-title">
                <h4>Cake Store Web</h4>
                <a href="/" className="porofolio-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z"/></svg>
                </a>
                
              </div>
              <div className="portofolio-tags">
                <div>HTML</div>
                <div>CSS</div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nostrum velit saepe quo. Eius, ducimus voluptatem voluptate sit ipsam quibusdam!
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact main-container">
          <div className="contact-left">
            <form className="contact-form" action="">
              <div>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <textarea placeholder="Message" name="message"></textarea>
              </div>
              <div>
                <button className="btn-submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="contact-right">
            <div className="contact-item">
              <div className="contact-item-icon">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMmMzLjE5NiAwIDYgMi42MTggNiA1LjYwMiAwIDMuMDkzLTIuNDkzIDcuMTMyLTYgMTIuNjYxLTMuNTA3LTUuNTI5LTYtOS41NjgtNi0xMi42NjEgMC0yLjk4NCAyLjgwNC01LjYwMiA2LTUuNjAybTAtMmMtNC4xOTggMC04IDMuNDAzLTggNy42MDIgMCA0LjE5OCAzLjQ2OSA5LjIxIDggMTYuMzk4IDQuNTMxLTcuMTg4IDgtMTIuMiA4LTE2LjM5OCAwLTQuMTk5LTMuODAxLTcuNjAyLTgtNy42MDJ6bTAgMTFjLTEuNjU3IDAtMy0xLjM0My0zLTNzMS4zNDMtMyAzLTMgMyAxLjM0MyAzIDMtMS4zNDMgMy0zIDN6Ii8+PC9zdmc+" />
              </div>
              <div className="contact-item-detail">
                <h4>Address</h4>
                <p>Pedurenan, Kelurahan Karet Kuningan, Kec. Setiabudi</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTIxLjUxOCAybC05LjUxOCA3LjcxMy05LjUxOC03LjcxM2gxOS4wMzZ6bS0xOS41MTggMTR2LTExLjgxN2wxMCA4LjEwNCAxMC04LjEwNHYxMS44MTdoLTIweiIvPjwvc3ZnPg==" />
              </div>
              <div className="contact-item-detail">
                <h4>E-mail</h4>
                <p>indraarif0309@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOCAyNGgtMTJjLTEuMTA0IDAtMi0uODk2LTItMnYtMjBjMC0xLjEwNC44OTYtMiAyLTJoMTJjMS4xMDQgMCAyIC44OTYgMiAydjIwYzAgMS4xMDQtLjg5NiAyLTIgMnptMS01LjA4M2gtMTR2My4wODNjMCAuNTUyLjQ0OSAxIDEgMWgxMmMuNTUyIDAgMS0uNDQ4IDEtMXYtMy4wODN6bS03IDNjLS41NTMgMC0xLS40NDgtMS0xcy40NDctMSAxLTFjLjU1MiAwIC45OTkuNDQ4Ljk5OSAxcy0uNDQ3IDEtLjk5OSAxem03LTE3aC0xNHYxM2gxNHYtMTN6bS0xLTMuOTE3aC0xMmMtLjU1MSAwLTEgLjQ0OS0xIDF2MS45MTdoMTR2LTEuOTE3YzAtLjU1MS0uNDQ4LTEtMS0xem0tNC41IDEuOTE3aC0zYy0uMjc2IDAtLjUtLjIyNC0uNS0uNXMuMjI0LS41LjUtLjVoM2MuMjc2IDAgLjUuMjI0LjUuNXMtLjIyNC41LS41LjV6Ii8+PC9zdmc+" />
              </div>
              <div className="contact-item-detail">
                <h4>Phone</h4>
                <p>+62 8199994093</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-icon">
          <a href="https://www.instagram.com/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuMjMzIDUuNDg4Yy0uODQzLS4wMzgtMS4wOTctLjA0Ni0zLjIzMy0uMDQ2cy0yLjM4OS4wMDgtMy4yMzIuMDQ2Yy0yLjE3LjA5OS0zLjE4MSAxLjEyNy0zLjI3OSAzLjI3OS0uMDM5Ljg0NC0uMDQ4IDEuMDk3LS4wNDggMy4yMzNzLjAwOSAyLjM4OS4wNDcgMy4yMzNjLjA5OSAyLjE0OCAxLjEwNiAzLjE4IDMuMjc5IDMuMjc5Ljg0My4wMzggMS4wOTcuMDQ3IDMuMjMzLjA0NyAyLjEzNyAwIDIuMzktLjAwOCAzLjIzMy0uMDQ2IDIuMTctLjA5OSAzLjE4LTEuMTI5IDMuMjc5LTMuMjc5LjAzOC0uODQ0LjA0Ni0xLjA5Ny4wNDYtMy4yMzNzLS4wMDgtMi4zODktLjA0Ni0zLjIzMmMtLjA5OS0yLjE1My0xLjExMS0zLjE4Mi0zLjI3OS0zLjI4MXptLTMuMjMzIDEwLjYyYy0yLjI2OSAwLTQuMTA4LTEuODM5LTQuMTA4LTQuMTA4IDAtMi4yNjkgMS44NC00LjEwOCA0LjEwOC00LjEwOHM0LjEwOCAxLjgzOSA0LjEwOCA0LjEwOGMwIDIuMjY5LTEuODM5IDQuMTA4LTQuMTA4IDQuMTA4em00LjI3MS03LjQxOGMtLjUzIDAtLjk2LS40My0uOTYtLjk2cy40My0uOTYuOTYtLjk2Ljk2LjQzLjk2Ljk2LS40My45Ni0uOTYuOTZ6bS0xLjYwNCAzLjMxYzAgMS40NzMtMS4xOTQgMi42NjctMi42NjcgMi42NjdzLTIuNjY3LTEuMTk0LTIuNjY3LTIuNjY3YzAtMS40NzMgMS4xOTQtMi42NjcgMi42NjctMi42NjdzMi42NjcgMS4xOTQgMi42NjcgMi42Njd6bTQuMzMzLTEyaC0xNGMtMi43NjEgMC01IDIuMjM5LTUgNXYxNGMwIDIuNzYxIDIuMjM5IDUgNSA1aDE0YzIuNzYyIDAgNS0yLjIzOSA1LTV2LTE0YzAtMi43NjEtMi4yMzgtNS01LTV6bS45NTIgMTUuMjk4Yy0uMTMyIDIuOTA5LTEuNzUxIDQuNTIxLTQuNjUzIDQuNjU0LS44NTQuMDM5LTEuMTI2LjA0OC0zLjI5OS4wNDhzLTIuNDQ0LS4wMDktMy4yOTgtLjA0OGMtMi45MDgtLjEzMy00LjUyLTEuNzQ4LTQuNjU0LTQuNjU0LS4wMzktLjg1My0uMDQ4LTEuMTI1LS4wNDgtMy4yOTggMC0yLjE3Mi4wMDktMi40NDUuMDQ4LTMuMjk4LjEzNC0yLjkwOCAxLjc0OC00LjUyMSA0LjY1NC00LjY1My44NTQtLjA0IDEuMTI1LS4wNDkgMy4yOTgtLjA0OXMyLjQ0NS4wMDkgMy4yOTkuMDQ4YzIuOTA4LjEzMyA0LjUyMyAxLjc1MSA0LjY1MyA0LjY1My4wMzkuODU0LjA0OCAxLjEyNy4wNDggMy4yOTkgMCAyLjE3My0uMDA5IDIuNDQ1LS4wNDggMy4yOTh6Ii8+PC9zdmc+"
              alt="instagram"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg=="
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/Indra-arif">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tNC40NjYgMTkuNTljLS40MDUuMDc4LS41MzQtLjE3MS0uNTM0LS4zODR2LTIuMTk1YzAtLjc0Ny0uMjYyLTEuMjMzLS41NS0xLjQ4MSAxLjc4Mi0uMTk4IDMuNjU0LS44NzUgMy42NTQtMy45NDcgMC0uODc0LS4zMTItMS41ODgtLjgyMy0yLjE0Ny4wODItLjIwMi4zNTYtMS4wMTYtLjA3OS0yLjExNyAwIDAtLjY3MS0uMjE1LTIuMTk4LjgyLS42NC0uMTgtMS4zMjQtLjI2Ny0yLjAwNC0uMjcxLS42OC4wMDMtMS4zNjQuMDkxLTIuMDAzLjI2OS0xLjUyOC0xLjAzNS0yLjItLjgyLTIuMi0uODItLjQzNCAxLjEwMi0uMTYgMS45MTUtLjA3NyAyLjExOC0uNTEyLjU2LS44MjQgMS4yNzMtLjgyNCAyLjE0NyAwIDMuMDY0IDEuODY3IDMuNzUxIDMuNjQ1IDMuOTU0LS4yMjkuMi0uNDM2LjU1Mi0uNTA4IDEuMDctLjQ1Ny4yMDQtMS42MTQuNTU3LTIuMzI4LS42NjYgMCAwLS40MjMtLjc2OC0xLjIyNy0uODI1IDAgMC0uNzgtLjAxLS4wNTUuNDg3IDAgMCAuNTI1LjI0Ni44ODkgMS4xNyAwIDAgLjQ2MyAxLjQyOCAyLjY4OC45NDR2MS40ODljMCAuMjExLS4xMjkuNDU5LS41MjguMzg1LTMuMTgtMS4wNTctNS40NzItNC4wNTYtNS40NzItNy41OSAwLTQuNDE5IDMuNTgyLTggOC04czggMy41ODEgOCA4YzAgMy41MzMtMi4yODkgNi41MzEtNS40NjYgNy41OXoiLz48L3N2Zz4="
              alt="github"
            />
          </a>
        </div>
        <p>&copy; 2024 - made by Nostalgic</p>
      </footer>
    </>
  );
}

export default Example2;
