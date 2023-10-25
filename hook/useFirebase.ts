// Codes by mahdi tasha
// Importing part
import {FirebaseApp, initializeApp} from "@firebase/app";
import {Database, DatabaseReference, getDatabase, ref} from "@firebase/database";
import {FirebaseOptions} from "@firebase/app-types";

// Creating and exporting useFirebase hook as default
export default function useFirebase(path:string):DatabaseReference {
    // Config of firebase
    const firebaseConfig:FirebaseOptions = {
        apiKey: "AIzaSyAqfQlW53qry_73g2eO7anT9d0rfcbnBMg",
        authDomain: "coffee-catch-up.firebaseapp.com",
        databaseURL: "https://coffee-catch-up-default-rtdb.firebaseio.com",
        projectId: "coffee-catch-up",
        storageBucket: "coffee-catch-up.appspot.com",
        messagingSenderId: "945723052877",
        appId: "1:945723052877:web:75849f59b8b4a6648a1d04",
        measurementId: "G-8T2GJRD7ZP"
    };

    // Initializing firebase
    const app:FirebaseApp = initializeApp(firebaseConfig);

    // Setting firebase
    const database:Database = getDatabase();

    // Defining reference to database
    const databaseReference:DatabaseReference = ref(database, path);

    // Returning database reference
    return databaseReference;
}