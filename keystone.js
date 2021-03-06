require('dotenv').config()

var keystone = require('keystone');

keystone.init({

  'name': 'Keystone Demo',
  'brand': 'Demo',

  'less': 'public',
  'static': 'public',

  'views': 'templates/views',
  'view engine': 'jade',

  'auto update': false,
  'mongo': process.env.MONGO_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/keystone-demo',
  'cloudinary config': 'cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo',

  'session': true,
  'auth': true,
  'cookie secret': process.env.COOKIE_SECRET || 'demo',

  'ga property': process.env.GA_PROPERTY,
  'ga domain': process.env.GA_DOMAIN,

  'chartbeat property': process.env.CHARTBEAT_PROPERTY,
  'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

keystone.set('locals', {
  _: require('lodash'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable,
  ga_property: keystone.get('ga property'),
  ga_domain: keystone.get('ga domain'),
  chartbeat_property: keystone.get('chartbeat property'),
  chartbeat_domain: keystone.get('chartbeat domain')
});


keystone.start();
