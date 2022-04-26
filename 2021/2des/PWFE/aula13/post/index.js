var post = document.querySelector(".post");

const url = "https://jsonplaceholder.typicode.com/posts?postsUserId=" + localStorage.getItem("id");

fetch(url)
.then(resp => {
    return resp.json()
})
.then(data => {
    let post = document.querySelector(".post");
    post.innerHTML = "";
})
.catch(err => {
    console.log(err);
})

function post() {
    let post = document.querySelector(".post");
    post.querySelector("h4").innerHTML = title;
    post.addEventListener("fullscreenchange", () => {
        document.querySelector(".body");
    })
    posts.appendChield(id);
}
function toalabuns() {
    window.location.href = "/albuns"
}