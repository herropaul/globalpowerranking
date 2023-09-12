export default function Home() {
  return (
    <div className="flex flex-col">
      <nav className="flex space-x-4 mb-4 w-full items-start">
        <button className="font-bold py-2 px-4 rounded">Tournaments</button>
        <button className="font-bold py-2 px-4 rounded">Team Rankings</button>
        <button className="font-bold py-2 px-4 rounded">Global Rankings</button>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen relative w-full">
        <div className="m-auto">
          <h1 className=" text-8xl font-bold mb-4 text-center">
            Global Power Ranking
          </h1>
          <h2 className="text-3xl font-semibold mb-2 text-center">
            Predictions for LoL esports teams
          </h2>
          <div className="flex justify-center items-center">
            <div
              className="w-48 h-48 blur-xl"
              style={{
                borderRadius: "28% 72% 79% 21% / 21% 40% 60% 79% ",
                backgroundColor: "#B99D76",
              }}
            ></div>
            <div
              className="w-48 h-48 rounded-full -ml-10 blur-xl"
              style={{
                borderRadius: "61% 39% 19% 81% / 72% 40% 60% 28% ",
                backgroundColor: "#0080DA",
              }}
            ></div>
            <div
              className="w-48 h-48 rounded-full -ml-10 blur-xl"
              style={{
                borderRadius: "61% 39% 19% 81% / 29% 88% 12% 71% ",
                backgroundColor: "#00218A",
              }}
            ></div>
            <div
              className="w-48 h-48 rounded-full -ml-10 blur-xl"
              style={{
                borderRadius: "29% 71% 19% 81% / 47% 20% 80% 53% ",
                backgroundColor: "#7391AF",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
