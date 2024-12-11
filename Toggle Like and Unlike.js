let change_pic = document.getElementById("puppyImage");
let likeButton_color = document.getElementById("likeButton");
let like_color = document.getElementById("likeIcon");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        change_pic.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeButton_color.style.backgroundColor = "#0967d2";
        like_color.style.color = "#0967d2";
        likeButton_color.style.color = "#ffffff";
        isImageLiked = true;
    } else {
        change_pic.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButton_color.style.backgroundColor = "#cbd2d9";
        like_color.style.color = "#cbd2d9";
        likeButton_color.style.color = "#9aa5b1";
        isImageLiked = false;
    }
}