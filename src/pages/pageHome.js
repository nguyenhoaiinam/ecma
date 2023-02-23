import footer from "@/components/footer";
// import { projects } from "@/data";
import ProjectsPageHome from "./projectsHome";
import MainNav from "../components/banner";
import services from "@/components/services";
import ContactPage from "./contact";
import AboutPage from "./about";
const MainHomePage = () => {
    return `
        ${AboutPage()}
        ${ProjectsPageHome()}
        ${services()}
        ${ContactPage()}
    `;
};
export default MainHomePage;