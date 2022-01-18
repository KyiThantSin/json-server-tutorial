// javascript for index.html

const renderPosts = async ()=>{
    const url = 'http://localhost:3000/blogs';
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data)
    let templete = "";
    data.forEach(blog => {
        templete += `
        <div class="blog">
            <h1>${blog.title}</h1>
            <h3><b>Author: ${blog.author}</b></h3>
            <p><small>${blog.like} Likes </small></p>
            <p>${blog.body.slice(0,200)}</p>
            <a href="/details.html?id=${blog.id}">See More</a>           
        </div>
    `
    });
    document.querySelector(".blogs").innerHTML = templete
}


window.addEventListener('DOMContentLoaded',()=>renderPosts());
