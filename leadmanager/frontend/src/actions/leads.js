import axios from 'axios';
import {GET_LEADS, DELETE_LEAD} from './types';

export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};

export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
};