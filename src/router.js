import express from 'express';

import { showHomePage } from './controllers/index.js';
import { showOrganizationsPage } from './controllers/organizations.js';
import { showProjectsPage } from './controllers/projects.js';
import { showCategoriesPage, showCategoryDetailsPage, showAssignCategoriesForm, processAssignCategoriesForm
        } from './controllers/categories.js';

import { testErrorPage } from './controllers/errors.js';

import { showOrganizationDetailsPage } from './controllers/organizations.js';
import { showProjectDetailsPage,  } from './controllers/projects.js';
import { showNewOrganizationForm } from './controllers/organizations.js';
import {processNewOrganizationForm } from './controllers/organizations.js';
import {organizationValidation} from './controllers/organizations.js';

import {showEditOrganizationForm, processEditOrganizationForm } from './controllers/organizations.js';
import {showNewProjectForm, processNewProjectForm, projectValidation,  showEditProjectForm,
    processEditProjectForm} from './controllers/projects.js';

import {
    showNewCategoryForm,
    processNewCategoryForm,
    showEditCategoryForm,
    processEditCategoryForm,
    categoryValidation
} from './controllers/categories.js';


import {
    showUserRegistrationForm,
    processUserRegistrationForm
} from './controllers/users.js';

// import * as userController from './controllers/users.js'; THis style is just convenient when a controller exports multiple functions.


const router = express.Router();

router.get('/', showHomePage);
router.get('/organizations', showOrganizationsPage);
router.get('/projects', showProjectsPage);
router.get('/project/:id', showProjectDetailsPage);
router.get('/categories', showCategoriesPage);
router.get('/category/:id', showCategoryDetailsPage);
router.get('/organization/:id', showOrganizationDetailsPage);

// Route for new organization page
router.get('/new-organization', showNewOrganizationForm);

// Route to display the edit organization form
router.get('/edit-organization/:id', showEditOrganizationForm);

// Route to handle new organization form submission
router.post('/new-organization', organizationValidation, processNewOrganizationForm);

// Route to handle the edit organization form submission
router.post('/edit-organization/:id', organizationValidation, processEditOrganizationForm);

// Route for new project page
// router.get('/new-project', showNewProjectForm);

// Route to handle new project form submission
router.post('/new-project', projectValidation, processNewProjectForm);

// Route to handle edit project form submission
router.post('/edit-project/:id',  projectValidation, processEditProjectForm);

// Routes to handle the assign categories to project form
router.get('/assign-categories/:projectId', showAssignCategoriesForm);
router.post('/assign-categories/:projectId', processAssignCategoriesForm);

// Route for new project page
router.get('/new-project', showNewProjectForm);

// Route to display the edit project form
router.get('/edit-project/:id', showEditProjectForm);


// For category
router.get('/new-category', showNewCategoryForm);

router.post(
    '/new-category',
    categoryValidation,
    processNewCategoryForm
);

router.get(
    '/edit-category/:id',
    showEditCategoryForm
);

router.post(
    '/edit-category/:id',
    categoryValidation,
    processEditCategoryForm
);

// User registration routes
router.get('/register', showUserRegistrationForm);
router.post('/register', processUserRegistrationForm);

// error-handling routes
router.get('/test-error', testErrorPage);


export default router;