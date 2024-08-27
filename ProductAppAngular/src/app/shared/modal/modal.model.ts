// Define an interface for configuring modals
export interface ModalConfig {
    title: string; // The title of the modal, displayed in the header
    type: ModalStatus; // The type of the modal, which determines the styling (e.g., Success, Error, etc.)

    // An optional callback function that gets executed when the submit button is clicked
    onSubmit?: () => void; 
}

// Define an enumeration to represent the different types of modals
export enum ModalStatus {
    Default,  // Default type, typically with a neutral or informational styling
    Success,  // Success type, usually styled with a green background
    Error,    // Error type, usually styled with a red background
    Alert,    // Alert type, typically styled with a blue or informational background
    Warning,  // Warning type, usually styled with a yellow or orange background
}
