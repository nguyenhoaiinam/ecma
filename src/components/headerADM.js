
const headerADM = () =>{
    return `
        <section id="header">
            <div class="header container1">
                <div class="nav-bar">
                    <div class="brand">
                    <a href="#hero">

                    </a>
                    </div>
                    <div class="nav-list">
                    <div class="hamburger">
                        <div class="bar"></div>
                    </div>
                    <ul>
                        <li><a href="" data-after>Home</a></li>
                        <li><a href="/admin/posts" data-after>Posts</a></li>
                        <li><a href="/admin/projects" data-after>Projects</a></li>
                        <li><a href="/admin/about" data-after>About</a></li>
                        <li><a href="/admin/contacts" data-after>Contact</a></li>
                        <li><a href="/" data-after><i class="fa-solid fa-house"></i></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export default headerADM;