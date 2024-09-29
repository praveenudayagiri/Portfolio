
const add=document.querySelector('#add-bookmark');
let section=document.querySelector('.present_bookmark');
add.addEventListener('click',addBokkmark);
const date=new Date(Date.now()).toString().substring(0,15);

document.addEventListener('DOMContentLoaded',getBookmarks);
function getBookmarks()
{
    const bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    if(!bookmarks || bookmarks.length==0)
    {
        alert("Bookamrks are empty");
    }
    else{
        bookmarks.forEach(bookmark => {
         let   section=document.querySelector('.present_bookmark');
            const nextBookmark = `
    <div class="bookmarks">
        <p style="text-align: center;" id="bookmark_id"> ${bookmark.id}</p>
        <p style="text-align: left;">Bookmark name: ${bookmark.text}</p>
        <p style="text-align: left;">Added on: ${bookmark.date}</p>
        <a id="open" href="${bookmark.url}" target="_blank" style="background-color: green;">OPEN</a>
        <a id="delete" href="#" style="background-color: red;">DELETE</a>
    </div>
`;

section.insertAdjacentHTML('beforebegin',nextBookmark);
        });
    }
}



function addBokkmark(){
const tagField=document.querySelector('#tag-field').value;
const urlField=document.querySelector('#url-field').value;
if(tagField=='' || urlField==''){
    alert("Enter the fields");
    return;
}
let bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
let id;
if(!bookmarks || bookmarks.length== 0)
{
    bookmarks=[];
    id=0;
}
else{
    bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    id=parseInt(bookmarks[bookmarks.length-1].id)+1;

}
let bookmark={

    "id": id,
    "text":tagField,
    "url":urlField,
    "date":date,

}

bookmarks.push(bookmark);
localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
const nextBookmark = `
    <div class="bookmarks">
        <p style="text-align: center;" id="bookmark_id"> ${id}</p>
        <p style="text-align: left;">Bookmark name: ${tagField}</p>
        <p style="text-align: left;">Added on: ${date}</p>
        <a id="open" href="${urlField}" target="_blank" style="background-color: green;">OPEN</a>
        <a id="delete" href="#" style="background-color: red;">DELETE</a>
    </div>
`;

section.insertAdjacentHTML('afterbegin',nextBookmark);
}

//delete bookmark
let bodyElement=document.querySelector('body');
bodyElement.addEventListener('click',e =>{
    if(e.target.matches('#delete')){
        let id=document.querySelector('#bookmark_id').textContent;
        e.target.parentElement.remove();
        removeBookmarkFromLocalStorage(id);
    }
});
function removeBookmarkFromLocalStorage(id)
{
    let bookmarks=JSON.parse(localStorage.getItem('bookmarks'));
    if(!bookmarks)
    {
        bookmarks=[];
    }
    bookmarks.forEach((bookmark ,index) =>{
        if(bookmark.id==parseInt(id)){
            bookmarks.splice(index,1);
        }
    });
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks));
}
