import axios from 'axios';
import { climaActions } from './clima-slice';

export const fetchClimas = () => {
  return async (dispatch) => {
    const { data } = await axios.get(
      'https://api.datos.gob.mx/v1/condiciones-atmosfericas'
    );
    dispatch(climaActions.setClimas(data));
  };
};

export const fetchSelectedClima = (climaId) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://api.datos.gob.mx/v1/condiciones-atmosfericas?_id=${climaId}`
    );

    dispatch(climaActions.setSelectedClima(data));
  };
};
