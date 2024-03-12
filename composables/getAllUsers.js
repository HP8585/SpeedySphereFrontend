import axios from 'axios';

export const useGetAllUsers = () => {
  const config = useRuntimeConfig().public;
  const isLoading = ref(false)


  async function getAllUsers() {
    isLoading.value = true;
    try {
      const cookie = useCookie("jwt");
      const id = JSON.parse(localStorage.getItem("user"));
      const res = await axios.get(`${config.BASE_URL}/api/users/${id._id}`, {
        headers: {
          jwt: cookie.value,
        },
      });
     
      states().value.allUsers = res.data;
    } catch (e) {
     
    }finally{
        isLoading.value = false
    }
  };

  const getAllUsersMessages = async ()=>{
    if (states().value.allUsers) {
      await Promise.all(states().value.allUsers.map(async (item) => {
          try {
              const res = await axios.get(`${config.BASE_URL}/api/messages/${item._id}`, {
                  headers: {
                      jwt: useCookie('jwt').value
                  }
              });
              const lastItem = res.data[res.data.length - 1];
              const updatedUser = { ...item, lastMessage: lastItem };
              states().value.allUsers = states().value.allUsers.map((user) => (user._id === item._id ? updatedUser : user));
          } catch (e) {
            states().value.errNotif = true;
            states().value.errText = e.response?.data?.error || e?.message;
          }
      }));
  }
  }

  return{
    getAllUsers,
    isLoading,
    getAllUsersMessages
  }
};

