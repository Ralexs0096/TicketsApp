import { Configuration, UserApi, BrandApi } from './api';

const config = new Configuration({
  basePath: import.meta.env.VITE_API_URL
});

export const apiClient = {
  user: new UserApi(config),
  brand: new BrandApi(config)
};
