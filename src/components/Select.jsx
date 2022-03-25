import styled from 'styled-components'

const Div = styled.div`
  display: inline-block;
`
const Label = styled.label`
    color: #a01233;
    margin-bottom: 10px;
    display: inline-block;
`
const SelectCodes = styled.select`
    color:#a01233;
    font-weight: bold;
    padding: 6px 10px;
    border: 2px solid #a01233;
    border-radius: 10px;
    background-color: #0d253f;
    &:focus {
        outline: none;
        color: #fff;
        border: 2px solid #fff;
    }
`
const Select = ({codes, setCode}) => {

    return (
        <Div>
            <Label>Search for Upcoming Movies in Your Country:</Label>
            <br />
            <SelectCodes defaultValue={'default'} onChange={(e) => setCode(e.target.value)}>
                <option value="default" disabled>Choose a country...</option>
                {codes.map(code => <option key={code.iso_3166_1} value={code.iso_3166_1}>{code.english_name}</option>)}
            </SelectCodes>
        </Div>
    )
};
export default Select;