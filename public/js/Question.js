
function LoadPreviewQuestion( parameter ) {
    let text = parameter
    text = text.replaceAll(`<pre class="s-code-block markdown">`, " ");
    text = text.replaceAll(`</pre>`, " ");
    text = text.replaceAll(`<code>`, " ");
    text = text.replaceAll(`</code>`, " ");
    text = text.replaceAll(`<br>`, " ");
    text = text.replaceAll(`</span>`, " ")
    text = text.replaceAll(`<span class="hljs-symbol">`, " ")
    text = text.replaceAll(`<span class="hljs-code">`, " ")
    text = text.replaceAll(`</span>`, " ")
    text = text.replaceAll(`<font color="#2f3337">`, " ")
    text = text.replaceAll(`<font color="#525960">`, " \\n ")
    text = text.replaceAll('</font>', " ")
    let Arr = text.split(" ")
    let EndArr = Arr.filter( (str) => str != "" )
    
    let PreviewText = "<p>"
    for ( let i = 0 ; i < EndArr.length ; i++ ) {
        if ( EndArr[i] == "`" ) {
            let index = EndArr.indexOf("`",i+1)
            if ( index == -1 ) {
                if ( EndArr[i] == "\\n" ) {
                    PreviewText += "<br>"
                }
                else if ( EndArr[i] == "\\t" ) {
                    PreviewText += `<label style="padding-left: 4em;"></label>`
                }
                else {
                    PreviewText += EndArr[i] + " "
                }
            }
            else {
                PreviewText += "<code>"
                for ( let j = i+1; j < index; j++ ) {
                    if ( EndArr[j] == "\\n" ) {
                        PreviewText += "<br>"
                    }
                    else if ( EndArr[j] == "\\t" ) {
                        PreviewText += `<label style="padding-left: 4em;"></label>`
                    }
                    else {
                        PreviewText += EndArr[j] + " "
                    }
                }
                PreviewText += "</code>"
                i = index 
            }
        }

        else if ( EndArr[i] == "```" ) {
            let index = EndArr.indexOf("```",i+1)
            if ( index == -1 ) {
                if ( EndArr[i] == "\\n" ) {
                    PreviewText += "<br>"
                }
                else if ( EndArr[i] == "\\t" ) {
                    PreviewText += `<label style="padding-left: 4em;"></label>`
                }
                else {
                    PreviewText += EndArr[i] + " "
                }
            }
            else {
                PreviewText += "</p><pre><code>"
                for ( let j = i+1; j < index; j++ ) {
                    if ( EndArr[j] == "\\n" ) {
                        PreviewText += "<br>"
                    }
                    else if ( EndArr[j] == "\\t" ) {
                        PreviewText += `<label style="padding-left: 4em;"></label>`
                    }
                    else {
                        PreviewText += EndArr[j] + " "
                    }
                }
                PreviewText += "</code></pre><p>"
                i = index 
            }
        }

        else {
            if ( EndArr[i] == "\\n" ) {
                    PreviewText += "<br>"
                }
                else if ( EndArr[i] == "\\t" ) {
                    PreviewText += `<label style="padding-left: 4em;"></label>`
                }
                else {
                    PreviewText += EndArr[i] + " "
                }
        }

    }
    PreviewText += "</p>"
    PreviewText.replaceAll("<p></p>", "")
    return PreviewText

}

function LoadTags( parameter ) {
    let ArrTags = parameter.split(" ")
    let TagsHTML = ""
    for ( let i = 0 ; i < ArrTags.length ; i++ ) {
        TagsHTML += `<a class="post-tag js-gps-track">${ArrTags[i]}</a>`
    }
    return TagsHTML
}

function formatTime(parameter) {
    let now = new Date()
    let CreatedAt = new Date(parameter)
    let seconds = (now - CreatedAt) / 1000
    
    let time = {};
    time.seconds = seconds % 60;
    let minutes = (seconds - time.seconds) / 60;
    time.minutes = minutes % 60;
    let hours = (minutes - time.minutes) / 60;
    time.hours = hours % 24;
    time.days = (hours - time.hours) / 24;
    
    let texttime = ""
    if ( time.days > 0 ) {
        texttime = CreatedAt.toString().slice(4, 15) + " at " + CreatedAt.toString().slice(16, 21)
    }
    else if ( time.hours > 0 ) {
        texttime = Math.round(time.hours) + " hours ago"
    }
    else if ( time.minutes > 0 ) {
        texttime = Math.round(time.minutes) + " mins ago"
    }
    else {
        texttime = Math.round(time.seconds) + " secs ago"
    }
    return texttime

}

function VotesQuestion(parameter) {
    axios.post("/Votes/api/Question/", {
        id_question: document.getElementById("question-id").value,
        status: parameter
    })
    .then((results) => {
        if ( results.data.status == "Votes Up" ) {
            document.getElementById("question-vote-up").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer fc-theme-primary"
            document.getElementById("question-vote-down").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
        }
        else if ( results.data.status == "Votes Down" ) {
            document.getElementById("question-vote-up").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
            document.getElementById("question-vote-down").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer fc-theme-primary"
        }
        else if ( results.data.status == "None" ) {
            document.getElementById("question-vote-up").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
            document.getElementById("question-vote-down").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
        }
        LoadCountVotes()
    })
    .catch((err) => {
        console.log(err)
    })
}

