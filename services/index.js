import axios from "axios";

export const SERVICE_URL = 'https://suntuap-cms.herokuapp.com/api'
export const HOST_URL = 'https://suntuap-cms.herokuapp.com'
const BANNER_ENDPOINT = '/banners?populate[0]=Imagen&populate[1]=Boton.URL'
const INFORMACION_ENDPOINT = '/informacion'

const MODAL_ENDPOINT = '/modal?populate[0]=BotonModal.link&populate[1]=Imagen&populate=*'
const CONTADOR_ENDPOINT = '/contador/?populate[0]=BotonContador.link&populate=*s'
const PROYECCIONES_ENDPOINT = '/proyecciones?populate[0]=poster'
const POPULATE_ALL = '?populate=*'
const SECRETARIAS_ENDPOINT = '/menus-directorio?populate=*'
const DELEGACIONES_ENDPOINT = '/delegaciones/?populate[0]=Delegacion&populate[1]=Delegacion.URL'


export const getSecretarias = async () => {
    let secretarias = await axios.get(SERVICE_URL + SECRETARIAS_ENDPOINT);
    return secretarias.data.data
}

export const getDelegaciones = async () => {
    let secretarias = await axios.get(SERVICE_URL + DELEGACIONES_ENDPOINT);

    return secretarias.data.data
}

export const getBannerData = async () => {
    let banners = await axios.get(SERVICE_URL + BANNER_ENDPOINT);
    return banners.data.data
}

export const getInformacion = async () => {
    let banners = await axios.get(SERVICE_URL + INFORMACION_ENDPOINT + POPULATE_ALL);
    return banners.data.data
}

export const getModalInfo = async () => {
    let modalInfo = await axios.get(SERVICE_URL + MODAL_ENDPOINT + POPULATE_ALL);
    return modalInfo.data.data
}
export const getContadorInfo = async () => {
    let contadorData = await axios.get(SERVICE_URL + CONTADOR_ENDPOINT);
    return contadorData.data.data
}

export const getProyeccionesInfo = async () => {
    let proyeccionData = await axios.get(SERVICE_URL + PROYECCIONES_ENDPOINT);
    return proyeccionData.data.data
}