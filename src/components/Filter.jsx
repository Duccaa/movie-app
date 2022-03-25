import styled from "styled-components";

const Div = styled.div`
  display: inline-block;
  margin: 15px;
  margin-top: 40px;
`
const Input = styled.input`
    border-radius: 10px;
    color: #fff;
    padding: 6px 10px;
    border: 2px solid #a01233;
    background-color: #0d253f;
    &::placeholder {
        color:#a01233;
        font-weight: bold;
    }
    &:focus {
        color: #fff;
        border: 2px solid #fff;
    }
`
const Filter = ({ setFilter }) => {

  return (
    <Div>
      <Input
        placeholder="Search Movie by Name..."
        onChange={(e) => setFilter(e.target.value)}
      />
    </Div>
  );
};

export default Filter;
