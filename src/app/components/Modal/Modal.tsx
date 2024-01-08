import Link from "next/link";

export function Modal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black">
      <div className="w-[600px] flex flex col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 reounded">
          <h1>Modal</h1>
          <p>olá mundo</p>
        </div>
      </div>
    </div>
  );
}
