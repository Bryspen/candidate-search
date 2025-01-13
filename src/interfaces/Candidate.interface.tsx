// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    avatar_url: string;
    login: string;
    id: number;
    name: string;
    location: string;
    email: string;
    html_url: string;
    company: string;
    bio: string;
}