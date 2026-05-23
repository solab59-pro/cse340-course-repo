-- ========================================
-- Organization Table
-- ========================================
CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);

-- ========================================
-- Insert sample data: Organizations
-- ========================================
INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
('BrightFuture Builders', 'A nonprofit focused on improving community infrastructure through sustainable construction projects.', 'info@brightfuturebuilders.org', 'brightfuture-logo.png'),
('GreenHarvest Growers', 'An urban farming collective promoting food sustainability and education in local neighborhoods.', 'contact@greenharvest.org', 'greenharvest-logo.png'),
('UnityServe Volunteers', 'A volunteer coordination group supporting local charities and service initiatives.', 'hello@unityserve.org', 'unityserve-logo.png');

-- ========================================
-- Service Project Table
-- ========================================
CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
    organization_id INTEGER NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL,
    project_date DATE NOT NULL,

    CONSTRAINT fk_organization
        FOREIGN KEY (organization_id)
        REFERENCES organization(organization_id)
        ON DELETE CASCADE
);

-- ========================================
-- Insert sample data: BrightFuture Builders
-- organization_id = 1
-- ========================================
INSERT INTO project
(organization_id, title, description, location, project_date)
VALUES
(1, 'Community Playground Renovation',
 'Renovating an old playground with safer and modern equipment.',
 'Salt Lake City, Utah',
 '2026-06-10'),

(1, 'Neighborhood Housing Repair',
 'Repairing damaged homes for low-income families.',
 'Provo, Utah',
 '2026-06-15'),

(1, 'Bridge Safety Inspection',
 'Conducting safety inspections on community pedestrian bridges.',
 'Ogden, Utah',
 '2026-07-01'),

(1, 'Public Park Expansion',
 'Expanding recreational space for families and children.',
 'Logan, Utah',
 '2026-07-12'),

(1, 'Solar Lighting Installation',
 'Installing sustainable solar street lighting in communities.',
 'St. George, Utah',
 '2026-08-03');

-- ========================================
-- Insert sample data: GreenHarvest Growers
-- organization_id = 2
-- ========================================
INSERT INTO project
(organization_id, title, description, location, project_date)
VALUES
(2, 'Urban Garden Workshop',
 'Teaching residents how to build urban gardens.',
 'Boise, Idaho',
 '2026-05-25'),

(2, 'Community Compost Program',
 'Launching a compost recycling initiative.',
 'Denver, Colorado',
 '2026-06-08'),

(2, 'Youth Farming Camp',
 'Training youth in sustainable farming practices.',
 'Phoenix, Arizona',
 '2026-06-20'),

(2, 'School Greenhouse Project',
 'Building greenhouses for local schools.',
 'Las Vegas, Nevada',
 '2026-07-05'),

(2, 'Tree Planting Initiative',
 'Planting trees to improve environmental sustainability.',
 'Portland, Oregon',
 '2026-07-18');

-- ========================================
-- Insert sample data: UnityServe Volunteers
-- organization_id = 3
-- ========================================
INSERT INTO project
(organization_id, title, description, location, project_date)
VALUES
(3, 'Food Drive Campaign',
 'Collecting and distributing food supplies for families.',
 'Dallas, Texas',
 '2026-05-30'),

(3, 'Senior Care Visits',
 'Providing companionship and assistance for senior citizens.',
 'Houston, Texas',
 '2026-06-11'),

(3, 'School Supply Donation',
 'Gathering school supplies for underprivileged students.',
 'Austin, Texas',
 '2026-06-22'),

(3, 'Community Cleanup Day',
 'Organizing volunteers to clean public spaces.',
 'San Antonio, Texas',
 '2026-07-09'),

(3, 'Charity Fundraising Event',
 'Hosting an event to raise funds for local charities.',
 'El Paso, Texas',
 '2026-07-25');

-- ========================================
-- Verify Inserted Data
-- ========================================
SELECT * FROM project;

SELECT
    project.project_id,
    project.title,
	project.description,
    project.location,
    project.project_date,
    organization.name AS organization_name
FROM project
JOIN organization
ON project.organization_id = organization.organization_id;