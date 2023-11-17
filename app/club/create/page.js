'use client'
import { useState } from "react"

export default function New(){
  const [image, setImage] = useState('');

  const imageLoadHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);
    reader.onload = () => setImage(reader.result);
  }

  return(
    <div className="main">
      <h1>새로운 동아리</h1>
      <form action="/api/club/crate" method="POST">
        {/* <img style={{width:"200px"}} src={image}/>
        <div><input type="file" style={{display: "none"}} onChange={imageLoadHandler}/></div> */}
        
        <div className="club_title">
          <label>제목<span className="key">*</span></label>
          <input type="text"></input>
        </div>

        <div className="club_into">
          <label>소개글<span className="key">*</span></label>
          <textarea style={{width: "80%", height: "500px"}}></textarea>
        </div>

        <div className="club_into">
          <label>소개글<span className="key">*</span></label>
          <textarea style={{width: "80%", height: "500px"}}></textarea>
        </div>

        <input type="hidden" name="img" value={image}/>
        <button className="submit" type="submit">제출하기</button>
      </form>
    </div>
  )
}