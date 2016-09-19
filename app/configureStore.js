import { createStore } from 'redux';
import reducers from './reducers';

const configureStore = () => {
  const persistedState = {
    orgs: [
      {
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        logo: 'https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg',
        causes: ['Animal Welfare', 'Environment'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: [{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer', 'Web Developer']
        }, {
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer', 'Web Developer']
        }]
      }, {
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        logo: 'http://www.zepfcenter.org/clientuploads/news/end-human-trafficking.jpg',
        causes: ['Human Trafficking'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: [{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer', 'Web Developer']
        }, {
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer', 'Web Developer']
        }]
      }, {
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        logo: 'https://s-media-cache-ak0.pinimg.com/236x/a4/89/c8/a489c8a9fa06e2ae1ca1dbb5f58dcd08.jpg',
        causes: ['Education'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: [{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer', 'Web Developer']
        }, {
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer', 'Web Developer']
        }]
      }
    ]
  };

  return createStore(reducers, persistedState);
};

export default configureStore;
