import { app } from "./firebase";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  query,
  getDocs,
  where,
} from "firebase/firestore";

const auth = getAuth(app);

const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const loginWithEmailPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login realizado com sucesso!");
    return { status: 200, message: "Login realizado com sucesso!" };
  } catch (error) {
    console.error("Erro no login:", error);
    return { status: 401, message: "Email ou senha incorretos." };
  }
};

const signUpEmailPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      id: user.uid,
      name,
      email,
      authProvider: "local",
    });
    return { status: 201, message: "Cadastro realizado com sucesso!" };
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    return { status: 400, message: "Erro ao criar conta. Tente novamente." };
  }
};

const resetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Email para a recuperação da senha enviado!");
    return { status: 200, message: "Email de recuperação enviado." };
  } catch (error) {
    console.error("Erro ao enviar email de recuperação:", error);
    return {
      status: 400,
      message: "Erro ao enviar email. Verifique o email digitado.",
    };
  }
};
const logout = () => {
  try {
    signOut(auth);
    return { status: 200, message: "Logout realizado com sucesso!" };
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    return { status: 400, message: "Erro ao realizar logout." };
  }
};
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        authProvider: "google",
      });
    }
    return { status: 200, message: "Login com Google realizado com sucesso!" };
  } catch (error) {
    console.error("Erro ao fazer login com Google:", error);
    return { status: 400, message: "Erro ao fazer login com Google." };
  }
};
export {
  auth,
  loginWithEmailPassword,
  signUpEmailPassword,
  resetPassword,
  logout,
  signInWithGoogle,
};
