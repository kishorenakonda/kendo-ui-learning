import { UserDetails } from "./user-challenge";

export class Admin extends UserDetails {
    constructor(firstname: string, lastname: string, emailid: string, id: string) {
        super(firstname, lastname, emailid, id);
        this.firstName = firstname;
        this.lastName = lastname;
        this.emailId = emailid;
    }
}

export class Guest implements UserDetails {
    public firstName: string;
    public lastName: string;
    public emailId: string;
    public id: string;

    constructor(firstname: string, lastname: string, emailid: string, id: string) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.emailId = emailid;
        this.id = id;
    }

    public isEmailIdMatching(emailId: string): boolean {
        return this.emailId === emailId;
    }

    get fullName(): string {
        return `Full Name of Guest : ${this.firstName} ${this.lastName}`;
    }

}