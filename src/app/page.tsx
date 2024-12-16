import About from "./components/home-components/about";
import Initial from "./components/home-components/initial";
import Process from "./components/home-components/process";
import Services from "./components/home-components/services";




export default function Home() {
  return (
    <div className="flex flex-col gap-16 ">
     <Initial/>
     <Services/>
     <Process/>
     <About/>
    </div>
  );
}
