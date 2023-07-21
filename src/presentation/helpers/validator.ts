/// regular expression validate email
const emailRegex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+$/);
/// regular expression validate password should be 8 characters long and contain at least 1 letter and 1 number
const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

export class Validator {
    static validateEmail = (email: string): boolean => {
        return emailRegex.test(email);
    }
    static validatePassword = (password: string): boolean => {
        return passwordRegex.test(password);
    }
    static validatePrice = (price: number): boolean => {
        return price > 0;
    }
    static validateId = (id: string): boolean => {
        return id.length>0;
    }
}
