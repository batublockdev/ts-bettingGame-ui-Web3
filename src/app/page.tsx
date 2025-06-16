"use client"
import MainPage from "../components/MainPage";
import Sidebar from "../components/Sidebar";
import InvestorsAside from "@/components/ui/InvestorsAside";

export default function Home() {


  return (
    <div className="flex">
      <InvestorsAside addresses={['0x']} />
      <MainPage />
      <Sidebar />
    </div>
  );
}
