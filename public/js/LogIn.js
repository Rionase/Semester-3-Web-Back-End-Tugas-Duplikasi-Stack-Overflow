
document.getElementById("LogInButton").onclick = () => {
    let Email = document.getElementById("email").value ;
    let Password = document.getElementById("password").value ;

    if ( Password == "" ) {
        document.getElementById("password-logo").style.display = "";
        document.getElementById("password-error").style.display = "";
    }
    else {
        document.getElementById("password-logo").style.display = "none";
        document.getElementById("password-error").style.display = "none";
    }

    if ( Email == "" ) {
        document.getElementById("email-logo").style.display = "";
        document.getElementById("email-error").style.display = "";
        document.getElementById("email-error").innerHTML = "Email cannot be empty."
    }
    else {
        axios.post("/LogIn", {
            email: Email,
            password: Password
        })
        .then( (results) => {
            if ( results.data.data == "Terdaftar" ) {
                window.location.href = "/Question/AllQuestion"
            }
            else if ( results.data.data == "Tidak Terdaftar" ) {
                document.getElementById("email-logo").style.display = "";
                document.getElementById("email-error").style.display = "";
                document.getElementById("email-error").innerHTML = "The email or password is incorrect."

            }
        })
    }
 
}