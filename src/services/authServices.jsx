import mealPlannerAPI from '../config/api.jsx';

export const signup = async (data) => {
  const response = await mealPlannerAPI.post('/auth/signup', data);
  return response.data;
};

export const signin = async (data) => {
  const response = await mealPlannerAPI.post('/auth/signin', data);
  return response.data;
};

export const editProfile = async (data, id) => {
  const response = await mealPlannerAPI.put(`/auth/${id}`, data);
  return response.data;
};
