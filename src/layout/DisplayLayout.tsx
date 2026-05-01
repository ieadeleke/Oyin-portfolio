import Navigation from "./Nav";

const DisplayLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default DisplayLayout;
