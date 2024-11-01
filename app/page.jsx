'use client';

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { MdOutlineWorkOutline } from "react-icons/md";

const handleSendMessage = (e) => {
  e.preventDefault();
  console.log("Botão clicado!"); // Para debug
  const phoneNumber = "+5527999204240";
  const customMessage = `Olá! Gostaria de conhecer seus planos!`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;
  window.open(url, "_blank");
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none mb-8 xl:mb-0">
            <h1 className="h1 mb-1 text-green-700">Emagreça</h1>
            <h1 className="h2 mb-4 text-green-700">sem passar vontade!</h1>
            {/* <h2 className="h2 mb-6">
              <span className="text-accent">⟶ Sem sofrer</span> <br />
              <span className="text-accent">⟶ Sem passar fome</span>
            </h2> */}
            {/* Slogan e urgência */}
            <p className="text-2xl font-semibold mb-4">
              <span className="">Dieta sem firula, baseada em evidências!</span>
            </p>            
            <p className="text-red-500 font-semibold mb-2">Vagas Limitadas!</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Botão visível em dispositivos móveis */}
              <div className="block lg:hidden mb-8 h-full">
                <button 
                  onClick={handleSendMessage} 
                  className="animate-pulse-scale bg-green-400 border-4 border-white text-black font-bold uppercase flex items-center gap-2 py-3 px-6 rounded-full transition-transform text-xl"
                >
                  <span>Eu quero mudar minha vida!</span>
                </button>
              </div>

              {/* Botão visível em telas grandes */}
              <div className="hidden lg:flex mb-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="animate-pulse-scale uppercase flex items-center gap-2 text-2xl md:text-3xl sm:text-xl py-3 md:py-4 sm:py-2 h-full mx-auto bg-green-400 border-4 border-white transition-transform md:w-2/3 lg:w-1/2 xl:w-full max-w-[90%] sm:max-w-[95%] rounded-full"
                  onClick={handleSendMessage}
                >
                  <span className="text-black">Eu quero mudar minha vida!</span>
                </Button>
              </div>
            </div>
            {/* Texto de vagas limitadas embaixo dos botões */}
                <Social></Social>
            
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
