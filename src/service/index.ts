import { notification } from 'antd';
import axios, { AxiosHeaders, type AxiosInstance } from 'axios';
import { pathOr } from 'ramda';


interface Config {
    suffix?: string;
    baseURL?: string;
}

abstract class BaseAPI {

    protected httpService: AxiosInstance;

    protected constructor({ suffix, baseURL = import.meta.env.VITE_APP_API_URL }: Config) {
        // create a new instance of the Axios with custom config.
        this.httpService = axios.create({
            baseURL: `${baseURL}${suffix ? `/${suffix}` : ''}`,
            timeout: 60000,
            validateStatus(status) {
                return status >= 200 && status < 300;
            },
        });

        this.requestInterceptors();
        this.responseInterceptors();
    }

    private responseInterceptors() {
        this.httpService.interceptors.response.use(
            (response) => pathOr(response, ['data'])(response),
            async (error) => {
                if (error?.response?.status) {
                    notification.open({
                        message: error?.response?.data?.description,
                        type: 'error',
                    })
                }
                return Promise.reject(error);
            },
        );
    }

    private requestInterceptors() {
        this.httpService.interceptors.request.use();
    }
    getErrorText(errorCode: number): string {
        return `${errorCode}`;
    }
}

export default BaseAPI;
