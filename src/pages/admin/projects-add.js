import { useEffect, router } from "@/lib";
import axios from "axios";

const AdminProjectsAddPage = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");
        const projectDesc = document.querySelector("#project-desc");
        const projectLinkGit = document.querySelector("#project-linkGit");
        const projectImg = document.querySelector("#project-img");
        const projectTech = document.querySelector("#project-tech");


        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(projectImg.files);
            // Tạo proejct mới
            const formData = {
                name: projectName.value,
                author: projectAuthor.value,
                tech: projectTech.value,
                linkGit: projectLinkGit.value,
                desc: projectDesc.value,
                img: urls,
            };

            console.log(urls);

            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            }).then(() => router.navigate("/admin/projects"));
        });

        const uploadFiles = async (files) => {
            if(files){
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

        }
    });
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>

            <div class="form-group">
            <label for="" class="form-label">Công nghệ sử dụng</label>
            <input type="text" class="form-control" id="project-tech" />
            </div>

            <div class="form-group">
                <label for="" class="form-label">Tác giả</label>
                <input type="text" class="form-control" id="project-author" />
            </div>

            <div class="form-group">
            <label for="" class="form-label">Mô tả</label>
            <textarea class="form-control" aria-label="With textarea" id="project-desc"></textarea>
            </div>

            <div class="form-group">
            <label for="" class="form-label">Link Github</label>
            <input type="text" class="form-control" id="project-linkGit" />
            </div>

            <div class="form-group">
            <label for="" class="form-label">Ảnh dự án</label>
            <input type="file" multiple class="form-control" id="project-img" />
            </div>

            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default AdminProjectsAddPage;