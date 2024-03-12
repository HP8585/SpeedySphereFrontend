

export const states = ()=> useState('states', ()=>({
    authUser: JSON.parse(localStorage.getItem('user')) || null,
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
    notificationSound: localStorage.notificationSound || true,
    errNotif: false,
    errText: "",
    searchFocused: false
}))