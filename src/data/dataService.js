import projectsData from './projects.json';
import experienceData from './experience.json';
import certificatesData from './certificates.json';
import skillsData from './skills.json';
import socialData from './social.json';

/**
 * Returns all projects.
 * @returns {Promise<Array>} List of projects.
 */
export const getProjects = async () => {
  return [...projectsData];
};

/**
 * Returns featured projects.
 * @returns {Promise<Array>} List of featured projects.
 */
export const getFeaturedProjects = async () => {
  return projectsData.filter((p) => p.featured === true);
};

/**
 * Returns a single project by its slug.
 * @param {string} slug - The project slug.
 * @returns {Promise<Object|null>} The project object or null if not found.
 */
export const getProjectBySlug = async (slug) => {
  return projectsData.find((p) => p.slug === slug) || null;
};

/**
 * Returns related projects for a given project id.
 * @param {number} projectId - The current project's id.
 * @returns {Promise<Array>} List of related projects.
 */
export const getRelatedProjects = async (projectId) => {
  const currentProject = projectsData.find((p) => p.id === projectId);
  if (!currentProject || !currentProject.relatedProjects) return [];
  return projectsData.filter((p) => currentProject.relatedProjects.includes(p.id));
};

/**
 * Returns all experience entries sorted by id descending.
 * @returns {Promise<Array>} List of experience entries.
 */
export const getExperience = async () => {
  return [...experienceData].sort((a, b) => b.id - a.id);
};

/**
 * Returns all certificates.
 * @returns {Promise<Array>} List of certificates.
 */
export const getCertificates = async () => {
  return [...certificatesData];
};

/**
 * Returns all skill categories.
 * @returns {Promise<Array>} List of skill categories.
 */
export const getSkills = async () => {
  return [...skillsData];
};

/**
 * Returns all social links.
 * @returns {Promise<Array>} List of social links.
 */
export const getSocialLinks = async () => {
  return [...socialData];
};
