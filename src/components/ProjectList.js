const ProjectList = ({ projects }) => {
    if (!Array.isArray(projects) || projects.length == 0) return null;
    return `
    <div class="projects-header">
      <h1 class="section-title">Recent <span>Projects</span></h1>
    </div>
    <div class="projects containerp">

        ${projects.map((project) => {
            return `
            <div class="all-projects">
                        <div class="project-item">
                            <div class="project-info">
                                <h1>${project.name}</h1>
                                <h2>Công nghệ sử dụng: ${project.tech}</h2>
                                <p>${project.desc}</p>
                                <button class="btnViewDetail" data-id=${project.id}>
                                <a href="/project/${project.id}">VIEW</a>
                                </button>
                            </div>
                            <div class="project-img">
                                <img class="img-fluid" src="${project.img[0]}" alt="img">
                            </div>
                        </div>
            </div>

            `;
            }).join("")
        }
    </div>
    `;

};
export default ProjectList;
