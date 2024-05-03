const admin = require('firebase-admin');

const serviceAccount = require('./va-computers-final-firebase-adminsdk-yyy8s-ce1325eac1.json');
const serviceAccountNew = require('./va-computers-final-firebase-adminsdk-yyy8s-d1ce8e8c8f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  credential: admin.credential.cert(serviceAccountNew),
  storageBucket: 'va-computers-final.appspot.com',
});

const storage = admin.storage();
const bucket = storage.bucket();

module.exports = bucket;