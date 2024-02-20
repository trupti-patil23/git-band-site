import { BANDSITE_BASE_URL } from "./utils.js"

export class BandSiteAPI {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = BANDSITE_BASE_URL;
    }

    /**
     * Added getShows() method to get shows details from API
     * @returns 
     */
    async getShows() {
        try {
            const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.log("Error in getting comments: " + `${error}`);
        }
    }

    /**
     * Added getComments() to get Comments from API
     * @returns 
     */
    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
            return response.data;
        } catch (error) {
            console.log("Error in getting comments: " + `${error}`);
        }
    }

    /**
     * Added postComment(comment) method to save new Comment in API
     * @param {*} comment 
     */
    async postComment(comment) {
        try {
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
            return response.data;

        } catch (error) {
            console.log("Error in posting a comment: " + `${error}`);
        }
    }

    /**
     * Added likeComment(commentId) method to like Comment for given CommentId
     * @param {*} commentId 
     * @returns 
     */

    async likeComment(commentId) {
        try {
            const response = await axios.put(`${this.baseUrl}/comments/${commentId}/like?api_key=${this.apiKey}`);
            return response.data;

        } catch (error) {
            console.log("Error in liking a comment: " + `${error}`);
        }
    }

    /**
     * Added deleteComment(commentId) method to to delete Comment for given commentId
     * @param {*} commentId 
     * @returns 
     */
    async deleteComment(commentId) {
        try {
            const response = await axios.delete(`${this.baseUrl}/comments/${commentId}?api_key=${this.apiKey}`);
            return response.data;

        } catch (error) {
            console.log("Error in deleting comment: " + `${error}`);
        }
    }
}