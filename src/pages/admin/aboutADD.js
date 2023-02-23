import { useEffect, router } from "@/lib";
import axios from "axios";
const aboutADD = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const aboutVitri = document.querySelector("#aboutVitri");
        const aboutDesc = document.querySelector("#aboutDesc");
        const aboutIMG = document.querySelector("#aboutIMG");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(aboutIMG.files);
            // Tạo proejct mới
            const formData = {
                viTri: aboutVitri.value,
                desc: aboutDesc.value,
                img: urls,
            };

            console.log(urls);

            fetch("http://localhost:3000/about", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            }).then(() => router.navigate("/admin/about"));
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
                <label for="" class="form-label">Tên vị trí</label>
                <input type="text" class="form-control" id="aboutVitri" />
            </div>

            <div class="form-group">
            <label for="" class="form-label">Công nghệ sử dụng</label>
            <textarea class="form-control" aria-label="With textarea" id="aboutDesc"></textarea>
            </div>

            <div class="form-group">
            <label for="" class="form-label">Ảnh dự án</label>
            <input type="file" class="form-control" id="aboutIMG" />
            </div>

            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};
export default aboutADD;  