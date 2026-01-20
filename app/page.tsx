import Image from "next/image";
import Logo from "../app/assets/logo.svg";
import LandingImg from "../app/assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6 ">
        <Image src={Logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>

          <p className="leading-loose max-w-md mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur
            cum excepturi expedita facere, officiis corporis. Mollitia ad,
            maxime ipsum ipsam fugit illo quos explicabo.
          </p>

          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>

        <Image
          src={LandingImg}
          alt="landing"
          className="hidden w-full h-auto lg:block"
        />
      </section>
    </main>
  );
}
