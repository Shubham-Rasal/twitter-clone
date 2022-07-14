
const Account = (user) => {
  // console.log(user);

  const { profile } = user;
  console.log(profile?.profilePictureUrl);
  const imgURL = profile?.profilePictureUrl;
  return (
    <div className="account">
      <img src={imgURL} alt="" style={{borderRadius:"50%" ,width:"50px" , height:"50px"}} />
    </div>
  )
}

export default Account