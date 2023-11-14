import Link from 'next/link';
import './globals.css'

export const metadata = {
  title: '동아리'
}

// 부천정보산업고등학교의 모든 동아리를 다 모았다
// 부천정보산업고등학교
// 부모동, 모동다, 동다모, 부동모, 부정산 모든 동아리 - 산동어
// 동아리 모음집 - 동아리
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navber/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

function Navber(){
  return (
    <nav>
      <div className='home'>
        <Link href={'/'}>부동집</Link> {/* 메인으로 */}
      </div>
      <div className='club'>
        <Link href={'/club/list'}>동아리 목록</Link> {/* 목록 */}
        <Link href={'/club/create'}>동아리 만들기</Link> {/* 선생님 전용 */}
        <Link href={'/club/plz'}>동아리 만들고 싶어요!</Link> {/* 학생 전용 */}
        <Link href={'/my/club'}>내 동아리</Link> {/* 클럽 */}
      </div>
      <div className='user'>
        <Link href={'/login'}>로그인</Link> {/* 비회원 */}
        <Link href={'/join'}>회원가입</Link> {/* 비회원 */}
        <Link href={'/my'}>내 정보</Link> {/* 회원 */}
        <Link href={'/logout'}>로그아웃</Link> {/* 회원 */}
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