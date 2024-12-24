import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col gap-[7.4px] items-center justify-center mt-[40px]">
      <h2 className="text-center font-semibold text-[14px]">Молодая студия</h2>

      <div className="flex flex-row">
        <div className="relative w-[60px] h-[60px] z-30">
          <Image
            src="/team1.png"
            alt="Team member 1"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="relative w-[60px] h-[60px] -ml-[11px] z-20">
          <Image
            src="/team2.png"
            alt="Team member 2"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="relative w-[60px] h-[60px] -ml-[11px] z-10">
          <Image
            src="/team3.png"
            alt="Team member 3"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
