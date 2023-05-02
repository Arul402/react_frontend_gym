/** @jsx jsx */
import "bootstrap/dist/css/bootstrap.min.css"
//import "./App.css"
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
//import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./auth";
import ContactBg from "../Image/contactBg.jpg";

const Login1 = () => (
    <section css={styles} className="login" id="login">
      <Container>
        {/* <Map />
        <Form /> */}
        <Login />
      </Container>
     
    </section>
  );
export default Login1;

  
  const styles = css`
  width: 100%;
  
//   .container {
//     max-width: 100%;
//     display: flex;
//     width: 100%;
//   padding: 80px;
//   min-height: 60vh;
//   background: url('${ContactBg}') no-repeat center/cover;
//     // text-align:center;
//   }
//   Login1{
    
//       margin: auto;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       flex-wrap: wrap;
//       width: 100%;
//       background: #fff;
//       padding: 40px;
//       border-radius: 6px;
//       input,
//       textarea {
//         margin-bottom: 20px;
//         padding: 14px;
//         border: 1px solid #ddd;
//         outline: none;
//         color: #7a7a7a;
//         &::placeholder {
//           color: #7a7a7a;
//         }
      
//       input {
//         width: 47%;
//         &:nth-child(3) {
//           width: 100%;
//         }
//       }
//       textarea {
//         width: 100%;
//       }
//     }
//     @media (max-width: 1200px) {
//       padding: 80px 30px;
//       form {
//         max-width: 900px;
//       }
//     }
//   }
//   footer {
//     text-align: center;
//     padding: 36px 0;
//     p {
//       font-size: 14px;
//       color: #232d39;
//       a {
//         text-decoration: none;
//         color: #ed563b;
//         font-weight: 500;
//         &:hover {
//           color: #ed563b;
//         }
//       }
//     }
  
//   @media(max-width: 1200px) {
//     .container{
//       flex-direction: column-reverse;
//       align-items: center;
//     }
//   }
  
// `;