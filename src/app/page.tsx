import CardList from "@/components/CardList";
import Header from "@/components/Header";
import HeroText from "@/components/HeroText";
import Line from "@/components/Line";
import SmallCardList from "../components/SmallCardList";
import ContactFooter from "@/components/ContactFooter";
import ScreenContainer from "../components/ScreenContainer";
import Drawer from "@/components/Drawer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScreenContainer>
        <Header />
        <HeroText />
        <CardList />
        <Line />
        <SmallCardList />
        <Footer />
      </ScreenContainer>
      <ContactFooter />
    </>
  );
}
