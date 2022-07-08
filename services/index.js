import axios from "axios";

export const SERVICE_URL = "https://suntuap-cms.herokuapp.com/api";
export const HOST_URL = "https://suntuap-cms.herokuapp.com";
const BANNER_ENDPOINT = "/banners?populate[0]=Imagen&populate[1]=Boton.URL";
const INFORMACION_ENDPOINT = "/informacion";

const MODAL_ENDPOINT =
  "/modal?populate[0]=BotonModal.link&populate[1]=Imagen&populate=*";
const CONTADOR_ENDPOINT =
  "/contador/?populate[0]=BotonContador.link&populate=*s";
const PROYECCIONES_ENDPOINT = "/proyecciones?populate[0]=poster";
const POPULATE_ALL = "?populate=*";
const SECRETARIAS_ENDPOINT = "/menus-directorio?populate=*";
const DELEGACIONES_ENDPOINT =
  "/delegaciones/?populate[0]=Delegacion&populate[1]=Delegacion.URL";
const DOCUMENTOS_ENDPOINT =
  "/menus-documento?populate[0]=Menu.Submenu&populate[1]=Menu.URL";
const SUNTUAP_MENU_ENDPOINT =
  "/menus-suntuap?populate[0]=Menu.Submenu&populate[1]=Menu.URL";
const PERIODICOS_ENDPOINT = "/periodicos/?populate[0]=Periodico";
const NOTICIAS_ENDPOINT = "/menus-noticia/?populate[0]=Menu.URL";
const VAQUERIAS_ENDPOINT =
  "/menus-vaquerias/?populate[0]=Menu.URL&populate[1]=Menu.Submenu";

export const getSecretarias = async () => {
  let secretarias = await axios.get(SERVICE_URL + SECRETARIAS_ENDPOINT);
  return secretarias.data.data;
};

export const getPeriodicos = async () => {
  let periodicos = await axios.get(SERVICE_URL + PERIODICOS_ENDPOINT);
  return periodicos.data.data;
};

export const getVaquerias = async () => {
  let vaquerias = await axios.get(SERVICE_URL + VAQUERIAS_ENDPOINT);
  return vaquerias.data.data;
};

export const getDelegaciones = async () => {
  let secretarias = await axios.get(SERVICE_URL + DELEGACIONES_ENDPOINT);

  return secretarias.data.data;
};

export const getDocumentos = async () => {
  let documentos = await axios.get(SERVICE_URL + DOCUMENTOS_ENDPOINT);
  return documentos.data.data;
};

export const getSuntuapMenu = async () => {
  let noticias = await axios.get(SERVICE_URL + SUNTUAP_MENU_ENDPOINT);
  return noticias.data.data;
};

export const getNoticiasMenu = async () => {
  let suntuap = await axios.get(SERVICE_URL + NOTICIAS_ENDPOINT);
  return suntuap.data.data;
};

export const getBannerData = async () => {
  let banners = await axios.get(SERVICE_URL + BANNER_ENDPOINT);
  return banners.data.data;
};

export const getInformacion = async () => {
  let info = await axios.get(SERVICE_URL + INFORMACION_ENDPOINT + POPULATE_ALL);
  return info.data.data;
};

export const getModalInfo = async () => {
  let modalInfo = await axios.get(SERVICE_URL + MODAL_ENDPOINT + POPULATE_ALL);
  return modalInfo.data.data;
};
export const getContadorInfo = async () => {
  let contadorData = await axios.get(SERVICE_URL + CONTADOR_ENDPOINT);
  return contadorData.data.data;
};

export const getProyeccionesInfo = async () => {
  let proyeccionData = await axios.get(SERVICE_URL + PROYECCIONES_ENDPOINT);
  return proyeccionData.data.data;
};
