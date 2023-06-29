

document.getElementById("title").onclick = () => {
    document.getElementById("title_description").style.display = "";
    document.getElementById("problem_description").style.display = "none";
    document.getElementById("tags_description").style.display = "none";
}

document.getElementById("ProblemTextBox").onclick = () => {
    document.getElementById("title_description").style.display = "none";
    document.getElementById("problem_description").style.display = "";
    document.getElementById("tags_description").style.display = "none";
}

document.getElementById("tagnames").onclick = () => {
    document.getElementById("title_description").style.display = "none";
    document.getElementById("problem_description").style.display = "none";
    document.getElementById("tags_description").style.display = "";
}

document.getElementById("tagnames").onkeyup = () => {
    let text = "<span>";
    let ArrTags = document.getElementById("tagnames").value ;
    ArrTags = ArrTags.split(" ")
    for ( let i = 0; i< ArrTags.length; i++ ) {
        if ( ArrTags[i] == "" ) {}
        else {
            text += `<span class="s-tag rendered-element">${ArrTags[i]}</span>`
        }
    }
    text += "</span>"
    document.getElementById("tags_multiple_box").innerHTML = text

}

document.getElementById("submit-button").onclick = () => {
    let title = document.getElementById("title").value;
    let question = document.getElementById("preview").innerText;
    let tags = document.getElementById("tagnames").value;

    let Validity = []
    
    if ( title == "" ) {
        document.getElementById("title-error").style.display = "";
    }
    else {
        document.getElementById("title-error").style.display = "none";
        Validity.push( true )
    }

    if ( question == "" ) {
        document.getElementById("problem-error").innerHTML = "Problem description cannot be empty."
        document.getElementById("problem-error").style.display = ""
    }
    else if ( question.length <= 20 ) {
        document.getElementById("problem-error").innerHTML = "Problem description must be more 20 characters."
        document.getElementById("problem-error").style.display = ""
    }
    else {
        document.getElementById("problem-error").style.display = "none"
        Validity.push( true )
    }

    if ( tags == "" ) {
        document.getElementById("tag-error").innerHTML = "Tags cannot be empty."
        document.getElementById("tag-error").style.display = ""
    }
    else {
        let tagsArr = tags.split(" ")
        tagsArr = tagsArr.filter( (str) => str != "" )
        if ( tagsArr.length > 5 ) {
            document.getElementById("tag-error").innerHTML = "Tags cannot be more than 5."
            document.getElementById("tag-error").style.display = ""
        }
        else {
            document.getElementById("tag-error").style.display = "none"
            Validity.push( true )
        }
    }

    if ( Validity.length == 3 ) {
        let URL = `/Question`
        axios.post(URL, {
            id_user: document.getElementById("id").value,
            title: document.getElementById("title").value,
            question: document.getElementById("ProblemTextBox").innerHTML,
            tags: document.getElementById("tagnames").value
        })
        .then((results) => {
            window.location.href = `/Question/${results.data.id_question}`
        })
        .catch((err) => {
            console.log(err)
        })
    }

}
