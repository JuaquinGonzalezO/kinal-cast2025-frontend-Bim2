export const validateTitle = (title) =>{
    return title.length >= 3 && title.length <=30;


}

export const TitleValidationMessage = 'El titulo debe de tener de 3 a 30 caracteres'