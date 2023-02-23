import headerADM from "@/components/headerADM";
import { useEffect, useState } from "@/lib";
const aboutADM = () => {
    const [abouts, setAbout] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/about")
            .then((response) => response.json())
            .then((data) => setAbout(data));
    }, []);
    return `
    ${headerADM()}
    <div class="class="container pt-5"" style="margin-top: 120px">
    <h1 class="titleADM">Quản lý Mô tả</h1>
    <button class="btn-addPr"><a href="/admin/about/add">Thêm mô tả</a></button>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Vị trí</th>
                    <th>Mô tả</th>
                    <th>Ảnh</th>
                    <th>Hành Động</th>
                </tr>
            </thead>
            <tbody>
                ${abouts.map((about, index) => {
        return `
                        <tr>
                            <td class="tdStt">${index + 1}</td>
                            <td class="">${about.viTri}</td>
                            <td class="">${about.desc}</td>
                            <td class="tdAnh"><img class="img-fluid" src="${about.img}" alt=""></td>
                            <td class="tdHanhDong">
                                <button data-name="Dat" data-id="${about.id}"class="btn-remove">Remove</button>
                                <button class="btn-edit">
                                <a href="/admin/about/${about.id}/edit">Edit</a>
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
export default aboutADM;