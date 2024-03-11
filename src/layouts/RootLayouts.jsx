import Header from "../components/Header";
import { SimpleFooter } from "../components/SimpleFooter";
import MainContent from "./MainContent";

export default function RootLayouts() {
  return (
    <>
      <Header />
      <MainContent />
      <SimpleFooter />
    </>
  );
}
