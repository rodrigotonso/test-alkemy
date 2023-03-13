import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup.string().email('El formato es incorrecto').required('El email es requerido'),
    password: yup.string().required('El password es requerido'),
    cofirmPassword: yup.string().required('Debe confirmar la password'),
}) 