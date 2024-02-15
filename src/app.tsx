import { ChangeEvent, useState } from "react";

import logo from "./assets/logo-nlw-expert.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

interface INote {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<INote[]>(() => {
    const notesOnStorage = localStorage.getItem("notes");
    if (notesOnStorage) return JSON.parse(notesOnStorage);

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote: INote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };
    const notesArray = [newNote, ...notes];
    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function onNoteDeleted(id: string) {
    const notesArray = notes.filter((note) => {
      return note.id !== id;
    });

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSeacrh(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearch(query);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter((note) =>
          note.content.toLowerCase().includes(search.toLowerCase()),
        )
      : notes;

  return (
    <div className="mx-5 my-12 max-w-6xl space-y-6 md:mx-8 xl:mx-auto">
      <img src={logo} alt="logo da NLW Expert" />

      <form>
        <input
          type="text"
          placeholder="Busque em suas notas..."
          value={search}
          onChange={handleSeacrh}
          className=" w-full bg-transparent text-lg font-semibold outline-none placeholder:text-slate-500 md:text-3xl"
        />
      </form>

      <hr className="border-slate-700" />

      <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
        ))}
      </div>
    </div>
  );
}
