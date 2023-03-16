import * as yup from 'yup';

export const validationSchema = yup.object({
    country: yup.string(),
    email: yup.string().email('El formato es incorrecto').required('El email es requerido'),
    password: yup.string().required('El password es requerido'),
}) 