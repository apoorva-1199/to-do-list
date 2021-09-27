import styled from "styled-components";
import DatePicker from "react-datepicker";

export const MyStyledContainer = styled.div`
  width: 600px;
  margin: 0 auto;
  text-align: left;
`;
export const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const DatePickerStyle = styled(DatePicker)`
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  height: 20px;
`;
export const TextArea = styled.textarea`
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  height: 30px;
  margin-right: 10px;
  resize: none;
`;
export const Button = styled.button`
  padding: 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 45px;

  &:hover {
    background-color: white;
  }
`;

export const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    background-color: white;
    color: #61dafb;
    border-bottom: 1px solid black;
    padding: 10px;
  }

  & > li:hover {
    background-color: #f5f5f5;
  }
`;

export const Date = styled.div`
  margin-right: 15px;
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
`;

export const ListItemDiv = styled.div`
  display: flex;
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const Task = styled.div`
  width: 80%;
  margin-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: ${(props) => (props.decoration ? props.decoration : "none")};
`;

export const CheckCircle = styled.i`
  vertical-align: middle;
  margin-top: 3px;

  &:hover {
    opacity: ${(props) => (props.opacity ? props.opacity : 0)};
  }
`;
export const CheckCircleHidden = styled(CheckCircle)`
  margin-left: -14px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
export const Delete = styled.i`
  vertical-align: middle;
  float: right;
  margin-top: 4px;

  &:hover {
    color: red;
  }
`;
