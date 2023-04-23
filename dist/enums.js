var Users;
(function (Users) {
    Users[Users["NormalUser"] = 0] = "NormalUser";
    Users[Users["PayedUser"] = 1] = "PayedUser";
    Users[Users["AdminUser"] = 2] = "AdminUser";
    Users[Users["MegaUser"] = 3] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
var User;
(function (User) {
    User[User["NormalUser"] = 5] = "NormalUser";
    User[User["PayedUser"] = 6] = "PayedUser";
    User[User["AdminUser"] = 7] = "AdminUser";
    User[User["MegaUser"] = 8] = "MegaUser";
})(User || (User = {}));
var myOtherUser = User.PayedUser;
console.log(myOtherUser);
var UserStatic;
(function (UserStatic) {
    UserStatic["NormalUser"] = "normal";
    UserStatic["PayedUser"] = "payed";
    UserStatic["AdminUser"] = "admin";
    UserStatic["MegaUser"] = "mega";
})(UserStatic || (UserStatic = {}));
var myLastUser = UserStatic.MegaUser;
console.log(myLastUser);
