enum Users {
  NormalUser,
  PayedUser,
  AdminUser,
  MegaUser,
}

const myUser = Users.AdminUser;
console.log(myUser);

enum User {
  NormalUser = 5,
  PayedUser,
  AdminUser,
  MegaUser,
}

const myOtherUser = User.PayedUser;
console.log(myOtherUser);

enum UserStatic {
  NormalUser = 'normal',
  PayedUser = 'payed',
  AdminUser = 'admin',
  MegaUser = 'mega'
}

const myLastUser = UserStatic.MegaUser;
console.log(myLastUser);

