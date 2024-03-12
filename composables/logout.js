export const logoutUser= ()=>{
    localStorage.removeItem("user");
    useCookie('jwt').value = null;
    navigateTo("/login")
}