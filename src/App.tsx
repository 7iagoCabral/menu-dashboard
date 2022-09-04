import { useState } from 'react'
import './App.css'
import logo from './assets/images/logo.svg'
import menu from './assets/images/menu.svg'
import grid from './assets/images/grid.svg'
import pet from './assets/images/pet.svg'
import user from './assets/images/user.svg'
import vet from './assets/images/vet.svg'
import settings from './assets/images/settings.svg'
import logOut from './assets/images/log-out.svg'
import avatar from './assets/images/photo.jpg'


function App() {

  function handleShowMenu(){
    let sidebar =  document.querySelector('.sidebar')
    let menu =  document.querySelectorAll('span')
    let avatar =  document.querySelector('.avatar')
    let logo = document.getElementById('logo');



    if(logo.style.display != "none"){
      logo.style.display = 'none'
      avatar.style.display = 'none'
      sidebar.style.width = '78px'
      menu.forEach((ele, ind) =>{
        menu[ind].style.display = 'none'
      })
    }else{
      logo.style.display = 'block'
      avatar.style.display = 'block'
      sidebar.style.width = ''
      menu.forEach((ele, ind) =>{
        menu[ind].style.display = ''
      })
    }
  }

  return (
    <div className="sidebar">
      <div className='main'>
        <img id='logo' className='logo' src={logo} alt='Logo' />
        <button onClick={handleShowMenu}><img src={menu} /></button>
      </div>
      <nav>
        <form>
          <input type='Text' />
        </form>
        <ul>
          <li><a href=''><img src={grid} /><span>Dasboard</span></a></li>
          <li><a href=''><img src={pet} /><span>Pets</span></a></li>
          <li><a href=''><img src={user} /><span>Clientes</span></a></li>
          <li><a href=''><img src={vet} /><span>Vets</span></a></li>
          <li><a href=''><img src={settings} /><span>Ajustes</span></a></li>
        </ul>

      </nav>

    <div className='user'>
      <img className='avatar' src={avatar} alt="avatar do ususário" />
      <div className='user-info'>
      <span className='user-name'>Eleanor Pena</span>
      <span className='user-occupation'>Veterinária</span>
      </div>
      <button><img src={logOut} /></button>
    </div>
    </div>
  )
}

export default App
