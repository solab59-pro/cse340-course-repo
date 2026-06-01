// // Import any needed model functions
// import { getAllProjects } from '../models/projects.js';

// // Define any controller functions
// const showProjectsPage = async (req, res) => {
//     const projects = await getAllProjects();
//     const title = 'Service Projects';

//     res.render('projects', { title, projects });
// };  

// // Export any controller functions
// export { showProjectsPage };



// New
// Import needed model functions
import {
    getUpcomingProjects,
    getProjectDetails
} from '../models/projects.js';

import {
    getCategoriesByProjectId
} from '../models/categories.js';


// Number of upcoming projects to display
const NUMBER_OF_UPCOMING_PROJECTS = 5;

// Controller function for the projects page
const showProjectsPage = async (req, res) => {
    const projects = await getUpcomingProjects(NUMBER_OF_UPCOMING_PROJECTS);

    const title = 'Upcoming Service Projects';

    res.render('projects', {
        title,
        projects
    });
};

// Controller function for a single project details page
const showProjectDetailsPage = async (req, res) => {
    // Extract the project ID from URL parameters
    const { id } = req.params;

    // Retrieve project details from database
    const project = await getProjectDetails(id);

    const categories = await getCategoriesByProjectId(id);

    // Render the project details page
    res.render('project', {
        title: project.title,
        project, categories
    });
};

// Export controller functions
export {
    showProjectsPage,
    showProjectDetailsPage
};