import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      
      <nav class=" bg-grey-300 p-6">
        <div className='flex flex-col justify-between sm:flex-col md:flex-row sm:text-center'>
  <div class="flex  items-center flex-shrink-0 text-white mr-6 xl:flex-row sm:flex-col ">
  
          <svg  className='animate-bounce' height="54" width="54" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_15" data-name="Layer 15"><path d="M51.053,17a4,4,0,0,0,5.464,1.464l4,6.928a4,4,0,0,1-1.464,5.464l-38.106,22a4,4,0,0,1-5.464-1.464l-4-6.928a4,4,0,1,0-4-6.928l-4-6.928a4,4,0,0,1,1.464-5.464l38.106-22a4,4,0,0,1,5.464,1.464l4,6.928A4,4,0,0,0,51.053,17Z" style={{'fill':'#f072ae'}} /><path d="M7.188,37.024l.295.512a3.936,3.936,0,0,1,1.036-.4A3.991,3.991,0,0,0,7.188,37.024Z" style={{'fill':'#ed539d'}} /><path d="M46.517,4.608l4,6.928a3.99,3.99,0,0,0,2.964,7.328,4,4,0,0,1-.964-7.328l-4-6.928a3.985,3.985,0,0,0-4.429-1.864A3.985,3.985,0,0,1,46.517,4.608Z" style={{'fill':'#ed539d'}} /><path d="M60.517,25.392l-4-6.928a3.962,3.962,0,0,1-1.705.512l3.705,6.416a4,4,0,0,1-1.464,5.464l-38.106,22a3.917,3.917,0,0,1-1.035.4,3.984,3.984,0,0,0,3.035-.4l38.106-22A4,4,0,0,0,60.517,25.392Z" style={{'fill':'#ed539d'}} /><path d="M48.125,28.928a1,1,0,0,1-.5-1.866l6.928-4a1,1,0,0,1,1,1.732l-6.928,4A1,1,0,0,1,48.125,28.928Z" style={{'fill':'#ea348b'}} /><path d="M52.241,31.01a1,1,0,0,1-.479-1.879l4.809-2.619a1,1,0,0,1,.957,1.757l-4.809,2.619A.994.994,0,0,1,52.241,31.01Z" style={{'fill':'#ea348b'}} /><path d="M32.69,25.29c-1.14-3.96-6.97-4.06-8.43,1.41-3.13-.84-5.4.47-6.22,2.3H32.81A9.3,9.3,0,0,0,32.69,25.29Z" style={{'fill':'#ed1c24'}} /><path d="M54,45a4,4,0,0,0,4,4v8a4,4,0,0,1-4,4H10a4,4,0,0,1-4-4V49a4,4,0,0,0,0-8V33a4,4,0,0,1,4-4H54a4,4,0,0,1,4,4v8A4,4,0,0,0,54,45Z" style={{'fill':'#ffcd00'}} /><path d="M58,41V33a4,4,0,0,0-4-4H52a4,4,0,0,1,4,4v8a4,4,0,0,0,0,8v8a4,4,0,0,1-4,4h2a4,4,0,0,0,4-4V49a4,4,0,0,1,0-8Z" style={{'fill':'#ebbf00'}} /><path d="M6,41a4.061,4.061,0,0,1,.471.047A4,4,0,0,0,6,40.379Z" style={{'fill':'#ebbf00'}} /><path d="M25.946,52s6.929-4.714,8-9c1-4-4-7-8-3-4-4-9-1-8,3C19.018,47.286,25.946,52,25.946,52Z" style={{'fill':'#ed1c24'}} /><rect x="46" y="33" width="8" height="4" style={{'fill':'#ebbf00'}} /><rect x="38.588" y="8.34" width="8" height="4" transform="translate(0.536 22.679) rotate(-30)" style={{'fill':'#ea348b'}} /><path d="M42,31a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V32A1,1,0,0,0,42,31Z" style={{'fill':'#ddb200'}} /><path d="M42,36a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V37A1,1,0,0,0,42,36Z" style={{'fill':'#ddb200'}} /><path d="M42,41a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V42A1,1,0,0,0,42,41Z" style={{'fill':'#ddb200'}} /><path d="M42,46a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V47A1,1,0,0,0,42,46Z" style={{'fill':'#ddb200'}} /><path d="M42,51a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V52A1,1,0,0,0,42,51Z" style={{'fill':'#ddb200'}} /><path d="M42,56a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V57A1,1,0,0,0,42,56Z" style={{'fill':'#ddb200'}} /><path d="M45,53a1,1,0,0,0,1,1h8a1,1,0,0,0,0-2H46A1,1,0,0,0,45,53Z" style={{'fill':'#ddb200'}} /><path d="M54,56H46a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" style={{'fill':'#ddb200'}} /><path d="M35.026,11.242a1,1,0,1,0-1.732,1l.5.866a1,1,0,0,0,1.732-1Z" style={{ 'fill': '#ea38b' }} /><path d="M37.526,15.572a1,1,0,0,0-1.732,1l.5.866a1,1,0,0,0,1.732-1Z" style={{ 'fill': '#ea38b' }}/><path d="M40.026,19.9a1,1,0,0,0-1.732,1l.5.866a1,1,0,0,0,1.732-1Z" style={{'fill':'#ea34b'}}/><path d="M42.526,24.232a1,1,0,0,0-1.732,1l.5.866a1,1,0,0,0,1.732-1Z" style={{'fill':'#ea34b'}}/></g></svg>
          
    <span class="font-semibold text-blue-500 text-xl tracking-tight">Codingbdx React movies
</span>
  </div>
  <div class=" lg:flex lg:items-center lg:w-auto">
    <ul class="text-md uppercase lg:flex-grow">

       <NavLink to='/'  className={(nav) => ( nav.isActive ? 'nav-active' : '')}> <li class="block mt-4 lg:inline-block lg:mt-0 text-blue-400 bg-gray-100 rounded-full p-4 hover:text-white mr-4">Accueil</li></NavLink>
       <NavLink to='/coup-de-coeur' className={(nav) => ( nav.isActive ? 'nav-active' : '')}> <li class=" bg-gray-100 p-4 block rounded-full mt-4 lg:inline-block lg:mt-0 text-blue-400 hover:text-white mr-4">Coup de coeur</li></NavLink>

    </ul>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
  </div>
</nav>
      

    </div>
  )
}
