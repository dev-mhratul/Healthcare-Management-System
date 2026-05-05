import { User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";

interface IRegisterPatientPayload {
    email: string;
    password: string;
    name: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
    const { email, password, name } = payload;

    const data = await auth.api.signUpEmail({
        body: {
            email,
            password,
            name
        }
    })

    if (!data.user) {
        throw new Error("Failed to register user");
    }

    return data;

};


export const AuthService = {
    registerPatient
}