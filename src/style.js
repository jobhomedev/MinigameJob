import { styled } from "styled-components";

export const Container = styled.div`
   transition: background-image 0.5s ease-in;
   width: 100%;
   height: 100%;
   background-image: url("${({ $image }) => $image}");
   background-size: cover;
`;