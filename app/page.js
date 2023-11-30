import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Image
          src="/web-background.jpg"
          width={1000}
          height={100}
          alt="web looking picture"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            opacity: "50%",
          }}
        />
        <div className="absolute w-full mt-10 pt-10 top-10 left-3 text-white text-center text-5xl md:text-7xl font-black">
          HADI TEDI
        </div>
      </section>

      <section>
        <h1 className="text-center m-10 p-5 text-white text-center text-5xl md:text-7xl font-black">
          PORTFOLIO
        </h1>
        <div></div>
      </section>
    </main>
  );
}
