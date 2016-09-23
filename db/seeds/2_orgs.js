'use strict';

exports.seed = function(knex) {
  return knex('orgs').del()
    .then(() => {
      return knex('orgs').insert([{
        id: 1,
        name: 'Quinault Equality Center',
        address: '482 Yesler Ave Suite C, Seattle, WA 98109',
        email: 'jakebrbell@gmail.com',
        logo_url: 'quinault-equality-center.jpg',
        causes: JSON.stringify(['LGBTQ Issues']),
        desc: 'We strive to make our center a resource to the Indian LGBT youth of Western Washington. Originally associated with the Quinault reservation on the Olympic peninsula, we have expanded our services to other decendents of tribal lands. Along with free STI testing and health information, we are equipped to help with searches for counseling and legal assistance.',
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
        name: 'Save the Pandas',
        address: '8356 Bellingham Drive, Reston, WA 98057',
        email: 'jakebrbell@gmail.com',
        logo_url: 'save-the-pandas.png',
        causes: JSON.stringify(['Animal Welfare', 'Environment']),
        desc: 'For over 15 years, Seattle-based Save the Pandas has worked to raise more than one million dollars for the preservation of diminishing panda habitats around the world. We also run outreach programs aimed at educating the public on the importance of saving these majestic creatures for future generations. We are working toward a day when the future of the species won\'t be in constant peril, but we can\'t do this alone. Please join us!',
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
        name: 'Level Up',
        address: '396 Portland Avenue, Seattle, WA 94583',
        email: 'jakebrbell@gmail.com',
        logo_url: 'level-up.png',
        causes: JSON.stringify(['Education']),
        desc: 'The high-paying jobs of the future will require at least basic knowledge of computers and most likely some programming knowledge as well, but the fast pace of technological change is leaving too many people behind. At Level Up, we offer free computer programming lessons to the under-served populations in our area. We run several after school programs and work with local libraries to reach as many people as possible in our community.',
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
        id: 4,
        name: 'Home Sweet Home',
        address: '2034 Redwood Road, Bellevue, WA 94182',
        email: 'jakebrbell@gmail.com',
        logo_url: 'home-sweet-home.jpg',
        causes: JSON.stringify(['Homelessness']),
        desc: 'At Home Sweet Home, we focus on providing homes for the chronically homeless. These are people who have been living on the streets for more than a year and who have a disabling condition that might include serious mental illness, an addiction or a physical disability or illness. Over the past decade, we have been able to reduce the population of chronically homeless people in Seattle by 91 percent.',
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
        id: 5,
        name: 'Refugee Assistance Seattle',
        address: '228 N. Gaston Street, Seattle, WA 92675',
        email: 'jakebrbell@gmail.com',
        logo_url: 'refugee-assistance-seattle.png',
        causes: JSON.stringify(['Refugees']),
        desc: 'Washington has welcomed over 33,000 refugees since 2003 and last year, Governor Jay Inslee issued a strong proclamation of welcome to refugees from Syria and other countries. Refugee Assistance Seattle exists to help refugee and immigrant families and individuals succeed and thrive in Washington State. We offer free English classes and employment resources.',
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
        id: 6,
        name: 'Girl Rising',
        address: '826 W. 7th Avenue, Suite 2300, Seattle, WA 94521',
        email: 'jakebrbell@gmail.com',
        logo_url: 'girl-rising.jpg',
        causes: JSON.stringify(['Gender Equality','Education']),
        desc: 'Girl Rising is a partnership of organizations committed to narrowing the gender gap in primary and secondary education around the globe. We seek to ensure that, by 2020, all children complete primary schooling, with girls and boys having equal access to free, quality education. There\'s no question that when girls receive a full education an entire community is lifted. ',
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
        id: 7,
        name: 'End Human Trafficking',
        address: '3921 Ravenna Boulevard, Seattle, WA 93402',
        email: 'jakebrbell@gmail.com',
        logo_url: 'end-human-trafficking.jpg',
        causes: JSON.stringify(['Human Trafficking']),
        desc: 'Human trafficking is a global epidemic but it also happens right here in Seattle. The first step toward ending human trafficking begins with raising visibility of the issue in our community, recognizing the signs, and learning what to do if you see or hear something. End Human Trafficking exists to provide resources to empower every member of our community to fight human trafficking and end modern-day slavery.',
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
        id: 8,
        name: 'Seattle Animal Shelter',
        address: '582 S. Jackson Street, Seattle, WA 92092',
        email: 'jakebrbell@gmail.com',
        logo_url: 'seattle-animal-shelter.jpg',
        causes: JSON.stringify(['Animal Welfare']),
        desc: 'Since 1977, the Seattle Animal Shelter has been dedicated to reducing animal suffering caused by people. We seek better treatment of animals in the laboratory, at home, and in the wild. Our volunteers help save the lives of thousands of animals each year by assisting in the direct care of animals, fundraising, reaching out to the community, and fostering animals in their home.',
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
        id: 9,
        name: 'Green Lake Conservation Brigade',
        address: '6721 Latona Avenue, Seattle, WA 93021',
        email: 'jakebrbell@gmail.com',
        logo_url: 'green-lake-conservation-brigade.png',
        causes: JSON.stringify(['Environment']),
        desc: 'We are a group of concerned citizens joined together by our desire to preserve the natural wonder of Green Lake. Since 2004, the Green Lake Conservation Brigade (GLCB) has raised money and awareness for the need to protect the lake and its wildlife. Our efforts have dramatically reduced the amount of pollution that ends up in the lake each year, but we still have a lot to do and we need your help. Join the GLCB today.',
        proposals: JSON.stringify([{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['HTML','CSS', 'JavaScript']
        }, {
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['Designer','Web Developer']
        }]),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }, {
        id: 10,
        name: 'Pathways Home',
        address: '849 Bevan Lane, Tacoma, WA 90657',
        email: 'jakebrbell@gmail.com',
        logo_url: 'pathways-home.png',
        causes: JSON.stringify(['Homelessness']),
        desc: 'Rising rents, income inequality, scarce help for mental illness, and the heroin epidemic have forced more and more people out of their homes and onto the streets. We partner with individuals and local businesses to provide food, temporary shelter, and medical care for the homeless population of King County. With your help, we can assist more individuals get off the street and back on the pathway home.',
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
        id: 11,
        name: 'Safe Haven International',
        address: '538 Cherry Street, Seattle, WA 94564',
        email: 'jakebrbell@gmail.com',
        logo_url: 'safe-haven.png',
        causes: JSON.stringify(['Refugees','Human Trafficking']),
        desc: 'Safe Haven International provides opportunities for refugees, asylees, victims of human trafficking, survivors of torture, and other immigrants to thrive in Seattle. Each year, thousands of people are forced to flee violence and persecution. They have survived against incredible odds. We work with local governments and volunteers to help translate their past experiences into valuable assets for their new communities.',
        proposals: JSON.stringify([{
          name: 'We need a new website',
          description: 'Our website is outdated and no longer working. We are looking for someone who can build us a new one.',
          skills: ['HTML','CSS', 'JavaScript']
        }, {
          name: 'Help us build a mobile app',
          description: 'We want to reach out to younger audiences and would love to build a mobile app. Please help!',
          skills: ['Node.js','React']
        }]),
        created_at: new Date('2016-09-19 21:22:21 UTC'),
        updated_at: new Date('2016-09-19 21:22:21 UTC')
      }, {
        id: 12,
        name: 'Gender Justice Project',
        address: '810 3rd Avenue, Suite 750, Seattle, WA 98104',
        email: 'jakebrbell@gmail.com',
        logo_url: 'gender-justice-project.gif',
        causes: JSON.stringify(['LGBTQ Issues', 'Gender Equality']),
        desc: 'The Gender Justice Project is an effort to create an inclusive city. We seek to end gender and race based inequities in the workforce and in governmental policies, programs, and service delivery. The project envisions a city where a person’s gender, gender identity, and race will no longer determine the ability to earn a living wage, access to housing, or the ability to achieve healthy life outcomes.',
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
