import { ChangeEvent, FormEvent, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { toast } from "sonner";

export function NewNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);

    if (event.target.value === "") {
      setShouldShowOnboarding(true);
    }
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Nota criada com sucesso!");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col gap-y-3 overflow-hidden rounded-md bg-slate-700 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <h2 className="text-sm font-medium text-slate-300">Adicionar nota</h2>
        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/40" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] h-[60vh] w-[90vw] max-w-[640px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[6px] bg-slate-700 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:outline-none">
          <form onSubmit={handleSaveNote} className="flex h-full flex-col">
            <div className="flex flex-1 flex-col gap-y-3 p-4">
              <Dialog.Title className="text-sm font-medium text-slate-300">
                Adicionar nota
              </Dialog.Title>

              {shouldShowOnboarding ? (
                <p className="flex-1 text-sm leading-6 text-slate-400">
                  Comece{" "}
                  <button
                    onClick={handleStartEditor}
                    className="font-medium text-lime-400 hover:underline"
                  >
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button className="font-medium text-lime-400 hover:underline">
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  onChange={handleContentChanged}
                  className="flex-1 resize-none bg-transparent text-sm leading-6 text-slate-400 outline-none"
                  value={content}
                />
              )}
            </div>

            <button className="w-full bg-lime-400 py-4 text-sm font-semibold text-lime-950 outline-none hover:bg-lime-500 focus-visible:ring-2 focus-visible:ring-lime-100">
              Salvar nota
            </button>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute right-0 top-0 appearance-none items-center justify-center bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
              aria-label="Close"
            >
              <XIcon className="size-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
