import axios from 'axios';

export async function fetchData(url, setData) {
    try {
        const response = await axios.get(url);
        setData(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
