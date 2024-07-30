import Aside from "../components/Aside/Aside";
import MainContent from "../components/Main/MainContent";
export default function Home() {
  return (
    <div className="justify-center flex bg-primary-bg min-h-screen ">
      <div className="flex flex-col w-11/12 mt-20 gap-10 lg:flex-row mb-28  ">
        <Aside />
        <MainContent />
      </div>
    </div>
  );
}
