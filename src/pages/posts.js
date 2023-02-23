import footer from "@/components/footer";
import Header from "../components/Header";
import { useEffect, useState } from "../lib";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
        ;
    }, []);
    return `
        ${Header()}
        <div class="marginPost"></div>
        ${
            posts.map((post) =>{
                return `
                <div class="postIMG">
                    <div class="contentPost">
                        <img src="${post.postIMG}" alt="">
                        <div class="pp">
                        <h1>${post.title}</h1>
                        <p class="p">${post.content}</p>
                        <button data-id="${post.id}" class="btnViewPost"><a href="/post/${post.id}">More</a></button>
                        </div>
                    </div>
                </div>
                `;
            })
        }
        ${footer()}
    `;
};
export default PostsPage;
