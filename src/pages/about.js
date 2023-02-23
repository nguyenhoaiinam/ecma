import Header from "../components/Header";
import MainNav from "@/components/banner";
import footer from "@/components/footer";
import { useEffect, useState } from "@/lib";
const AboutPage = () => {

  const [abouts, setAbout] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/about")
            .then((response) => response.json())
            .then((data) => setAbout(data));
  }, [])



    return `
    ${Header()}
    <section id="about">
    ${
      abouts.map((about) => {
        return `
        <div class="about container1">
        <div class="col-left">
          <div class="about-img">
            <img src="${about.img}" alt="img">
          </div>
        </div>
        <div class="col-right">
          <h1 class="section-title">About <span>me</span></h1>
          <h2>${about.viTri}</h2>
          <p>${about.desc}</p>
          <a href="#" class="cta">Download Resume</a>
        </div>
      </div>
    </section>
        `;
      }).join("")
    }
    `;
};
export default AboutPage;
