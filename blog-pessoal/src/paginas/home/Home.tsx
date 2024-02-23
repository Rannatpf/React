import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="justgrid grid-cols-2 grid-rows-2 rounded-lg bg-gradient-to-r from-gray-300 via-pink-500 to-pink-500">
          <div className='container grid grid-cols-2 text-zinc-600'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Olá!!</h2>
              <p className='text-xl'>Tá pensando o que? Escreve ai!! </p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button className='rounded bg-white bg-rose-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-4/4 rounded-lg' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;