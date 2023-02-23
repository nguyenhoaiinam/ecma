import { useEffect, router } from "@/lib";
import axios from "axios";
const contactADMadd = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const contactPhone = document.querySelector("#contactPhone");
        const contactEmail = document.querySelector("#contactEmail");
        const contactLocation = document.querySelector("#contactLocation");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            // Tạo proejct mới
            const formData = {
                contactPhone: contactPhone.value,
                contactEmail: contactEmail.value,
                contactLocation: contactLocation.value,
            };

            fetch("http://localhost:3000/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),

            }).then(() => router.navigate("/admin/contacts"));
        });
    });
    return `<div class="container pt-5">
        <form action="" id="form-add">
            <div class="form-group">
                <label for="" class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" id="contactPhone" />
            </div>

            <div class="form-group">
            <label for="" class="form-label">Email</label>
            <textarea class="form-control" aria-label="With textarea" id="contactEmail"></textarea>
            </div>

            <div class="form-group">
            <label for="" class="form-label">Ảnh dự án</label>
            <textarea class="form-control" aria-label="With textarea" id="contactLocation"></textarea>
            </div>

            <button class="btn btn-primary">Thêm dự án</button>
        </form>
        </div>`;
};
export default contactADMadd;  