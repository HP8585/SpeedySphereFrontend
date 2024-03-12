import axios from "axios";

export const useSignup = ()=>{
    const isLoading = ref(false),
    config = useRuntimeConfig().public,
    showThanks = ref(false),
    cookie = useCookie('jwt')

    const signup = async (body)=>{
        isLoading.value = true;
        try{
            const res = await axios.post(`${config.BASE_URL}/api/auth/signup`, body, {
                headers:{
                    "Content-Type": "application/json"
                }
            });

            console.log(res.data);
            showThanks.value = true;
            cookie.value = res.data?.jwt;
            localStorage.user = JSON.stringify(res.data?.user);
            states().value.authUser = res.data?.user;
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = e.response?.data?.error || e?.message;
        }finally{
            isLoading.value = false;
        }
    };

    return{
        signup,
        isLoading,
        showThanks
    }
}