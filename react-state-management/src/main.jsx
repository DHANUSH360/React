import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BindInConstructor from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BindInConstructor />
  </StrictMode>,
)
