import axios from "axios";

export const useLogin = ()=>{
    const isLoading = ref(false);
    const config = useRuntimeConfig().public;
    const showThanks = ref(false);
    
    async function login(body){
        isLoading.value = true;
        const jwt = useCookie('jwt')
        try{
            const res = await axios.post(`https://speedysphere-backend.vercel.app/api/auth/login`, body);

          
            localStorage.user = JSON.stringify(res.data?.user);
            states().value.authUser = res.data?.user;
            jwt.value = res.data?.jwt;
            showThanks.value = true
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = e.response?.data?.error || e?.message;
        }finally{
            isLoading.value = false;
        }
    };

    return{
        login,
        showThanks,
        isLoading
    }
}