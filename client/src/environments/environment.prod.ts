export const environment = {
  production: true,
  apiUrl: 'https://fastfood-api.herokuapp.com',
  apiDBJson: 'http://localhost:3030',
  tokenAllowedDomains: [ /fastfood-api.herokuapp.com/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/],
};
