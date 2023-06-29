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

function LoadQuestion(parameter) {
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
    text = text.replaceAll(`<br class="ProseMirror-trailingBreak">`, " ")
    let Arr = text.split(" ")
    let EndArr = Arr.filter( (str) => str != "" )
    let Questiontext = EndArr.join(" ")
    return Questiontext
}

function LoadAllQuestion () {
    axios.get("/Question/AllQuestion/data")
    .then( (results) => {
        console.log(results)
        let text = ""
        let data = results.data
        document.getElementById("question-count").innerHTML = data.length + " questions"
        for ( let i = 0 ; i < data.length ; i++ ) {
            let tagnames = data[i].tags
            tagnames = tagnames.split(" ")
            tagnames= tagnames.filter( (str) => str != "" )
            let tagnamestxt = ""
            for ( let j = 0 ; j < tagnames.length ; j++ ) {
                tagnamestxt += `<a class="post-tag flex--item mt0 ">${tagnames[j]}</a>`
            }

            let times = formatTime( data[i].createdAt )

            let display_name = data[i].display_name

            let title = data[i].title

            let href = `/Question/${data[i].id_question}`

            let question = LoadQuestion(data[i].question)
            question = question.slice(0,191) + " ..."

            text += `<div id="question-summary-75237529" class="s-post-summary    js-post-summary"
                    data-post-id="75237529" data-post-type-id="1">
                    <div class="s-post-summary--stats js-post-summary-stats" style="padding-top: 10px;">

                        <input type="hidden" class="question-id-hidden" value=${data[i].id_question}>


                        <div class="s-post-summary--stats-item s-post-summary--stats-item__emphasized"
                            title="Score of 0">
                            <span class="s-post-summary--stats-item-number votes-count-fetch">0</span>
                            <span class="s-post-summary--stats-item-unit">votes</span>
                        </div>


                        <div class="s-post-summary--stats-item has-answers " title="2 answers">
                            <span class="s-post-summary--stats-item-number answer-count-fetch" >2</span>
                            <span class="s-post-summary--stats-item-unit">answers</span>
                        </div>


                    </div>

                    <div class="s-post-summary--content">

                        <h3 class="s-post-summary--content-title">
                            <a href="${href}" class="s-link">${title}</a>

                        </h3>

                        <div class="s-post-summary--content-excerpt">
                            ${question}
                        </div>

                        <div class="s-post-summary--meta">
                            <div class="s-post-summary--meta-tags tags js-tags t-reactjs">
                                <ul class="ml0 list-ls-none js-post-tag-list-wrapper d-inline">
                                    <li class="d-inline mr4 js-post-tag-list-item">
                                        ${tagnamestxt}

                                    </li>
                                </ul>
                            </div>

                            <div class="s-user-card s-user-card__minimal">
                                <div aria-live="polite">
                                    <a href="#" class="s-avatar s-avatar__16 s-user-card--avatar" data-user-id="21006803">
                                        <div class="gravatar-wrapper-16">
                                            <img src="../otherFiles/48030c308bdacb9c4b802c6446e821ff" height="16" class="s-avatar--image">

                                        </div>
                                    </a>
                                </div>

                                <div class="s-user-card--info">
                                    <div class="s-user-card--link d-flex gs4">
                                        <a class="flex--item">${display_name}</a>
                                    </div>


                                </div>

                                <time class="s-user-card--time">
                                    <!-- asked time -->
                                    <a class="s-link s-link__muted">asked <span> ${times} </span></a>
                                </time>
                            </div>

                        </div>
                    </div>
                </div>`

            

        }
        document.getElementById("questions").innerHTML = text
        LoadVotes()
        LoadAnswer()
    })
}

function LoadVotes () {
    let Arr = document.getElementsByClassName("question-id-hidden");
    for ( let k = 0 ; k < Arr.length ; k++ ) {
        axios.get(`/Votes/api/CountVotes/${Arr[k].value}`)
        .then( (results) => {
            console.log(results.data.count)
            document.getElementsByClassName("votes-count-fetch")[k].innerHTML = results.data.count
        })
    }
}

function LoadAnswer () {
    let Arr = document.getElementsByClassName("question-id-hidden");
    for ( let k = 0 ; k < Arr.length ; k++ ) {
        axios.get(`/Answer/${Arr[k].value}`)
        .then( (results) => {
            document.getElementsByClassName("answer-count-fetch")[k].innerHTML = results.data.length
        })
    }
}


LoadAllQuestion()

