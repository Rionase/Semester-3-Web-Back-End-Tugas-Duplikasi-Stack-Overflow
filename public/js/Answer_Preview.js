
function LoadPreview() {
    let text = document.getElementById("ProblemTextBox").innerHTML;
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
    document.getElementById("preview").innerHTML = PreviewText

}

document.getElementById("ProblemTextBox").onkeyup = (event) => {
    if ( document.getElementById("ProblemTextBox").innerHTML == "" ) {
        document.getElementById("ProblemTextBox").innerHTML = '<pre class="s-code-block markdown"><code><br class="ProseMirror-trailingBreak"></code></pre>'
    }
    else {
        LoadPreview()
    }
}

document.getElementById("InlineCode").onclick = (event) => {
    let text = ' <span class="hljs-symbol">`</span><span class="hljs-code">your text</span><span class="hljs-symbol">`</span>'
    document.getElementById("ProblemTextBox").lastChild.insertAdjacentHTML("beforeend", text)
    LoadPreview()
}

document.getElementById("CodeBlock").onclick =() => {
    let text = '<pre class="s-code-block markdown"><code><span class="hljs-symbol">```</span><br><span class="hljs-code">type here or paste as plain text</span><br><span class="hljs-symbol">```</span></code></pre>'
    document.getElementById("ProblemTextBox").innerHTML += text
    LoadPreview()
}

document.getElementById("NewLine").onclick =() => {
    let text = ' \\n '
    document.getElementById("ProblemTextBox").lastChild.insertAdjacentHTML("beforeend", text)
    LoadPreview()
}

document.getElementById("Tab").onclick = () => {
    let text = ' \\t '
    document.getElementById("ProblemTextBox").lastChild.insertAdjacentHTML("beforeend", text)
    LoadPreview()
}



document.getElementById("InlineCode").onmouseenter = () => {
    document.getElementById("CodeLineDescription").style.display = ""
}

document.getElementById("InlineCode").onmouseleave = () => {
    document.getElementById("CodeLineDescription").style.display = "none"
}

document.getElementById("CodeBlock").onmouseenter = () => {
    document.getElementById("CodeBlockDescription").style.display = ""
}

document.getElementById("CodeBlock").onmouseleave = () => {
    document.getElementById("CodeBlockDescription").style.display = "none"
}

document.getElementById("NewLine").onmouseenter = () => {
    document.getElementById("NewLineDescription").style.display = ""
}

document.getElementById("NewLine").onmouseleave = () => {
    document.getElementById("NewLineDescription").style.display = "none"
}

document.getElementById("Tab").onmouseenter = () => {
    document.getElementById("TabDescription").style.display = ""
}

document.getElementById("Tab").onmouseleave = () => {
    document.getElementById("TabDescription").style.display = "none"
}
