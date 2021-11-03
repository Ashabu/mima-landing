import axios from 'axios';
class Faqs {
    GetFaqs = async () => {
        return await axios.get(`${globalConfig.api_URL}/getFaqs`);
    };
}

export default new Faqs();