function SubmitAnswer () {
    if ( document.getElementById("preview").innerText.length <= 20 ) {
        document.getElementById("problem-error").innerHTML = "Problem description must be more 20 characters."
        document.getElementById("problem-error").style.display = ""
    }
    else { 
        axios.post("/Answer/", {
            answer: document.getElementById("ProblemTextBox").innerHTML,
            id_question: document.getElementById("question-id").value
        })
        .then( (results) => {
            window.location.reload()
        } )
    }
}

function LoadQuestion () {
    let URL = `/Question/api/${document.getElementById("question-id").value}`
    axios.get( URL )
    .then((results) => {
        console.log(results.data)
        if ( results.data.msg == "Found" ) {
            document.getElementById("question-title").innerHTML = results.data.question.title;
            document.getElementById("question-description").innerHTML = LoadPreviewQuestion( results.data.question.question )
            document.getElementById("question-tag").innerHTML = LoadTags( results.data.question.tags )
            document.getElementById("question-time").innerHTML = formatTime( results.data.question.createdAt )
            document.getElementById("question-asker").innerHTML = results.data.question.display_name
            if ( results.data.role == "Owner" ) {
                document.getElementById("question-vote-up").onclick = () => {
                    alert("Owner cannot upvote ownself question.")
                }
                document.getElementById("question-vote-down").onclick = () => {
                    alert("Owner cannot downvote ownself question.")
                }

            }
            else if ( results.data.role == "Guest" ) {
                document.getElementById("question-vote-up").onclick = () => {
                    alert("Please Log In first to vote up")
                    window.location.href = "/LogIn?status=showPopUp"
                }
                document.getElementById("question-vote-down").onclick = () => {
                    alert("Please Log In first to vote down")
                    window.location.href = "/LogIn?status=showPopUp"
                }
                
            }

            // BUAT API VOTE UP DAN VOTE DOWN DLU
            else if ( results.data.role == "Member" ) {
                document.getElementById("question-vote-up").onclick = () => {
                    VotesQuestion("Votes Up")
                }
                document.getElementById("question-vote-down").onclick = () => {
                    VotesQuestion("Votes Down")
                }
                document.getElementById("submit-answer").style.display = ""
                document.getElementById("submit-button").onclick = SubmitAnswer
            }

        }
        else if ( results.data.msg == "Not Found" ) {
            window.location.href = "/forbidden"
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function LoadVotes () {
    axios.get(`/Votes/api/Question/${document.getElementById("question-id").value}`)
    .then((results) => {
        if ( results.data.status == "Votes Up" ) {
            document.getElementById("question-vote-up").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer fc-theme-primary"
            document.getElementById("question-vote-down").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
        }
        else if ( results.data.status == "Votes Down" ) {
            document.getElementById("question-vote-up").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
            document.getElementById("question-vote-down").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer fc-theme-primary"
        }
        else if ( results.data.status == "None" ) {
            document.getElementById("question-vote-up").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
            document.getElementById("question-vote-down").className = "js-vote-up-btn flex--item s-btn s-btn__unset c-pointer"
        }
    })
}

function LoadCountVotes () {
    axios.get(`/Votes/api/CountVotes/${document.getElementById("question-id").value}`)
    .then( (results) => {
        document.getElementById("question-votes-count").innerHTML = results.data.count
    })
}

function LoadAnswer() {
    axios.get(`/Answer/${document.getElementById("question-id").value}`)
    .then( (results) => {
        let data = results.data;
        if ( data.length == 0 ) {
            document.getElementById("Answer-Count").innerHTML = 0 + " Answer"
            document.getElementById("Main").innerHTML = ""
        }
        else {

            document.getElementById("Answer-Count").innerHTML = data.length + " Answer"

            let text = ""
            console.log(data)

            for ( let i = data.length-1; i >= 0 ; i-- ) {
                text += `<div class="answer js-answer" >
                            <div class="post-layout">
                                <div class="votecell post-layout--left" style="width: 36px;">
                                    <div class="js-voting-container d-flex jc-center fd-column ai-stretch gs4 fc-black-200">
                                    </div>
                                </div>
                                <div class="answercell post-layout--right">
                                    <div class="s-prose js-post-body">${data[i].answer}</div>
                                    
                                    <div class="mt24">
                                        <div class="d-flex fw-wrap ai-start jc-end gs8 gsy">

                                            <!-- Answer User Info -->
                                            <div class="post-signature flex--item fl0">
                                                <div class="user-info ">
                                                    <div class="user-action-time">
                                                        answered <span class="relativetime">${formatTime(data[i].createdAt)}</span>
                                                    </div>

                                                    <div class="user-gravatar32">
                                                        <a>
                                                            <div class="gravatar-wrapper-32">
                                                                <img src="../otherFiles/48030c308bdacb9c4b802c6446e821ff" width="32" height="32" class="bar-sm"></div>
                                                        </a>
                                                    </div>

                                                    <div class="user-details">
                                                        <a>${data[i].display_name}</a>
                                                    </div>
                                                </div>                                   
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>`
            }

            document.getElementById("Main").innerHTML = text

        }
    })
}

LoadQuestion() 
LoadVotes()
LoadCountVotes()
LoadAnswer()