import Feed from "@/components/Feed";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="pt-16 flex flex-col items-center px-3">
      <div className="container">
        <section className="flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl text-center font-bold">
            Discover & Share <br />
            <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
              AI-Powered Prompts
            </span>
          </h1>

          <p className="text-center text-gray-800">
            PromptAI is an open-source AI prompting tool for modern world to
            discover, <br /> create and share creative prompts.
          </p>

          <div className="flex justify-center items-center w-full">
            <div className="md:w-1/2">
              <SearchBar />
            </div>
          </div>
        </section>

        <section className="pt-16 w-full flex flex-col gap-6">
          <Feed />
        </section>
      </div>
    </main>
  );
}
