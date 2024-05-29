import styled from 'styled-components'

export const StyledAppHeader = styled.header`
padding : 60px;
`
export const StyledAppHeaderNavgitationBar = styled.div`
display:flex;
justify-content:space-between;
.navgitation-list{
  display:flex;
  justify-content:space-around;
  align-items:center;
}
.search{
  cursor: pointer;
}
.search >input[type=text]{
  width: 0px;
  border: none;
  outline: none;
  transition: width .3s;
}
.search >input[type=text].open{
    padding: 5px 10px 5px 10px;
    width: 200px;
}
.native >ul{
    display:flex;
    justify-content:space-between;
    list-style:none;
    margin-left: 15px;
    margin-right: 15px;
}
.native >ul >li{
  padding: 10px 20px 10px 20px;
  cursor: pointer;
}
.native >ul >li:hover{
  color: rgba(0, 0, 0, .8);
}
`
export const StyledSignInButton = styled.button`
  color:white;
  border:none;
  padding:10px 25px 10px 25px;
  background-color:#3B7844;
  border-radius:5px;
  outline:none;
  cursor:pointer;

  &:hover{
    background-color: rgb(59,120,68,.3);
  }
`
export const StyledAppHeaderContent = styled.div`
margin-top: 110px;
.content-title{
  font-size:48px ;
  font-weight:600px ;
}
.content-text{
  margin-top: 65px;
  font-size: 16px;
  line-height: 2;
}
`
export const StyledExploreButton = styled.button`
margin-top: 65px;
padding: 10px 25px 10px 25px;
background-color: #3B7844;
color: white;
border: none;
outline: none;
cursor: pointer;
border-radius: 2px;
`