export interface ContactUs {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
}

export interface NewsLetter {
    email: string;
}

export interface Social {
    socialMedia: string
    link: string
    iconLight: string
    iconDark: string
    isActive: boolean
}