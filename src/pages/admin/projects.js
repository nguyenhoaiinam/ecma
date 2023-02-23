import headerADM from "@/components/headerADM";
import { useEffect, useState } from "@/lib";

const AdminProjectsPage = () => {
    // localStorage
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                // const newProjects = data.filter((project) => project.id != id);
                fetch(`http://localhost:3000/projects/${id}`,{
                    method: "DELETE",
                }).then(() => {
                        // Nếu xóa thành công thì render lại màn hình
                    const newProjects = projects.filter((project) => project.id != id);
                    setProjects(newProjects);
                    }
                )
            });
        }
    });

    return `
    ${headerADM()}
    <div class="class="container pt-5"" style="margin-top: 120px">
            <h1 class="titleADM">Quản lý dự án</h1>
            <button class="btn-addPr"><a href="/admin/projects/add">Thêm dự án</a></button>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
                            <th>Mô tả</th>
                            <th>Công nghệ</th>
                            <th>Tác giả</th>
                            <th>Ảnh</th>
                            <th>Link Github</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                            projects.map((project, index) => {
                                          return `
                                <tr>
                                    <td class="tdStt">${index + 1}</td>
                                    <td class="tdName">${project.name}</td>
                                    <td class="tdDesc">${project.desc}</td>
                                    <td class="tdTech">${project.tech}</td>
                                    <td class="tdAuthor">${project.author}</td>
                                    <td class="tdAnh"><img class="img-fluid" src="${project.img[0]}" alt=""></td>
                                    <td class="tdLinhGit"><a href="${project.linkGit}">${project.linkGit}</a></td>
                                    <td class="tdHanhDong">
                                        <button data-name="Dat" data-id="${
                                            project.id
                                        }""class="btn btn-danger" onClick="confirm('Bạn có chắc chắn xóa không?')">Remove</button>
                                        <button class="btn-edit">
                                        <a href="/admin/projects/${project.id}/edit">Edit</a>
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
};

export default AdminProjectsPage;