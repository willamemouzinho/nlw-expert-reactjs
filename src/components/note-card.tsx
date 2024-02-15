import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface INoteCardProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };
  onNoteDeleted: (id: string) => void;
}

export function NoteCard({ note, onNoteDeleted }: INoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative flex flex-col gap-y-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <h2 className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(note.date, {
            addSuffix: true,
            locale: ptBR,
          })}
        </h2>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950/80 to-slate-950/0" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 data-[state=open]:animate-overlayShow" />

        <Dialog.Content className="fixed left-[50%] top-[50%] flex h-[80vh] w-[90vw] max-w-[640px] translate-x-[-50%] translate-y-[-50%] flex-col overflow-hidden rounded-[6px] bg-slate-700 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:outline-none data-[state=open]:animate-contentShow lg:h-[60vh]">
          <Dialog.Close asChild>
            <button
              className="absolute right-0 top-0 appearance-none items-center justify-center bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Close"
            >
              <XIcon className="size-5" />
            </button>
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-y-3 p-4">
            <Dialog.Title className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {
                addSuffix: true,
                locale: ptBR,
              })}
            </Dialog.Title>
            <p className="flex-1 text-sm leading-6 text-slate-400">
              {note.content}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNoteDeleted(note.id)}
            className="group w-full bg-slate-800 py-4 text-sm font-medium text-slate-300 outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover:underline">
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
