import { useEffect,useState, router } from "@/lib";
import axios from "axios";

const contactADMedit = ({ id }) => {

    const [contact, setContact] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/contacts/${id}`)
            .then((response) => response.json())
            .then((data) => setContact(data));
    }, []);

    useEffect(() => {
        const form = document.getElementById("form-edit");
        const contactPhone = document.querySelector("#contactPhone");
        const contactEmail = document.querySelector("#contactEmail");
        const contactLocation = document.querySelector("#contactLocation");

        // console.log(currentIMG)
        form.addEventListener("submit",function (e) {
            e.preventDefault();

            const formData = {
                id,
                contactPhone: contactPhone.value,
                contactEmail: contactEmail.value,
                contactLocation: contactLocation.value,
            };
 
                fetch("http://localhost:3000/contacts/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }).then(() => router.navigate("/admin/contacts"));
                 

            // localStorage.setItem("projects", JSON.stringify(newProjects));
            // router.navigate("/admin/projects");
        });

    });
    return `<div>
        <div class="container pt-5">
        <h1>Sửa dự án</h1>
            <form action="" id="form-edit">
            <div class="form-group">
            <label for="" class="form-label">Vi tri</label>
            <input type="text" class="form-control" id="contactPhone" value="${contact.contactPhone}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Mo ta</label>
        <input type="text" class="form-control" id="contactEmail" value="${contact.contactEmail}" />
        </div>

        <div class="form-group">
        <label for="" class="form-label">Ảnh</label>
        <input type="text" class="form-control" id="contactLocation" value="${contact.contactLocation}" />
        </div>
                <button class="btn btn-primary">Sửa dự án</button>
            </form>
            </div>
    </div>`;
};

export default contactADMedit;