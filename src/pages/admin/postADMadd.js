
import { useEffect, router } from "@/lib";
import axios from "axios";

const postADMadd = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const postTitle = document.querySelector("#postTitle");
        const postContent = document.querySelector("#postContent");
        const postIMG = document.querySelector("#postImg");


        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(postIMG.files);
            // Tạo proejct mới
            const formData = {
                title: postTitle.value,
                content: postContent.value,
                postIMG: urls,
            };

            console.log(urls);

            fetch("http://localhost:3000/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            }).then(() => router.navigate("/admin/posts"));
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
                <label for="" class="form-label">Tiêu đề</label>
                <input type="text" class="form-control" id="postTitle" />
            </div>

            <div class="form-group">
            <label for="" class="form-label">Bài viết</label>
            <textarea class="form-control" aria-label="With textarea" id="postContent"></textarea>
            </div>

            <div class="form-group">
            <label for="" class="form-label">Ảnh dự án</label>
            <input type="file" class="form-control" id="postImg" />
            </div>

            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};

export default postADMadd;