import { User, UserStatus } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

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

    const patient = await prisma.$transaction(async (tx) => {
        const patinetTX = await tx.patient.create({
            data: {
                userId: data.user.id,
                name: payload.name,
                email: payload.email

            }
        })
        return patinetTX
    })
    return {
        ...data,
        patient,
        
    }
}



interface ILoginUserPayload {
    email: string;
    password: string;
}

const loginUser = async (payload: ILoginUserPayload) => {
    const { email, password } = payload;

    const data = await auth.api.signInEmail({
        body: {
            email,
            password
        }
    })

    if (data.user.status == UserStatus.BLOCKED) {
        throw new Error("User is blocked");
    }

    if (data.user.isDeleted || data.user.status == UserStatus.DELETED) {
        throw new Error("User is deleted");
    }

    return data;



}






export const AuthService = {
    registerPatient,
    loginUser
}