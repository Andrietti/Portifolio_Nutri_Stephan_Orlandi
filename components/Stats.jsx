"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 500,
    text: ' <span class="text-green-400">+&nbsp;</span> de <span class="text-green-400">&nbsp;500&nbsp;</span>',
    fullText: 'clientes satisfeitos', // Texto para a segunda linha em mobile
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex flex-col gap-2 items-center justify-center xl:justify-start text-white"
              key={index}
            >
              {index === 0 && (
                <div className="flex flex-col items-center text-center text-4xl xl:text-6xl font-extrabold">
                  <div
                    className="text-white lg:hidden"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                  <span className="lg:hidden text-white text-center">{item.fullText}</span> {/* Para mobile */}
                  <div className="hidden lg:inline text-white">
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                    <span> {item.fullText}</span> {/* Para desktop */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
