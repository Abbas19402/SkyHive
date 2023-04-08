import '@/styles/globals.css'
import { Provider } from 'react-redux'
import Store from '../Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import RootLayout from '../Layouts/Root/RootLayout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  let persistor = persistStore(Store)
  return <>
     <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <RootLayout>
            
            <Component {...pageProps} />
          </RootLayout>
        </PersistGate>
      </Provider>
  </>
}
