
document.addEventListener('click', function(e) {
    
    if (e.target.className == 'item') {
        let current_photo = e.target;

        // display the container modal (when user clicks an image).
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    
        // display the image on the container modal.
        let img_content = document.querySelector(".img_content");
        img_content.src = current_photo.src; 
        img_content.id = current_photo.id; 

        // display the text
        let modal_content = document.querySelector(".modal_content");
        let p_id = current_photo.id + "0"
        let current_paragraph = document.getElementById(p_id);
        modal_content.textContent = current_paragraph.textContent;
        
        
    }
    
    // close the modal window
    else if (e.target.className == 'close') {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
        
}); 
