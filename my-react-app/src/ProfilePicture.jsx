
function ProfilePicture() {
    
    const imgUrl = 'https://www.w3schools.com/howto/img_avatar.png';
    
    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return (
       <img onClick={(e) => handleClick(e)} src={imgUrl} alt="avatar" />
    );
}

export default ProfilePicture;