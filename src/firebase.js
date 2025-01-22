import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Add only the services you need
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'API-KEY-HERE',
  authDomain: 'AUTH-DOMAIN-HERE',
  projectId: 'PROJECT-ID-HERE',
  storageBucket: 'STORAGE-BUCKET-HERE',
  messagingSenderId: 'MESSAGING-SENDER-ID-HERE',
  appId: 'APP-ID-HERE',
  measurementId: 'MEASUREMENT-ID-HERE',
};

const firebaseApp = initializeApp(firebaseConfig);

// Exporting Firebase services for use in app
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { firebaseApp, auth, db, analytics };
