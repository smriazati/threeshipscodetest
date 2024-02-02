import data from '../public/data.json';

export const fetchData = async () => {
    // Simulate an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return data;
};
