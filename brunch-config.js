'use strict';

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app\//,
        'vendor.js': /^node_modules\//
      }
    },

    stylesheets: {
      joinTo: {
        'app.css': /^app\//,
        'vendor.css': /^node_modules\//
      }
    }
  },

  npm: {
    styles: {
      'normalize.css': ['normalize.css']
    }
  },

  paths: {
    watched: ['app', 'vendor']
  },

  plugins: {
    babel: {
      presets: ['es2015', 'react']
    }
  },

  server: {
    command: 'nodemon --ignore app --ignore public server.js',
    port: Number.parseInt(process.env.PORT) || 8000
  }
};
