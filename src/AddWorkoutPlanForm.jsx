import axios from "axios";

const API_URL = "http://localhost:8080/workout-plans";

const createPlan = async (planData, createdById) => {
  const payload = { ...planData, createdBy: { userId: createdById } };
  const response = await axios.post(API_URL, payload);
  return response.data;
};

const getAllPlans = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Default export as an object
const WorkoutPlanService = {
  createPlan,
  getAllPlans,
};

export default WorkoutPlanService;
