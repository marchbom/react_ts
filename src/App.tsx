import styled from "styled-components";

const Title = styled.h1<{ $color: string }>`
  color: ${(props) => props.$color};
  text-decoration: underline;
`;

const BigTitle = styled(Title)`
  font-size: 50px;
`;

const Wrapper = styled.section`
  padding: 2rem;
  border: 1px solid red;
`;

const BlueBorderWrapper = styled(Wrapper)`
  border-color: blue;
`;
export default function App() {
  return (
    <>
      <BlueBorderWrapper>
        <Title $color="green">App Component</Title>
        <BigTitle $color="green"> Hello! Big Title</BigTitle>
      </BlueBorderWrapper>
    </>
  );
}
