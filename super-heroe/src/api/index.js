import axios from 'axios'

export default async function apiCall({
    url,
    method = "get",
    body,
    headers,
}) {
        try {

            const { data } = await axios.get(url, {
                method,
                body,
                headers,
            });

            return data;

        } catch (error) {
            Promise.reject(error);
        }
}