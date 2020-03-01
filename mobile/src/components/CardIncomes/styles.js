import styled from "styled-components";


export const Container = styled.View`
flex-direction: row;

`;

export const Card = styled.View`
    flex: 1;
    background-color: #FFF;
    border-radius: 7px;
    margin: 0 20px;
    height: 295px;   
    left: 0;
    right: 0;
    top: 0;

`;
export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  color: #999;

`;
export const CardHeader = styled.View`
  height: 48px;
  width: 100%;
  
  align-items: center;

`;

export const Line = styled.View`
  height: 3px;
  background-color: #00DB16;
  align-self: stretch;

`;

export const CardTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin-top: 9px;
  
`;