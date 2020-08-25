import http from "./http-common";

class ApiService {
  get(id) {
    return http.get(`/repos/${id}`);
  }

  findByName(name) {
    return http.get(`/repositories?q=${name}`);
  }
}

export default new ApiService();