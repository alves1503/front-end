fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
        console.log(post);
        const container = document.querySelector("#container")
        posts.map(post => {
            console.log(post.title)
            const h2 = document.createElement("h2")
            h2.textContent = post.title
            container.appendChild(h2)

        })


    })