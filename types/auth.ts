export interface loginPayload {
    email: string;
    password: string;
}

export interface AuthUser {
    id: string;
    password: string;
    token: string;
}
