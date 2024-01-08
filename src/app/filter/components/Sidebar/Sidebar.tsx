export function Sidebar() {
  return (
    <div className="w-[250px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Filters</h1>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Platforms</h2>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              Playstation
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              Xbox
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              Nintendo Switch
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              PC
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              Mobile
            </span>
            <button className="w-28 mt-2 text-sm">+ Show more</button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-700"></div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl">Genre</h2>
          <div className="flex flex-col gap-2">
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              Adventure
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              RPG
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              Action
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              FPS
            </span>
            <span className="flex gap-2 text-zinc-500 items-center">
              <input
                className="w-5 h-5 rounded "
                name="console"
                type="checkbox"
                value=""
              />
              Moba
            </span>
            <button className="w-28 mt-2 text-sm">+ Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
