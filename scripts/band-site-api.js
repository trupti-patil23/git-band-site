import { BANDSITE_BASE_URL } from "./utils.js"
export class BandSiteAPI {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = BANDSITE_BASE_URL;     
    }

    async getComments() {
        try {           
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);                  
            return response.data;
        } catch(error) {
            console.log("Error in getting comments: "+`${error}`);
        }
    }
}









