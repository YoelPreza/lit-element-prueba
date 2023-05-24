import { css } from "lit";
export const styleLogin = css `
.container {
    border-radius: 10px;
    width: 350px;
    height: 400px;
    text-align: center;

}
h1{
    font-family: monospace;
}
input {
    width: 90%;
    height: 30px;
    margin-top: 8vh;
    border-right: none;
    border-bottom: none;
    border-left: none;
    border-image: initial;
    border-top: 0px;
    /* border-radius: 5px; */
    background-color: rgba(211, 211, 211, 0.22);
    border-bottom: 1px solid black;
}

button {
    cursor: pointer;
  background-color: #237ABA;
  padding: 5px;
  color: white;
  width: 150px;
  height: 56px;
  border: none;
    margin-top: 8vh;
}

button:hover {
    cursor: pointer;
}

`