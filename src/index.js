import React, {lazy, Suspense} from "react";
import ReactDom from "react-dom";
import logo from 'assets/Logo.png'

const App =lazy(()=>import(/* webpackChunkName: "app" */'app/App'))

const Loading = () => (
  <div className="loading" style={{
    backgroundColor: '#262538',
    position: 'fixed',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <img src={logo}/>
    <h1 style={{fontFamily: '"Nunito"',letterSpacing: '0.1rem', color: '#ff5959'}}>HeadTick</h1>
    <span style={{fontFamily:'"Roboto"',color: '#fafafa'}}>Make change to the world</span>
  </div>
)

const Lazy = () => (
  <Suspense fallback={<Loading/>}>
    <App/>
  </Suspense>
)

ReactDom.render(<Lazy/>, document.getElementById("root"));
