import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>{/* 네비게이션 메뉴를 여기에 추가할 수 있습니다 */}</nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>{/* 푸터 내용을 여기에 추가할 수 있습니다 */}</footer>
    </div>
  );
};

export default MainLayout;
