import { Children, createContext } from "react";
import { getAuth } from 'firebase/auth'
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {
    const authInfo = {
        displayName: 'akash',
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;