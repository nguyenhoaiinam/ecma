import "bootstrap/dist/css/bootstrap.min.css";
import '/src/components/css/style.css';
import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import AdminProjectsPage from "./src/pages/admin/projects";
import AdminProjectsAddPage from "./src/pages/admin/projects-add";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import NotFoundPage from "./src/pages/not-found";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import projectDetail from "@/pages/project-detail";
import ProjectsPage from "./src/pages/projects";
import AdminProjectEditPage from "@/pages/admin/projects-edit";
import MainHomePage from '@/pages/pageHome';
import admPost from "@/pages/admin/postADM";
import postADMadd from "@/pages/admin/postADMadd";
import postADMedit from "@/pages/admin/postADMedit";
import aboutADM from "@/pages/admin/aboutADM";
import aboutADD from "@/pages/admin/aboutADD";
import contactADM from "@/pages/admin/contactADM";
import contactADMadd from "@/pages/admin/contactADMadd";
import aboutADMedit from "@/pages/admin/aboutADMedit";
import contactADMedit from "@/pages/admin/contactADMedit";
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) => render(() => projectDetail(data), app));
router.on("/post/:id", () => render(PostDetailPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/homePage", render(MainHomePage, app));

router.on("/admin/posts", () => render(admPost, app));
router.on("/admin/posts/add", () => render(postADMadd, app));
router.on("/admin/posts/:id/edit", ({data}) => render(() => postADMedit(data), app));


router.on("/admin/about", () => render(aboutADM, app));
router.on("/admin/about/add", () => render(aboutADD, app));
router.on("/admin/about/:id/edit", ({data}) => render(() => aboutADMedit(data), app));

router.on("/admin/contacts", () => render(contactADM, app));
router.on("/admin/contacts/add", () => render(contactADMadd, app));
router.on("/admin/contacts/:id/edit", ({data}) => render(() => contactADMedit(data), app));


router.on("/admin/projects", () => render (AdminProjectsPage, app));
router.on("/admin/projects/add", () => render (AdminProjectsAddPage, app));
router.on("/admin/projects/:id/edit", ({data}) => render(() => AdminProjectEditPage(data), app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
