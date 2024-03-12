import axios from "axios";

export const useGetMessages = ()=>{
    const isLoading = ref(false);
    const config = useRuntimeConfig().public;

    const getMessages = async ()=>{
        isLoading.value = true;
        try{
            const res = await axios.get(`${config.BASE_URL}/api/messages/${states().value.selectedConversation._id}`,{
                headers:{
                    jwt: useCookie('jwt').value
                }
            });

           
            states().value.messages = res.data;
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = e.response?.data?.error || e?.message;
        }finally{
            isLoading.value = false;
        }
    };

    return{
        getMessages,
        isLoading
    }
}