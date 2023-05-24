import { css } from 'lit';


export const styleLit1 = css `
.div-content {
    display: flex;
    background: rgb(17,49,94);
    background: linear-gradient(120deg, rgba(17,49,94,1) 55%, rgba(255,255,255,1) 40%);

    justify-content: space-around;
  align-items: center;
  margin-top: 90px;
height:527px;
  }
    .my-div { 
      border-radius: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px; 
     
    }

      h1{
          color: white;
          margin-top: 0px;
          font-size: 60px;
        
        }
      p{
        color: white;

        font-family: sans-serif;
      }

      input{
        border: none;
        padding: 5px;
        width: 300px;
      }

      
.img-saludo{
border-radius: 100%;
// *display: none;
height: 350px;
width: 350px;
}

// div:hover .img-saludo{
// display:flex
// }

`