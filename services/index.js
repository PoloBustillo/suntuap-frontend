import axios from "axios";

export const SERVICE_URL = 'https://suntuap-cms.herokuapp.com/api'
export const HOST_URL = 'https://suntuap-cms.herokuapp.com'
const BANNER_ENDPOINT = '/banners?populate[0]=Imagen&populate[1]=Boton.link'
const INFORMACION_ENDPOINT = '/informacion'
const MENUS_ENDPOINT = '/menus'
const MODAL_ENDPOINT = '/modal?populate[0]=BotonModal.link&populate[1]=Imagen&populate=*'
const CONTADOR_ENDPOINT = '/contador/?populate[0]=BotonContador.link&populate=*s'
const PROYECCIONES_ENDPOINT = '/proyecciones?populate[0]=poster'
const POPULATE_ALL = '?populate=*'
const SECRETARIAS_ENDPOINT = '/secretarias'


export const getSecretarias = async () => {
    let secretarias = await axios.get(SERVICE_URL + SECRETARIAS_ENDPOINT);
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
export const getMenus = async () => {
    let menus = await axios.get(SERVICE_URL + MENUS_ENDPOINT + POPULATE_ALL);
    return menus
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