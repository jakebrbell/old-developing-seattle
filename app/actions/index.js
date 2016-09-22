import axios from 'axios';

export const createNewUser = (formFields) => (dispatch) => {
  const {
    firstName,
    lastName,
    email,
    password,
    title
  } = formFields;

  const newUser = {
    firstName,
    lastName,
    email,
    password,
    title,
    causes: [],
    skills: []
  }

  if (formFields.animalWelfare) {
    newUser.causes.push('Animal Welfare')
  }

  if (formFields.education) {
    newUser.causes.push('Education')
  }

  if (formFields.environment) {
    newUser.causes.push('Environment')
  }

  if (formFields.genderEquality) {
    newUser.causes.push('Gender Equality')
  }

  if (formFields.homelessness) {
    newUser.causes.push('Homelessness')
  }

  if (formFields.humanTrafficking) {
    newUser.causes.push('Human Trafficking')
  }

  if (formFields.lgbtqIssues) {
    newUser.causes.push('LGBTQ Issues')
  }

  if (formFields.refugees) {
    newUser.causes.push('Refugees')
  }

  if (formFields.skill1) {
    newUser.skills.push('Skill 1')
  }

  if (formFields.skill2) {
    newUser.skills.push('Skill 2')
  }

  if (formFields.skill3) {
    newUser.skills.push('Skill 3')
  }

  if (formFields.skill4) {
    newUser.skills.push('Skill 4')
  }

  if (formFields.skill5) {
    newUser.skills.push('Skill 5')
  }

  if (formFields.skill6) {
    newUser.skills.push('Skill 6')
  }

  if (formFields.skill7) {
    newUser.skills.push('Skill 7')
  }

  if (formFields.skill8) {
    newUser.skills.push('Skill 8')
  }

  axios.post('/api/users', newUser)
    .then((res) => {
      dispatch(addUser(res.data));
    })
    .catch((err) => {
      console.error(err);
    });
};

const addUser = (user) => ({
  type: 'ADD_USER',
  user
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
