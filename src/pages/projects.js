import Header from "../components/Header";
import MainNav from "@/components/banner";
import ProjectList from "@/components/ProjectList";
import { useEffect, useState } from "@/lib";
import footer from "@/components/footer";

// import { projects } from "../data";
const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    

    return `
    ${Header()}
    ${ProjectList({ projects })}
    ${footer()}
    `;
};
export default ProjectsPage;
//${ProjectList({ projects })}
