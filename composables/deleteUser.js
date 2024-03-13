import axios from "axios";


export const useDeletUser = ()=>{
    const isLoading = ref(false);
    const config = useRuntimeConfig().public;
    
    const deleteUser = async ()=>{
        isLoading.value = true;
        try{
            const res = await axios.delete(`${config.BASE_URL}/api/auth/delete/${states().value.authUser?._id}`);
            console.log(res.data);
            navigateTo('/login');
            useCookie('jwt').value = null;
            localStorage.removeItem('user')
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = e.response?.data?.error || e?.message;
        }finally{
            isLoading.value = false
        }
    };

    return{
        deleteUser
    }
}