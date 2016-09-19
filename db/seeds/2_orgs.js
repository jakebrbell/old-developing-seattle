'use strict';

exports.seed = function(knex) {
  return knex('orgs').del()
    .then(() => {
      return knex('orgs').insert([{
        id: 1,
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        email: 'first.company@name.com',
        logo_url: 'https://s-media-cache-ak0.pinimg.com/564x/5a/bd/f4/5abdf4f571593356b4a27339529798d0.jpg',
        causes: JSON.stringify(['Animal Welfare', 'Environment']),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: JSON.stringify([{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer','Web Developer']
        }, {
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer','Web Developer']
        }]),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }, {
        id: 2,
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        email: 'second.company@name.com',
        logo_url: 'http://www.zepfcenter.org/clientuploads/news/end-human-trafficking.jpg',
        causes: JSON.stringify(['Human Trafficking']),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: JSON.stringify([{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer','Web Developer']
        }, {
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer','Web Developer']
        }]),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }, {
        id: 3,
        name: 'Company Name',
        address: '1260 Republican Street, Seattle, WA 98109',
        email: 'third.company@name.com',
        logo_url: 'https://s-media-cache-ak0.pinimg.com/236x/a4/89/c8/a489c8a9fa06e2ae1ca1dbb5f58dcd08.jpg',
        causes: JSON.stringify(['Education']),
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        proposals: JSON.stringify([{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer','Web Developer']
        }, {
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer','Web Developer']
        }]),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('orgs_id_seq', (SELECT MAX(id) FROM orgs));"
      );
    });
};
