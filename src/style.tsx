import styled from 'styled-components';

export const ClockSt=styled.div`
display:flex;
flex-direction:column;
padding:5%;
padding: 34px;
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

margin: 0 auto;
    display: flex;
    border: 5px solid #999;
    align-items: center;
    justify-content: center;
    /* width: 50%; */
    border-radius: 15px;
`
export const Container=styled.div`
margin: 2% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 50%; */
    border-radius: 15px;
`