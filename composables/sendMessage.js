import axios from "axios";

export const useSendMessage = ()=>{
    const config = useRuntimeConfig().public;
    const isLoading = ref(false);
    const { selectedConversation, messages } = states().value;

    const sendMessage = async (message)=>{
        const body = ({message})
        isLoading.value = true;
        try{
            const res = await axios.post(`${config.BASE_URL}/api/messages/send/${states().value.selectedConversation?._id}`, body, {
                headers:{
                    "Content-Type": "application/json",
                    jwt: useCookie('jwt').value
                }
            });
           
            states().value.messages.push(res.data)
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = e.response?.data?.error || e?.message;
        }finally{
            isLoading.value = false;
        }
    };

    return{
        sendMessage,
        isLoading
    }
}