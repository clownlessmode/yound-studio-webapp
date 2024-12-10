import Card from "@/components/Card";
import CardList from "@/components/CardList";
import Header from "@/components/Header";
import HeroText from "@/components/HeroText";
import Line from "@/components/Line";
import SmallCard from "@/components/SmallCard";
import SmallCardList from "../components/SmallCardList";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <>
      <main className="py-6 flex flex-col gap-6 px-4 pb-[5rem]">
        <Header />
        <HeroText />
        <CardList />
        <Line />
        <SmallCardList />
      </main>
      <ContactFooter />
    </>
  );
}
