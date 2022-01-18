// javascript for details.html
let id = new URLSearchParams(window.location.search).get('id')
let deleteBtn =document.querySelector(".delete");
//console.log(id)
const renderDetails = async ()=>{
    const single = await fetch("http://localhost:3000/blogs/" + id)
    const singleBlog =await single.json()
    //console.log(singleBlog)
    let templete = `
        <div class="singleblog">
            <h1>${singleBlog.title}</h1>
            <h3><b>Author: ${singleBlog.author}</b></h3>
            <p><small>${singleBlog.like} Likes </small></p>
            <p>${singleBlog.body}</p>
            <a href="/index.html">Main Blog</a> 
        </div>
    `
    document.querySelector(".details").innerHTML = templete;
}
deleteBtn.addEventListener('click', async (e)=>{
    const resBlogs = await fetch("http://localhost:3000/blogs/" + id, {
        method : 'DELETE'
    })
    window.location.replace("./index.html")
})
window.addEventListener('DOMContentLoaded', ()=>renderDetails())
