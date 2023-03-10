import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        updateUserProfile,
        verifyEmail,
        signInWithGoogle,
        signInUser,
        logOut,
        resetPassword,
        loading,
        user,
        signInWithGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;