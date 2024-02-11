export function NoteCard() {
  return (
    <button className="relative space-y-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <h2 className="text-sm font-medium text-slate-300">há 2 dias</h2>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae odio
        autem dolore beatae praesentium minus saepe dignissimos asperiores error
        delectus ex repellat reiciendis, modi alias itaque corrupti, soluta
        amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vitae
        odio autem dolore beatae praesentium minus saepe dignissimos asperiores
        error delectus ex repellat reiciendis, modi alias itaque corrupti,
        soluta amet.
      </p>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950/80 to-slate-950/0" />
    </button>
  );
}
