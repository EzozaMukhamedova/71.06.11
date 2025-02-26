import { apiClient } from "../config/apiConfig";

export function register(body) {
  return apiClient.post("/auth/register", body);
}
