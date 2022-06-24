const config = {
    baseURL: 'http://httpbin.org/get',
    timeout: 1000,
}

const axiosInstance = axios.create(config);

export {axiosInstance}