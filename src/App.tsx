 import { ThemeProvider } from "styled-components"
import { LayoutComponent } from "./components/layoutComponent" 
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
 
  
export const App: React.FC = () => {
  
  return (
    <ThemeProvider theme={defaultTheme}> 
    <GlobalStyle theme={defaultTheme}/>
   <LayoutComponent/>    
   </ThemeProvider>
  )
}

 
