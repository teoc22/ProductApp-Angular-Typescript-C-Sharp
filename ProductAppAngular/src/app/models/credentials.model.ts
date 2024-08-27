// Interface to represent user credentials for authentication
export interface Credentials {
    username: string; // The username or email of the user
    password: string; // The password associated with the user account
}

// Interface to represent the structure of data needed to update a password
// This interface extends Credentials, meaning it includes all properties of Credentials (username and password)
// and adds an additional property for the new password
export interface UpdatePassword extends Credentials {
    newPassword: string; // The new password that the user wants to set
}
