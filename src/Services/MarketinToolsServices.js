import axios from 'axios';
class MarketingTool {
    GetMarketingTools = async () => {
        return await axios.get(`${globalConfig.api_URL}/getMarketingTools`);
    };
    
}

export default new MarketingTool();
