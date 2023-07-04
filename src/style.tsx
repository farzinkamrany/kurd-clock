import styled from 'styled-components';

export const ClockSt=styled.div`
display:flex;
flex-direction:column;
padding:5%;
width:50%;
.clockShow{
    font-size:1.3rem;
    background:#f7f7f7;
    padding:10px;
    border-radius:10px;
}
.ant-btn{
    cursor:pointer;
    border:none;
}
align-items:center;
@media (max-width:768px){
    width: 100px;
}
`
export const StAll=styled.div`

display:flex;
align-items:center;
`