import axios from 'axios';
class Benefits {
    GetBenefits = async () => {
        return await axios.get(`${globalConfig.api_URL}/getBenefits`);
    };

}

export default new Benefits();
