import React from 'react'

const Home = () => {
  return (
    <div>
      <main className="hero">
        <header className='flex justify-between'>
          <div>
            <h2>Logo LoCar</h2>
          </div>
          <div className='flex justify-between'>
            <input type="text" name="search-bar" id="search-bar" className='w-96 rounded-b-lg'/>
          </div>
          <div className='flex'>
            <ul className='flex justify-around gap-5'>
              <li>Home</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </div>
        </header>
        <div className='flex flex-col justify-center items-center mt-8'>
          <h1 className='text-5xl text-white'>Alugue sem complicações, tudo em um só lugar</h1>
          <p className='text-3xl text-white'>Explore os melhores que as locadoras ou usuários podem oferecer</p>
        </div>
      </main>
    </div>
  )
}

export default Home