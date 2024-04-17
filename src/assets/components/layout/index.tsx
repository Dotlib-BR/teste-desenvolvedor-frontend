import Header from "../header";
import Footer from "../footer";

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
