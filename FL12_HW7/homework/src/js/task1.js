let email = prompt("Enter your email", '');
const USER_EMAIL = 'user@gmail.com';
const ADMIN_EMAIL = 'admin@gmail.com';
const USER_PASSWORD = 'UserPass';
const ADMIN_PASSWORD = 'AdminPass';


var isUser = (email === USER_EMAIL);
var isAdmin = (email === ADMIN_EMAIL);

if (isUser || isAdmin) {
    let password = prompt('Password?', '');
    if ((isAdmin && password === ADMIN_PASSWORD) || (isUser && password === USER_PASSWORD)) {

        if (confirm("Want to change password")) {
            let oldPassword = prompt("Write the old password ", "");
            if (oldPassword === password) {

                var newPassword = prompt("Enter a new password", "");
                if (newPassword && newPassword.length > 6) {
                    if (newPassword === prompt("Enter it again", "")) {
                        alert("You have successfully changed your password.");
                    } else {
                        alert("You wrote the wrong password.");
                    }
                } else if (newPassword && newPassword.length < 5) {
                    alert("It’s too short password. Sorry.");
                } else {
                    alert('Canceled');
                }

            } else {
                alert("Wrong old password");
            }
        } else {
            alert("You have failed the change.");
        }
    } else {
        alert("Wrong password");
    }
} else if (!email) {
    alert('Canceled');
} else if (email.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols.");
} else {
    alert("I don't know you");
}