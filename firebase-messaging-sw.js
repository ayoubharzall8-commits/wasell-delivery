importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBMphobaDNm_fz-N2cd1F0lkUMsopiI8Is",
    authDomain: "waselldrivers.firebaseapp.com",
    projectId: "waselldrivers",
    storageBucket: "waselldrivers.firebasestorage.app",
    messagingSenderId: "964113381100",
    appId: "1:964113381100:web:d5363a9b21d2eb897097c9"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification ? payload.notification.title : 'WASELL.COM | طلب جديد 🛵';
    const notificationOptions = {
        body: payload.notification ? payload.notification.body : 'يوجد طلب توصيل جديد بانتظار موافقتك!',
        icon: 'https://cdn-icons-png.flaticon.com/512/2972/2972531.png',
        vibrate: [500, 200, 500, 200, 800],
        data: payload.data
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});