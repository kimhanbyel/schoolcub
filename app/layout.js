import Link from 'next/link';
import './globals.css'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { LoginCom, LogoutCom } from './LoginCom';

export const metadata = {
  title: '동아리'
}

// 부천정보산업고등학교의 모든 동아리를 다 모았다
// 부천정보산업고등학교
// 부모동, 모동다, 동다모, 부동모, 부정산 모든 동아리 - 산동어
// 동아리 모음집 - 동아리
export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  console.log(session)
  return (
    <html>
      <body>
        <Navber session={session}/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

function Navber({session}){
  return (
    <nav>
      <div className='home'>
        <Link href={'/'}>부동집△</Link> {/* 메인으로 */}
      </div>
      {
        session ?
        <div className='club'>
          <Link href={'/club/list'}>동아리 목록</Link> {/* 목록 */}
          <Link href={'/club/create'}>동아리 만들기</Link> {/* 선생님 전용 */}
          <Link href={'/club/plz'}>동아리 만들고 싶어요!</Link> {/* 학생 전용 */}
          <Link href={'/my/club'}>내 동아리</Link> {/* 클럽 */}
        </div>
        : ""
      }
      <div className='user'>
        {
          session ? <LogoutCom/> : <LoginCom/>
        }
        {
          session ? <Link href={'/my'}>
                      <img width="30px" src={session.user.image}/>
                    </Link> : ""
        }
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      발바닥
    </footer>
  );
}