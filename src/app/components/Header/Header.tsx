"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import Modal from "react-modal";

export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const abrirModal = () => {
    setModalIsOpen(true);
  };

  const fecharModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="max-w-full ml-4 mr-4  ">
      <div className="flex items-center justify-between h-28">
        <div>
          <button onClick={abrirModal} className="w-32">
            <AiOutlineMenu className="h-6 w-6" />
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={fecharModal}
            contentLabel="Exemplo de Modal"
            className="modal"
          >
            <div className="absolute">
              <h2 className="h2">Conteúdo do Modal</h2>
              <button onClick={fecharModal} className="text-slate-950">
                Fechar Modal
              </button>
            </div>
          </Modal>
        </div>
        <Link href={`/`}>
          <button className="flex flex-col items-center">
            <Image alt="" src="/logo.png" width={100} height={100} className="w-20"/>
           
          </button>
        </Link>

        <div className="flex items-center gap-4">
          <span className="text-sm">UserName</span>
          <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
            <AiOutlineUser className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
