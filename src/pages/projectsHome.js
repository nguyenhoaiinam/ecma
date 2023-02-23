import { useEffect, useState } from "@/lib";
import ProjectList from "@/components/ProjectList";
const ProjectsPageHome = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);
    return `
    ${ProjectList({projects})}
    `;
};
export default ProjectsPageHome;