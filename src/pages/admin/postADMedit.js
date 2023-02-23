import { useEffect,useState, router } from "@/lib";
import axios from "axios";

const postADMedit = ({ id }) => {

    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
    }, []);
    const currentIMG = post.img;
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const postTitle = document.querySelector("#postTitle");
        const postContent = document.querySelector("#postContent");
        const postImg = document.querySelector("#postIMG");

        // console.log(currentIMG)
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(postImg.files);

            const formData = {
                id,
                title: postTitle.value,
                content: postContent.value,
                postIMG: urls,
            };
            const formData2 = {
                id,
                name: postTitle.value,
                author: postContent.value,
                postIMG: currentIMG,
            };
            console.log(formData2)
            if(postIMG == ""){
                fetch("http://localhost:3000/posts/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData2),
                }).then(() => router.navigate("/admin/posts"));
            } else {
                fetch("http://localhost:3000/posts/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }).then(() => router.navigate("/admin/posts"));
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
            <input type="text" class="form-control" id="postTitle" value="${post.title}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Công nghệ sử dụng</label>
        <textarea class="form-control" aria-label="With textarea" id="postContent">${post.content}</textarea>
        </div>

        <div class="form-group">
        <label for="" class="form-label">Ảnh dự án</label>
        <input type="file" multiple class="form-control" id="postIMG"/>
        </div>
                <button class="btn btn-primary">Sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default postADMedit;