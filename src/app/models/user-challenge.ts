export class UserDetails {
    public readonly id: string;
    public firstName: string;
    public lastName: string;
    public emailId: string;

    get fullName(): string {
        return `Full Name is : ${this.firstName} ${this.lastName}`
    }

    constructor(firstName: string, lastName: string, emailId: string, id: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
        this.id = id;
    }

    public isEmailIdMatching(emailId: string) {
        if (emailId && emailId.toLowerCase() === this.emailId.toLowerCase()) {
            console.log("Email Id Matched Successfully");
        } else {
            console.log("Email Id not matched");
        }
    }
}