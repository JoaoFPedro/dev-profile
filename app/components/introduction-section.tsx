import Image from "next/image";

const IntroductionSection = () => {
  return (
    <div className="flex p-20 items-center text-center  justify-between">
      <div className="">
        <h1 className="text-2xl">Olá, eu sou o João</h1>
        <span>Desenvolvedor de Software</span>
      </div>
      <Image
        src="/perfil.jpg"
        width={600}
        height={600}
        alt="Sukuna"
        className="w-100 h-100 overflow-hidden rounded-full  "
      />
    </div>
  );
};

export default IntroductionSection;
