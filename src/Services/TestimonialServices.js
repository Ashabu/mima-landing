import axios from 'axios';
class Testimonial {
    GetTestimonials = async () => {
        return await axios.get(`${globalConfig.api_URL}/getTestimonials`);
    };

   
}

export default new Testimonial();
