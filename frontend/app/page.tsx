export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Lehrer Liste</h1>
          <p className="py-6">
            Sie haben ein Problem gefunden und wissen nicht wie sie es lösen
            sollen. Schicken sie es doch hier ab und die Admins werden sich
            darum kümmern!
          </p>
          <button className="btn btn-primary">Neues Ticket</button>
        </div>
      </div>
    </div>
  );
}
