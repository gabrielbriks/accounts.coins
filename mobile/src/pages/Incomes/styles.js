import styled from 'styled-components';



export const Container = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
  background-color: #4169E1;
`;


export const CardContainer = styled.View`
  width: 340px;
  height: 140px;
  background-color: #fff;
  border-radius: 12px;
  margin: 30px;
`;

export const ContainerTitle = styled.View`
  height: 54px; 
  border-bottom-width: 1px;
  border-bottom-color: #000;  
`;

export const CardTitle= styled.Text`
  font-size: 16px;
  opacity: 0.9;
  color: #333;
  margin-left: 15px;
  font-weight: 500;
`;

export const CardValue = styled.Text`
  flex: 1;
  font-size: 24px;
  color: #333;
  font-weight: bold;
  text-align: center;
  margin-top: 18px;
`;