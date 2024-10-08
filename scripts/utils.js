
// Global variable to store the API key
export const BANDSITE_API_KEY = "82ea753c-843e-40b2-9e91-34932f33324c";

// Global variable to store the Base URL of API
export const BANDSITE_BASE_URL = "https://unit-2-project-api-25c1595833b2.herokuapp.com";

/**
 * Added to covert date to human readable format eg "Mon Sept 09 2024"
 * @param {*} date 
 * @returns 
 */
export function formatDate(date) {
    const inputDate = new Date(date);
    return inputDate.toDateString();
}