import { useState, createContext, useEffect } from "react";
import firebase from '../services/firebaseConnection';


export const AuthContext = createContext({});

function AuthProvider({ children}){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    //verifica se tem usuario logado
    useEffect(()=>{

        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false)
            }

            setLoading(false)
        }

        loadStorage();
        
    }, [])

    //função apra cadastrar usúario
    async function signUp(email, password, nome){
        setLoadingAuth(true);

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value) =>{
            let uid = value.user.uid;

            await firebase.firestore().collection('users')
            .doc(uid).set({
                nome:nome,
                avatarUrl: null,
            })
            .then(() => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl:null,
                };

                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        } )
        .catch((error) =>{
            console.log(error);
            setLoadingAuth(false);
        })

    }

    //salvar item no loval storage
    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    //deslogar usuario
    async function signOut(){
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{signed: !!user, setUser, loading,  signUp , signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;