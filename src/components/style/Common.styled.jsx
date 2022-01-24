import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
 font-size: 56px;
 font-family:'Dancing Script', cursive;
  font-weight: 700;
  color: #337bae;

  text-align: center;
}
`;
export const SecondaryTitle = styled.h2`
  font-size: 45px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  color: #337bae;

  text-align: center;
`;
export const PhonebookForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  ${'' /* margin-right:15px; */}
  margin-bottom:15px;

  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  color: #337bae;
`;

export const Input = styled.input`
  margin-left: 15px;
  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  color: #1a405f;
  text-align: center;
  border-radius: 15px;
  border: none;

  background-color: #fcfcfa;
`;
export const Button = styled.button`
  height: 40px;
  padding: 0 20px;

  font-size: 24px;
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  color: #fcfcfa;
  text-align: center;

  background-color: #337bae;
  border-radius: 15px;
  border: none;
  &:hover {
    background-color: #1a405f;
  }
`;

export const FilterContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const ContactsList = styled.ul`
  margin-left: auto;
  margin-right: auto;
`;

export const Contact = styled.li`
  list-style: none;
  font-size: 20px;
  font-weight: 500;
  color: #29628b;
`;

export const NameContact = styled.span`
  margin-right: 15px;
`;
export const ButtonDelete = styled.button`
  height: 25px;
  padding: 0 15px;
  margin-left: 15px;

  font-size: 15px;
  font-family: 'Dancing Script', cursive;
  font-weight: 500;
  color: #fcfcfa;
  text-align: center;
  justify-content: center;

  background-color: #337bae;
  border-radius: 15px;
  border: none;
  &:hover {
    background-color: #1a405f;
  }
`;
