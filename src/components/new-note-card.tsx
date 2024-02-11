export function NewNoteCard() {
  return (
    <button className="flex flex-col space-y-3 overflow-hidden rounded-md bg-slate-700 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <h2 className="text-sm font-medium text-slate-300">adicionar nota</h2>
      <p className="text-sm leading-6 text-slate-400">
        Grave uma nota em áudio que será convertida para texto automaticamente.
      </p>
    </button>
  );
}
