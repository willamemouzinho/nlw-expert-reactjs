import logo from "./assets/logo-nlw-expert.svg";
export function App() {
  return (
    <div>
      <img src={logo} alt="logo da NLW Expert" />
      <input
        type="text"
        name="note"
        id="note"
        placeholder="Busque em suas notas"
        className="max-w-6xl bg-transparent"
      />
      <h1 className="flex text-wrap ">hello world</h1>
    </div>
  );
}
