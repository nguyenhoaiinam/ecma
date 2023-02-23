import Header from "../components/Header";
import footer from "@/components/footer";
// import { projects } from "@/data";
import ProjectsPage from "./projects";
import MainNav from "../components/banner";
import services from "@/components/services";
import ContactPage from "./contact";
import AboutPage from "./about";
import MainHomePage from "./pageHome";
import ProjectsPageHome from "./projectsHome";
const HomePage = () => {
    return `
        ${Header()}
        ${MainNav()}
        ${MainHomePage()}
        ${footer()}
    `;
};
export default HomePage;

// http://localhost:5173/#/project/1
