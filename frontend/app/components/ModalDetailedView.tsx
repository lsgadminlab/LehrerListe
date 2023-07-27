"use client";

const ModalDetailedView = () => {
  return (
    <>
      <dialog className="modal modal-bottom sm:modal-middle modal-open">
        <form method="dialog" className="modal-box">
          <h1 className="text-5xl font-bold">Ticket</h1>
          <div className="badge badge-ghost my-5 mr-2">Lehrerkürzel: KUW</div>
          <div className="badge badge-ghost my-5"> Datum: 01-12-2022</div>
          <div className="badge badge-ghost my-5 ml-2">Raumnummer: 2102</div>
          <p className="text-lg">Beschreibung des Problems</p>
          <div className="flex justify-between my-4">
            <div>
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Ticket Erledigt</span>
                <input type="checkbox" className="checkbox" />
              </label>
            </div>
            <div className="badge badge-accent mt-5">Hohe Priorität</div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalDetailedView;
