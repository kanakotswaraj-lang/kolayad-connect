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
    icon: payload.notification.image || 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=300&q=80'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
