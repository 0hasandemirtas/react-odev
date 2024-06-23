import React from 'react'

function RouterConfig() {
  return (
    <div>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  )
}

export default RouterConfig