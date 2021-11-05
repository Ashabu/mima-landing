import axios from 'axios';

class Commissions {
    GetCommisions = async () => {
        return await axios.get(`${globalConfig.api_URL}/getCommissions`);
    };

    CreateCommision = async (data) => {
        return await axios.post(`${globalConfig.api_URL}/addCommission`, data);
    }

    EditCommision = async (id, data) => {
        return await axios.put(`${globalConfig.api_URL}/editCommission/${id}`, data);
    };

    DeleteCommision = async (id) => {
        return await axios.delete(`${globalConfig.api_URL}/deleteCommission/${id}`);
    }
}

export default new Commissions();
