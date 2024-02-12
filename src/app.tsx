import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <div className="mx-5 my-12 max-w-6xl space-y-6 md:mx-8 xl:mx-auto">
      <img src={logo} alt="logo da NLW Expert" />

      <form>
        <input
          type="text"
          name="note"
          id="note"
          placeholder="Busque em suas notas..."
          className=" w-full bg-transparent text-lg font-semibold outline-none placeholder:text-slate-500 md:text-3xl"
        />
      </form>

      <hr className="border-slate-700" />

      <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard />

        <NoteCard
          note={{
            date: new Date(),
            content: "Hello world",
          }}
        />
        <NoteCard
          note={{
            date: new Date(),
            content: "Hello world",
          }}
        />
      </div>
    </div>
  );
}
