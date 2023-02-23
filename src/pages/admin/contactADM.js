
import headerADM from "@/components/headerADM";
import { useEffect, useState } from "@/lib";
const contactADM = () => {
    const [contacts, setContact] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/contacts")
            .then((response) => response.json())
            .then((data) => setContact(data));
    }, []);
    return `
    ${headerADM()}
    <div class="class="container pt-5"" style="margin-top: 120px">
    <h1 class="titleADM">Quản lý Liên Hệ</h1>
    <button class="btn-addPr"><a href="/admin/contacts/add">Thêm liên hệ</a></button>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Địa chỉ</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>
                ${contacts.map((contact, index) => {
        return `
                        <tr>
                            <td class="tdStt">${index + 1}</td>
                            <td class="">${contact.contactPhone}</td>
                            <td class="">${contact.contactEmail}</td>
                            <td class="">${contact.contactLocation}</td>

                            <td class="tdHanhDong">
                                <button data-name="Dat" data-id="${contact.id}"class="btn-remove">Remove</button>
                                <button class="btn-edit">
                                <a href="/admin/contacts/${contact.id}/edit">Edit</a>
                                </button>
                            </td>
                        </tr>
                    `;
    })
            .join("")
        } 
                
                
            </tbody>
        </table>
        </div>`;
}
export default contactADM;