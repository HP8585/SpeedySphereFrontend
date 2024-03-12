

export const states = ()=> useState('states', ()=>({
    authUser: null,
    allUsers: null,
    selectedConversation: {
        _id: 21
    },
    messages: [],
    onlineUsers: [],
    socket: null,
    message: "",
    chatsShown: false,
    sidebarOn: "sidebar",
    notificationSound:  true,
    errNotif: false,
    errText: "",
    searchFocused: false
}))