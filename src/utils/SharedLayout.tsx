import Header from '../scenes/global/Header'
import MainNav from '../scenes/additional/MainNav'
import Background from './Background'

const SharedLayout = () => {
  return (
    <>
	  <Background/>
     <Header/>
     <MainNav/>
    </>
  )
}

export default SharedLayout