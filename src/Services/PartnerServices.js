import axios from 'axios';
class Partner {
    GetPartners = async () => {
        return await axios.get(`${globalConfig.api_URL}/getPartners`);
    };
   
}

export default new Partner();
