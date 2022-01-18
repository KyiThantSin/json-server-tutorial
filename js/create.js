// javascript for create.html
let form = document.querySelector("form");
const creating = async (event) =>{
    event.preventDefault();
    
    let newBlog = {
        title : form.title.value,
        body : form.body.value,
        like : 0,
        author : form.author.value
    }

    await fetch("http://localhost:3000/blogs", {
        method : 'POST',
        body : JSON.stringify(newBlog),
        headers : {'Content-type':'application/json'}
    })
    window.location.replace('./index.html')
}

window.addEventListener('submit',creating)