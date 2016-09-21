import axios from 'axios';

export const addUser = (firstName) => ({
  type: 'ADD_USER',
  firstName
});

const receiveOrgs = (response) => ({
  type: 'RECEIVE_ORGS',
  response
});

export const fetchOrgs = () => (dispatch) => {
  axios.get('/api/orgs')
    .then((res) => {
      dispatch(receiveOrgs(res.data));
    })
    .catch((err) => {
      console.error(err);
    });
};
