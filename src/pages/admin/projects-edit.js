import { useEffect,useState, router } from "@/lib";
import axios from "axios";

const AdminProjectEditPage = ({ id }) => {

    const [project, setProject] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then((response) => response.json())
            .then((data) => setProject(data));
    }, []);
    const currentIMG = project.img;
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");
        const projectDesc = document.querySelector("#project-desc");
        const projectLinkGit = document.querySelector("#project-linkGit");
        const projectImg = document.querySelector("#project-img");
        const projectTech = document.querySelector("#project-tech");

        // console.log(currentIMG)
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(projectImg.files);

            const formData = {
                id,
                name: projectName.value,
                author: projectAuthor.value,
                tech: projectTech.value,
                desc: projectDesc.value,
                linkGit: projectLinkGit.value,
                img: urls,
            };
            const formData2 = {
                id,
                name: projectName.value,
                author: projectAuthor.value,
                tech: projectTech.value,
                desc: projectDesc.value,
                linkGit: projectLinkGit.value,
                img: currentIMG,
            };
            console.log(formData2)
            if(projectImg == ""){
                fetch("http://localhost:3000/projects/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData2),
                }).then(() => router.navigate("/admin/projects"));
            } else {
                fetch("http://localhost:3000/projects/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }).then(() => router.navigate("/admin/projects"));
            }
                 

            // localStorage.setItem("projects", JSON.stringify(newProjects));
            // router.navigate("/admin/projects");
        });

        const uploadFiles = async (files) => {
                const CLOUD_NAME ="dds5d6hm0";
                const PRESET_NAME ="ecma-we17303";
                const FOLDER_NAME = "ECMA";
                const urls = [];
                const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    
                const formData = new FormData();
                formData.append("upload_preset", PRESET_NAME);
                formData.append("folder", FOLDER_NAME);
    
                for(const file of files){
                    formData.append("file", file);
                    const response = await axios.post(api, formData,{
                        headers: {
                            "Content-Type": "multipart/form-data",
                        }
                    });
                    urls.push(response.data.secure_url);
                }
                return urls;
            }

    });
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
            <div class="form-group">
            <label for="" class="form-label">Tên dự án</label>
            <input type="text" class="form-control" id="project-name" value="${project.name}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Công nghệ sử dụng</label>
        <input type="text" class="form-control" id="project-tech" value="${project.tech}" />
        </div>

        <div class="form-group">
            <label for="" class="form-label">Tác giả</label>
            <input type="text" class="form-control" id="project-author" value="${project.author}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Mô tả</label>
        <textarea class="form-control" aria-label="With textarea" id="project-desc" />${project.desc}</textarea>
        </div>

        <div class="form-group">
        <label for="" class="form-label">Link Github</label>
        <input type="text" class="form-control" id="project-linkGit" value="${project.linkGit}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Ảnh dự án</label>
        <input type="file" multiple class="form-control" id="project-img"/>
        </div>
                <button class="btn btn-primary">Sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default AdminProjectEditPage;