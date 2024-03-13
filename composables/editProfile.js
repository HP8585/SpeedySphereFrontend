import axios from 'axios';


export const useEditProfile = ()=>{
    const isLoading = ref(false);
    const config = useRuntimeConfig().public;

    const editProfile = async (body)=>{
        isLoading.value = true;
        try{
            const res = await axios.post(`${config.BASE_URL}/api/auth/edit/${states().value.authUser?._id}`, body, {
                headers:{
                    jwt: useCookie("jwt").value,
                    "Content-Type": "application/json"
                }
            })

            states().value.authUser = res.data.user;
            localStorage.user = JSON.stringify(res.data.user);
            states().value.sidebarOn = "settings";
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = e?.message
        }finally{
            isLoading.value = false;
        }
    }

    return{
        editProfile,
        isLoading
    }
}