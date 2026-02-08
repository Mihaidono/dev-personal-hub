import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>My Next.js App</title>
      </Head>
      <h1 className="text-4xl font-bold">Hello Next.js</h1>
    </div>
  );
}
