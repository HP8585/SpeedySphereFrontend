import axios from "axios"

export const fetchEmojisInit = ()=>{

    const searchInput = useState('searchInput', ()=> null);

    const emojisShown = useState('emojisWindow', ()=> false);

    const emojis = useState('emojis', ()=> []);

    const apiKey = 'e7e9794069113ca546ffeebe53cc57b4fb4490fd';


    const fetchEmojis = async ()=>{
        try{
            const response = await axios.get(`https://emoji-api.com/emojis?access_key=${apiKey}`);
    
           
            emojis.value.push(...response.data)
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = "Couldn't load the emojis";
        }
    };

    const searchFetch = async ()=>{
        try{
            const response = await axios.get(`https://emoji-api.com/emojis?search=${searchInput.value}&access_key=${apiKey}`);
            emojis.value = response.data;
        }catch(e){
            states().value.errNotif = true;
            states().value.errText = "Couldn't load the emoji you're looking for, try again later!";
        }
    };

    watch(()=> searchInput.value, ()=>{
        setTimeout(() => {
            searchFetch();
        }, 1000);
    })

    return{
        fetchEmojis,
        emojis,
        searchInput,
        emojisShown
    }
}