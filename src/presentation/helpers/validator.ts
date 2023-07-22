/// regular expression validate email only by @ and .
const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);


export class Validator {
    static validateEmail = (email: string): boolean => {
        return emailRegex.test(email);
    }
    static validatePassword = (password: string): boolean => {
        console.log(password);
        return password.length >= 8;
    }
    static validatePrice = (price: number): boolean => {
        return price > 0;
    }
}
