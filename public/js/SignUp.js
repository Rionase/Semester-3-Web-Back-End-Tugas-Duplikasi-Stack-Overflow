document.getElementById("SignUpButton").onclick = () => {

    let DisplayName = document.getElementById("display-name").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;


    if ( DisplayName == "" ) {
        document.getElementById("display-name-logo").style.display = "";
        document.getElementById("display-name-error").style.display = "";
        document.getElementById("display-name-validity").value = "invalid"
    }
    else {
        document.getElementById("display-name-logo").style.display = "none";
        document.getElementById("display-name-error").style.display = "none";
        document.getElementById("display-name-validity").value = "valid"
    }

    if ( Email == "" ) {
        document.getElementById("email-error").innerHTML = "Email cannot be empty."
        document.getElementById("email-logo").style.display = "";
        document.getElementById("email-error").style.display = "";
        document.getElementById("email-validity").value = "invalid"
    }
    else {
        axios.get( `/SignUp/api/checkEmail/${Email}` )
        .then( (results) => {
            if ( results.data.data == "Terdaftar" ) {
                document.getElementById("email-error").innerHTML = "Email already registered with another account."
                document.getElementById("email-logo").style.display = "";
                document.getElementById("email-error").style.display = "";
                document.getElementById("email-validity").value = "invalid"
            }
            else if ( results.data.data == "Tidak Terdaftar" ) {
                document.getElementById("email-logo").style.display = "none";
                document.getElementById("email-error").style.display = "none";
                document.getElementById("email-validity").value = "valid"
            }

            // Method utk register diletakkan setelah fetching karena axios bersifat async, akan keluar terakhir
            SignUpValid()

        })
        .catch( (err) => {
            console.log(err)
        })
    }

    if ( Password == "" ) {
        document.getElementById("password-logo").style.display = "";
        document.getElementById("password-error").style.display = "";
        document.getElementById("password-validity").value = "invalid"
    }
    else {
        document.getElementById("password-logo").style.display = "none";
        document.getElementById("password-error").style.display = "none";
        document.getElementById("password-validity").value = "valid"
    }  

}

function SignUpValid() {
    let DisplayNameValidity = document.getElementById("display-name-validity").value;
    let EmailValidity = document.getElementById("email-validity").value;
    let PasswordValidity = document.getElementById("password-validity").value;

    if ( DisplayNameValidity == "valid" && EmailValidity == "valid" && PasswordValidity == "valid" ) {
        axios.post("/SignUp", {
            email: document.getElementById("email").value,
            display_name: document.getElementById("display-name").value,
            password: document.getElementById("password").value
        })
        .then( (results) => {
            window.location.href = "/About"
        })
        .catch( (err) => {
            console.log(err)
        })
    }

}