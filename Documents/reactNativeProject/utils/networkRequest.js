import axios from 'axios';
const baseUrl = 'https://openlibrary.org';

export const getRequest = async (endpoint) => {
    try {
        const configurationObject = {
            method: 'get',
            url: `${baseUrl}/${endpoint}.json`,
        };
        const response = await axios(configurationObject);
        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
    }
};

