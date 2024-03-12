
export default defineNuxtRouteMiddleware((to, from)=>{
    const cookie = useCookie('jwt');

    if(!cookie.value  && to.path === "/"){
        return navigateTo('/login')
    }
})