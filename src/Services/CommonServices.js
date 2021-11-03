import axios from 'axios';
class Links {
    GetLinks = async () => {
        return await axios.get(`${globalConfig.api_URL}/getSkypeLinks`);
    };

}

export default new Links();