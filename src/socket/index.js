const io = require('socket.io')(8800, {
    cors :{
        origin: "http://localhost:3000",
    },
});

let activeUsers = [];

io.on("connection", (socket)=> {

    //add new user
    //registers a user into our socket server
    socket.on('new-user-add', (newUserId)=> {
        if(newUserId !== null) {
            console.log("NOT NULL");
            //if user wasnt added previously
        if(!activeUsers.some((user) => user.userId === newUserId))
        {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
            });
        }
        console.log("Connected Users", activeUsers);
        //emitting to the client side
        io.emit('get-users', activeUsers);
        }
        
    });

    //sending message
    socket.on("send-message", (data) => {
        const {receiverId} = data;
        //searching for receiver inside the activeusers
        const user = activeUsers.find((user) => user.userId === receiverId)
        //console.log("Active Users", activeUsers);
        //console.log("This the user", receiverId)
        //console.log("Sending from socket to : ", receiverId)
        //console.log("Data", data)
        if(user) {
            //console.log("user socket id", user.socketId)
            io.to(user.socketId).emit('receive-message', data)
            //console.log("In user", data)
        }
    })


    //when someone is disconnected from the server
    socket.on("disconnect", ()=> {
        //from all the users, filter out that specific user that is trying to disconnect
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        console.log("User Disconnected", activeUsers);
        io.emit('get-users', activeUsers);
    })

})