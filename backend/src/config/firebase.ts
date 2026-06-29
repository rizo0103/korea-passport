import { initializeApp, cert, ServiceAccount } from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "../credentials/serviceAccountKey.json";

initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
});

export const auth = getAuth();
export const db = getFirestore();
