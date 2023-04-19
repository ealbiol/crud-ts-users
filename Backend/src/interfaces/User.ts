// 1. Create an interface representing a document in MongoDB.

export interface IUser {
    id: number;
    email: string;
    first: string;
    last: string;
    company: string;
    created_at: Date;
    country: string;
}

