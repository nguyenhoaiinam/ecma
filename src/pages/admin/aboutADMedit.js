import { useEffect,useState, router } from "@/lib";
import axios from "axios";

const aboutADMedit = ({ id }) => {

    const [about, setAbout] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/about/${id}`)
            .then((response) => response.json())
            .then((data) => setAbout(data));
    }, []);
    const currentIMG = about.img;
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const aboutViTri = document.querySelector("#aboutVitri");
        const aboutDesc = document.querySelector("#aboutDesc");
        const aboutIMG = document.querySelector("#aboutIMG");

        // console.log(currentIMG)
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const urls = await uploadFiles(aboutIMG.files);

            const formData = {
                id,
                viTri: aboutViTri.value,
                desc: aboutDesc.value,
                img: urls,
            };
            const formData2 = {
                id,
                viTri: aboutViTri.value,
                desc: aboutDesc.value,
                img: currentIMG,
            };
            console.log(formData2)
            if(aboutIMG == ""){
                fetch("http://localhost:3000/about/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData2),
                }).then(() => router.navigate("/admin/about"));
            } else {
                fetch("http://localhost:3000/about/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }).then(() => router.navigate("/admin/about"));
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
            <label for="" class="form-label">Vi tri</label>
            <input type="text" class="form-control" id="aboutVitri" value="${about.viTri}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Mo ta</label>
        <input type="text" class="form-control" id="aboutDesc" value="${about.desc}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Ảnh</label>
        <input type="file" multiple class="form-control" id="aboutIMG"/>
        </div>
                <button class="btn btn-primary">Sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default aboutADMedit;