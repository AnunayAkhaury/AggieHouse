import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state
    const auth = getAuth(); // Assuming Firebase is already initialized elsewhere in your application

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Set loading to false once user is fetched
        }, (error) => {
            console.error('Auth state change failed:', error);
            setLoading(false); // Ensure loading is false even if there is an error
        });

        return () => unsubscribe(); // Clean up the subscription
    }, []);

    return { user, loading }; // Return both user and loading state
};