import footer from "@/components/footer";
import Header from "@/components/Header";
import { useEffect, useState } from "@/lib";
const projectDetail = ({id}) => {
  
  const [project, setProject] = useState([]);
  useEffect(() => {
      fetch(`http://localhost:3000/projects/${id}`)
          .then((response) => response.json())
          .then((data) => setProject(data));
  }, []);
 
 
  let strImage = '';
  console.log(strImage)
  if(project.img) {
    project.img.forEach(element => {
      strImage += '<img src="'+ element +'" class="img-fluid">';
    });
  
  }
 
  return `
  ${Header()}
  <main id="main">
  <section id="portfolio-details" class="portfolio-details">
  <div class="container">
      <div class="row gy-4">
      <div class="col-lg-8">
        <div class="portfolio-details-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide">
            ${ strImage }
            </div>  
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="portfolio-info">
          <h3>Thông tin dự án</h3>
          <ul>
            <li><strong>Tên dự án</strong>: ${project.name}</li>
            <li><strong>Tác giả</strong>: ${project.author}</li>
            <li><strong>Công nghệ sử dụng</strong>: ${project.tech}</li>
            <li><strong>Github</strong>: <a href="${project.linkGit}"><i class="fa-brands fa-github"></i></a></li>
          </ul>
        </div>
        <div class="portfolio-description">
          <h2>Mô tả</h2>
          <p>
            ${project.desc}
          </p>
        </div>
      </div>

    </div>

  </div>
</section><!-- End Portfolio Details Section -->
</main>
${footer()}
`;
}

export default projectDetail;