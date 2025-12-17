
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import RefProps from './components/RefProps'
import ThemeToggler from './components/ThemeToggler'


function Navigation() {
  const isDark = true

  const sections = [
    {id: 'basic', label: 'Basic Props' , icons: '✨'},
    {id: 'ref', label: 'ref Props' , icons: '🔖'},
    {id: 'children', label: 'Children Props' , icons: '🔗'},
    {id: 'complex', label: 'Complex Props' , icons: '⚙️'},
    {id: 'theme', label: 'Theme Toggler' , icons: '🎨'},
  ]

  return (
    <nav className={'sticky top-0 z-50 shadow-md'}>

    </nav>
  )}

  function AppContent(){
    return (
      <div className={'min-h-screen bg-gray-800'}>
        test
      </div>
    )
  }
function App() {
  

  return (
    <>
      <AppContent />;
    </>
  )
}

export default App
