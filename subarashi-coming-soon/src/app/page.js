import Heropage from "../../components/HeroPage/HeroPage";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        //border: "1px solid red",
      }}
    >
      <Heropage />
    </div>
  );
}
