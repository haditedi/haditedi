import Image from "next/image";
import Link from "next/link";

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
          <span className="block text text-sm md:text-lg">
            Integrating AI into your business
          </span>
        </div>
      </section>

      <section>
        <h1 className="m-10 p-5 text-center text-white text-center text-5xl md:text-7xl font-black">
          PORTFOLIO
        </h1>
        <div className="flex flex-wrap bg-slate-700 justify-center">
          <div className="flex flex-col justify-center items-center m-3">
            <h1 className="text-center text-white text-center text-3xl md:text-5xl m-2 p-2">
              Project Pony Bot
            </h1>
            <p className="w-[350px] m-2 text-lg md:text-xl">
              Upload a pdf file or a website address. The AI will then use this
              information to answer questions.
            </p>

            <Link
              href="https://talktopdf.vercel.app"
              target="_blank"
              noreferrer
            >
              <Image
                className="block w-full rounded m-3 hover:scale-125"
                src="/talktopdf.jpg"
                height={300}
                width={300}
                alt="picture of project talk to pdf"
                style={{
                  width: "250px",
                  height: "175px",
                  objectFit: "cover",
                }}
                // sizes="(min-width: 350px) 100vw, 33vw"
              />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center m-3">
            <h1 className="text-center text-white text-center text-3xl md:text-5xl m-2 p-2">
              Project Sarcastic Bot
            </h1>
            <p className="w-[350px] m-2 text-lg md:text-xl">
              The bot reluctantly answer questions in a sarcastic way.
            </p>
            <Link href="https://tedi-ai.vercel.app" target="_blank" noreferrer>
              <Image
                className="block rounded m-3 hover:scale-125"
                src="/chat.jpg"
                height={300}
                width={300}
                alt="picture of project talk to pdf"
              />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <h1 className="m-10 p-5 mb-2 text-center text-white text-center text-5xl md:text-7xl font-black">
          Contact Me
        </h1>
        <p className="block m-2 pb-8 text-center text-lg md:text-xl">
          Whatsapp / call at +44 (0) 7825 372243
        </p>
      </section>
    </main>
  );
}
