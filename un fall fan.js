//this unfans everyone in the room who's already your friend
 
var userlist = API.getUsers();
var peopleinroom = userlist.length;
var userIDs = new Array();
var sortedUsers = new Array();
var self = API.getSelf();
 
for(var i=0; i<peopleinroom;i++) {
        if (userlist[i].relationship == 2 && userlist[i].username != self.username) {
                new UserFanService("", userlist[i].id);
        }
}
