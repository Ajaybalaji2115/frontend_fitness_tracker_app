// import axios from "axios";

// const API_URL = "http://localhost:8080/workout-plans";

// class WorkoutPlanService {
//   // Create
//   createPlan(plan, createdById) {
//     return axios.post(`${API_URL}/${createdById}`, plan);
//   }

//   // Read
//   getAllPlans() {
//     return axios.get(API_URL);
//   }

//   getPlanById(id) {
//     return axios.get(`${API_URL}/${id}`);
//   }

//   getPlansByDifficulty(difficulty) {
//     return axios.get(`${API_URL}/difficulty/${difficulty}`);
//   }

//   getPlansByCreator(creatorId) {
//     return axios.get(`${API_URL}/creator/${creatorId}`);
//   }

//   getPlansByApproval(status) {
//     return axios.get(`${API_URL}/approved/${status}`);
//   }

//   // Update
//   updatePlan(id, plan) {
//     return axios.put(`${API_URL}/${id}`, plan);
//   }

//   assignUserToPlan(planId, userId) {
//     return axios.put(`${API_URL}/${planId}/assign/${userId}`);
//   }

//   // Delete
//   deactivatePlan(id) {
//     return axios.delete(`${API_URL}/${id}`);
//   }
// }

// export default new WorkoutPlanService();
// import axios from "axios";

// const API_URL = "http://localhost:8080/workout-plans";

// class WorkoutPlanService {
//   createPlan(plan) {
//     return axios.post(API_URL, plan);
//   }

//   getAllPlans() {
//     return axios.get(API_URL);
//   }

//   updatePlan(id, plan) {
//     return axios.put(`${API_URL}/${id}`, plan);
//   }

//   approvePlan(id) {
//     return axios.put(`${API_URL}/${id}/approve`);
//   }

//   deactivatePlan(id) {
//     return axios.delete(`${API_URL}/${id}`);
//   }
// }

// export default new WorkoutPlanService();
