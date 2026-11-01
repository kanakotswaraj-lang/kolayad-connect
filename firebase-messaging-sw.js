// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCedpjN9Urtc4V0bQhsnJof7hVPvEbHjbk",
  authDomain: "kolayad-connect.firebaseapp.com",
  projectId: "kolayad-connect",
  storageBucket: "kolayad-connect.firebasestorage.app",
  messagingSenderId: "400179608074",
  appId: "1:400179608074:web:b6f5c269d60662efcdfdf3"
});

const messaging = firebase.messaging();

// ഉപയോക്താക്കൾ ആപ്പ് തുറക്കാതെ ഇരിക്കുമ്പോൾ വരുന്ന നോട്ടിഫിക്കേഷൻ കൈകാര്യം ചെയ്യാൻ
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message received: ', payload);
  const notificationTitle = payload.notification.title || 'കോളയാട് കണക്ട് അറിയിപ്പ്';
  const notificationOptions = {
    body: payload.notification.body || '',
    icon: 'https://kolayadconnect.in/logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// നോട്ടിഫിക്കേഷനിൽ ക്ലിക്ക് ചെയ്യുമ്പോൾ ആപ്പ് ഓപ്പൺ ആകാനുള്ള കോഡ്
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
