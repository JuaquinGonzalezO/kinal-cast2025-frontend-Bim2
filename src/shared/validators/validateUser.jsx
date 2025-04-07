export const validateUser = (user) =>{
 
    const regex = /^\S{3,8}$/;
    return regex.test(password);

}
export const passwordValidationMessage = 'El nombre del usuario debe de tener entre 3 y 8 carateres y no debe de contener espacios'