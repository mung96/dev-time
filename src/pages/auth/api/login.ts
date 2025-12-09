import { LoginFormValues } from "@pages/auth/model/login-form-values.schema";
import { apiRequester } from "@shared/api/api-requester";

export const login = (payload: LoginFormValues) => {
  return apiRequester<{
    success: true;
    available: true;
    message: string;
  }>(`/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
};
