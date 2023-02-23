import MainNav from "./banner";

const Header = () => {
    return `
        <section id="header">
        <div class="header container1">
        <div class="nav-bar">
            <div class="brand">
            <a href="#hero">
                <h1><span>H</span>oai <span>N</span>am</h1>
            </a>
            </div>
            <div class="nav-list">
            <div class="hamburger">
                <div class="bar"></div>
            </div>
            <ul>
                <li><a href="/" data-after>Home</a></li>
                <li><a href="/posts" data-after>Posts</a></li>
                <li><a href="/projects" data-after>Projects</a></li>
                <li><a href="/about" data-after>About</a></li>
                <li><a href="/contact" data-after>Contact</a></li>
            </ul>
            </div>
        </div>
        </div>
    </section>
    `;
};
export default Header;
