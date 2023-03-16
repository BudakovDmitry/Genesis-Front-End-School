import { createRoot } from 'react-dom/client'
import App from 'src/app'
import { SwrProvider } from 'src/context/SwrContext'

import 'video-react/dist/video-react.css'

import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <SwrProvider>
    <App />
  </SwrProvider>,
)
