import {css} from 'lit'

export const stylesNavbar = css`
.main-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #072146;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 9999;
    height: 90px;
}
h1{
  color:white;
  font-family: sans-serif;;

}
img{
    width: 110px;
    padding-left:10px;
    border-radius: 100em;
  }
  .rutas-content{
    display: flex;
    width: 200px;
    justify-content: space-around;
    color:white;
    font-family: sans-serif;
  }
`