import axios from "axios";

export const SERVICE_URL = 'https://suntuap-cms.herokuapp.com/api'
export const HOST_URL = 'https://suntuap-cms.herokuapp.com'
const BANNER_ENDPOINT = '/banners?populate[0]=Imagen&populate[1]=Boton.link'
const INFORMACION_ENDPOINT = '/informacion'
const MENUS_ENDPOINT = '/menus'
const MODAL_ENDPOINT = '/modal-inicio?populate[0]=BotonModal.link&populate=*'
const CONTADOR_ENDPOINT = '/contador/?populate[0]=BotonContador.link&populate=*s'
const PROYECCIONE_ENDPOINT = '/proyeccions?populate=*'
const POPULATE_ALL = '?populate=*'

export const getBannerData = async () => {
    let banners = await axios.get(SERVICE_URL + BANNER_ENDPOINT);
    return banners.data.data
}

export const getInformacion = async () => {
    let banners = await axios.get(SERVICE_URL + INFORMACION_ENDPOINT + POPULATE_ALL, { httpAgent: agent });
    return banners.data.data
}
export const getMenus = async () => {
    let menus = await axios.get(SERVICE_URL + MENUS_ENDPOINT + POPULATE_ALL, { httpAgent: agent });
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
    let proyeccionData = await axios.get(SERVICE_URL + PROYECCIONE_ENDPOINT);
    return proyeccionData.data.data
}