import data from '../public/data.json';

export const fetchData = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // console.log('fetchData', data)
    return data;
};
