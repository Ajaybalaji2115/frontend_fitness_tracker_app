// import axios from "axios";

// const API_URL = "http://localhost:8080/api/profiles";

// class UserProfileService {
//   // Create profile
//   createProfile(userId, profile) {
//     // profile should include password inside JSON
//     return axios.post(`${API_URL}/${userId}`, profile);
//   }

//   // Update profile
//   updateProfile(userId, profile) {
//     return axios.put(`${API_URL}/${userId}`, profile);
//   }

//   // Get profile by userId
//   getProfile(userId) {
//     return axios.get(`${API_URL}/${userId}`);
//   }
// }

// export default new UserProfileService();
import axios from "axios";

const API_URL = "http://localhost:8080/api/profiles";

class UserProfileService {
  createProfile(profile) {
    return axios.post(API_URL, profile);
  }

  updateProfile(userId, profile) {
    return axios.put(`${API_URL}/${userId}`, profile);
  }

  getProfile(userId) {
    return axios.get(`${API_URL}/${userId}`);
  }

  deleteProfile(userId) {
    return axios.delete(`${API_URL}/${userId}`);
  }
}

export default new UserProfileService();
