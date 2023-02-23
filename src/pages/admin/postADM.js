import headerADM from "@/components/headerADM";
import { useEffect, useState } from "@/lib";
const admPost = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                // const newProjects = data.filter((project) => project.id != id);
                fetch(`http://localhost:3000/posts/${id}`,{
                    method: "DELETE",
                }).then(() => {
                        // Nếu xóa thành công thì render lại màn hình
                    const newPosts = posts.filter((post) => post.id != id);
                    setPosts(newPosts);
                    }
                )
            });
        }
    });

    return `
    ${headerADM()}
    <div class="class="container pt-5"" style="margin-top: 120px">
            <h1 class="titleADM">Quản lý bài viết</h1>
            <button class="btn-addPr"><a href="/admin/posts/add">Thêm bài viết</a></button>
            <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tiêu đề</th>
                            <th>Nội dung</th>
                            <th>Ảnh</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${
                            posts.map((post, index) => {
                                          return `
                                <tr>
                                    <td class="tdStt">${index + 1}</td>
                                    <td class="tdName">${post.title}</td>
                                    <td class="tdDesc">${post.content}</td>
                                    <td class="tdAnh"><img class="img-fluid" src="${post.postIMG}" alt=""></td>
                                    <td class="tdHanhDong">
                                        <button data-name="Dat" data-id="${
                                            post.id
                                        }"class="btn-remove">Remove</button>
                                        <button class="btn-edit">
                                        <a href="/admin/posts/${post.id}/edit">Edit</a>
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
export default admPost;
