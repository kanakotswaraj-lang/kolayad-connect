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

// ബാക്ക്ഗ്രൗണ്ടിൽ നോട്ടിഫിക്കേഷൻ വരുമ്പോൾ ഒരേയൊരു നോട്ടിഫിക്കേഷൻ മാത്രം ലോഗോ സഹിതം കാണിക്കാൻ
messaging.onBackgroundMessage((payload) => {
  console.log('Background Message received: ', payload);
  
  // നോട്ടിഫിക്കേഷൻ ഡാറ്റയോ അല്ലെങ്കിൽ നോട്ടിഫിക്കേഷൻ ഒബ്‌ജക്ടോ എടുക്കുക
  const notificationTitle = payload.notification?.title || payload.data?.title || 'കോളയാട് കണക്ട് അറിയിപ്പ്';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || '',
    icon: 'https://kolayadconnect.in/logo.png',
    badge: 'https://kolayadconnect.in/logo.png',
    tag: 'kolayad-connect-notification' // ഒരേപോലെയുള്ള നോട്ടിഫിക്കേഷനുകൾ ഡ്യൂപ്ലിക്കേറ്റ് വരാതിരിക്കാൻ
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
