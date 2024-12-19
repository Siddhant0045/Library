class Book{
    constructor(title,author,pages,isread){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isread = isread;
    }

}

const booklibrary = [];

$("#addbooksbtn").click(function(){
    $("#mainbody").addClass("blurr");
    $("#centeralign").removeClass("hidden");
});

$("#submit").click(function(e){
    e.preventDefault();
    var title = $("#inputtitle").val();
    var author = $("#inputauthor").val();
    var pages = $("#inputpages").val();
    var ischecked = $("#is-read").prop("checked");
    const newBook = new Book(title,author,pages,ischecked);
    booklibrary.push(newBook);

    const bookcard = $("<div></div>");
    const titlediv = $("<div></div>");
    const authordiv = $("<div></div>");
    const pagesdiv = $("<div></div>");
    const readbtndiv = $("<div></div>");
    const removebtndiv = $("<div></div>");
    const readbtnbtn = $("<button></button>");
    const removebtnbtn = $("<button></button>");

    const bookindex = booklibrary.length-1;

    $("#books").append(bookcard);
    bookcard.addClass("bookcard").attr("data-index",bookindex);

    $(".bookcard").append(titlediv);
    $(".bookcard").append(authordiv);
    $(".bookcard").append(pagesdiv);
    $(".bookcard").append(readbtndiv);
    $(".bookcard").append(removebtndiv);

    titlediv.addClass("title");
    authordiv.addClass("author");
    pagesdiv.addClass("pages");
    readbtndiv.addClass("readbtn");
    removebtndiv.addClass("removebtn");

    $(".readbtn").append(readbtnbtn);
    $(".removebtn").append(removebtnbtn);

    removebtnbtn.addClass("remove");
    if(ischecked){
        readbtnbtn.addClass("read");
    }
    else{
        readbtnbtn.addClass("unread");
    }

    $("#mainbody").removeClass("blurr");
    $("#centeralign").addClass("hidden");

    titlediv.text(title);
    authordiv.text(author);
    pagesdiv.text(pages);
    if(ischecked){
        readbtnbtn.text("Read");
    }
    else{
        readbtnbtn.text("Not read");
    }
    removebtnbtn.text("Remove");

    $("#addbookform")[0].reset();
    console.log(booklibrary);
});

$(document).on("click",".read, .unread",function(){
    const bookcard = $(this).closest(".bookcard");
    const bookindex = bookcard.data("index");
    booklibrary[bookindex].isread = !booklibrary[bookindex].isread;
    if (booklibrary[bookindex].isread) {
        $(this).removeClass("unread").addClass("read").text("Read");
    } 
    else {
        $(this).removeClass("read").addClass("unread").text("Not read");
    }
});

$(document).on("click", ".remove", function () {
    const bookcard = $(this).closest(".bookcard");
    const bookindex = bookcard.data("index");
    booklibrary.splice(bookindex,1)
    bookcard.remove();
    $(".bookcard").each(function(index){
        $(this).attr("data-index",index);
    });
    console.log(booklibrary);
});

console.log(booklibrary);
