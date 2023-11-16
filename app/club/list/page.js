import client from "@/util/database"


export default async function Home() {
  const db = await client.db('schoolclub');
  const client = await db.
  return (
    <div className="main">
      <div className="title">
        <h2>부동집△</h2>
        <h6>부정산의 동아리 모음집</h6>
      </div>
      <div className="content">
        <p>
          많고 많은 동아리중에 알파고가
          동아리 홈페이지를 제작하였습니다!
        </p>
      </div>
    </div>
  )
}
