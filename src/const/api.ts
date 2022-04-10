import axios from "axios";

export async function loginApi(formData: { email: string, password: string }, loader: Function) {
    await loader(true);
    return await axios.post("/api/auth/login", formData);

}