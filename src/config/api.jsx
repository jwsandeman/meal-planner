import axios from 'axios';

const mealPlannerAPI = axios.create({baseUrl: 'http://localhost:5000/'});

mealPlannerAPI.interceptors.request.use((req) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    req.headers['Authorization'] = `Bearer ${token}`;
  }

  return req;
});

export default mealPlannerAPI;
