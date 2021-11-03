import axios from 'axios';

class Affiliate {
    GetAffiliateInfos = async () => {
        return await axios.get(`${globalConfig.api_URL}/getAffiliate`);
    };

}

export default new Affiliate();
