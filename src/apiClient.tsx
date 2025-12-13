import {
  Configuration,
  UserApi,
  BrandApi,
  AuthApi,
  AreaApi,
  TicketApi
} from './api';

const config = new Configuration({
  basePath: import.meta.env.VITE_API_URL,
  fetchApi: async (input, init = {}) => {
    init.credentials = 'include';
    return fetch(input, init);
  }
});

export const apiClient = {
  user: new UserApi(config),
  brand: new BrandApi(config),
  area: new AreaApi(config),
  auth: new AuthApi(config),
  ticket: new TicketApi(config)
};
