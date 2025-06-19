const BASE_URL = "http://localhost:5000"


function notify(siblingElement, bgColor, text) {
    const element = document.createElement('h3');
    element.style.backgroundColor = bgColor;
    element.style.padding = "1rem"
    element.style.marginTop = "1rem"
    element.style.marginBottom = "1rem"

    element.style.color = "white";
    element.textContent = text;

    editor_form.insertBefore(element, siblingElement)

    setTimeout(() => {
        element.remove();
        location.reload()
        
    }, 5000);
}


document.addEventListener('DOMContentLoaded', () => {


    //global variables 
    
    let editor_form = document.querySelector('form#editor_form');
    let file = null;
    let InputFile = editor_form.querySelector('input#image')



// fetch all blogs

const blogs_container = document.querySelector('main.blogs');

 function removeBlog(e)
 {
   let id = e.target.id

  const confirm = window.confirm("Are you sure you want to delete this blog of id: " + id + " ?")
  if(confirm)
  {
    fetch(`${BASE_URL}/editor/${id}`, {
    method: 'DELETE', 

   }).then(res=>{
     if(res.ok)
     {
        notify(InputFile, "green", "Successfully removed blog")
     }
   })
  }

 }

function displayBlogs(blogs)
{
    blogs.forEach(b=>{

        blogs_container.innerHTML += ` <div class="blog">  
             <aside>
               <h3>${b.title}</h3>
                <p>${b.content}</p>
             </aside>
             <aside name=${b._id} id="toggle""> 
                <img  id="${b._id}" style="width: 40px; height: max-content;" src="./img/cancel.png"/> 
             </aside>
           
            </div>`
    })
}


 fetch(`${BASE_URL}/editor`)
 .then(res => res.json())
 .then(data=>{
    
    displayBlogs(data)

    let blogsElement = blogs_container.querySelectorAll('div.blog')
    
     for(let i = 0; i < blogsElement.length; i++)
     {
        blogsElement[i].querySelector('aside#toggle').addEventListener('click', removeBlog)
     }

 })





    InputFile.addEventListener('change', e => {

        const default_img = editor_form.querySelector('img');
        file = e.target.files[0]
        default_img.src = URL.createObjectURL(file);

    })



  

    async function postBlog(e) {

        e.preventDefault();

        const title = document.getElementById('form_title')
        const text = document.getElementById('form_editor')


        const formData = new FormData();
        formData.append("title", title.value);
        formData.append("content", text.value);
        formData.append("image", file)


        try {


            let response = await fetch(`${BASE_URL}/editor`, {
                method: 'POST',
                body: formData
            })


            window.alert("Please wait a moment, Might take a minute")

            if (response.ok) {

                notify(InputFile, "green", "Successfully uploaded new blog")

            } else {
                notify(InputFile, "red", "Failed to upload blog!!! Please try again")

            }
        } catch (err) {


            notify(InputFile, "red", "Network Error, Try again later!")
        } finally {

            //clear fields
            title.value = ""
            text.value = ""
        }


    }

    editor_form.addEventListener('submit', postBlog)





    // end of loading the document
});