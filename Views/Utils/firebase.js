import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCn5XaNEwiE2djr2kavgWp4m686zjsuFbw",
  authDomain: "foodvisor-1b529.firebaseapp.com",
  databaseURL: "https://foodvisor-1b529-default-rtdb.firebaseio.com/",
  projectId: "foodvisor-1b529",
  storageBucket: "foodvisor-1b529.appspot.com",
  messagingSenderId: "1021682423828",
  appId: "1:1021682423828:web:864269e18b981fdc846f01",
};

export const firebaseApp = initializeApp(firebaseConfig);