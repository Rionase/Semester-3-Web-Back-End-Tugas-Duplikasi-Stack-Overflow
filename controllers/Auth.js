
const Auth = (req,res,next) => {

    // Apabila user ada Log In
    if ( req.session.user ) {
        
        if ( req.originalUrl.toLowerCase() == "/login" || req.originalUrl.toLowerCase() == "/signup" ) {
            res.redirect("/forbidden")
        }
        else if ( req.originalUrl == "/"  ) {
            res.redirect("/Question/AllQuestion")
        }
        else {
            next()
        }
    }

    // Apabila user tidak Log In
    else {

        // Tambah req.url lagi utk yg tidak log in ga boleh masuk
        if ( req.originalUrl.toLowerCase() == "/about" || req.originalUrl.toLowerCase() == "/question/askquestion" ) {
            res.redirect("/LogIn?status=showPopUp")
        }
        else {
            next()
        }

    }
}

export default Auth