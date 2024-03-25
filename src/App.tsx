import styled from '@emotion/styled';
import './App.css';
import { Page } from './common/Page';
import { WavyBackground } from './components/WavyBackground';
import { LampTest } from './components/Lamp';
import { BackgroundBeams } from './components/BackgroundBeams';
import { ButtonWithMovingBorder } from './components/ButtonWithMovingBorder';

function App() {
  return (
    <Page>
      <WavyBackground className='max-w-4xl mx-auto pb-40'>
        <Container>
          <Slot>
            <Header>
              <Title>Karpenter</Title>
              <Button>Join</Button>
            </Header>
            <div>
              <Motto>Accelerator of product delivery</Motto>
              <Subtitle>
                Empowering SaaS Companies to Satisfy Enterprise Customers
                Faster, While Assisting Startups, Developers, and Solopreneurs
                in Accelerating Time-to-Market. Karpenter enables you to
                abstract the underlying logic powering your application, while
                effortlessly creating a stunning interface to complement it.
              </Subtitle>
              <Button>Join the Karpentry 🔨</Button>
            </div>
          </Slot>
          <Slot
            style={{
              background: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <JoinHeader>Dropping Soon!</JoinHeader>
            <InputContainer>
              <EmailInput type='email' />
              <ButtonWithMovingBorder>Join waitlist </ButtonWithMovingBorder>
            </InputContainer>
            {/* <BackgroundBeams /> */}
          </Slot>
        </Container>
      </WavyBackground>
    </Page>
  );
}

export default App;

const InputContainer = styled.div`
  display: flex;
  height: 56px;
  width: 100%;
  border-radius: 32px;
  border: 1px solid #fcfcfc54;
  padding-left: 1rem;
  box-sizing: border-box;
`;

const EmailInput = styled.input`
  all: unset;
  box-sizing: border-box;
  background-color: 'transparent';
  height: 100%;
  border: 4px;
  width: calc(100% - 100px);
  font-size: 14px;
`;

const JoinHeader = styled.h3`
  background: -webkit-linear-gradient(#fcfcfc, #c9b4eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
`;

const Slot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
`;

const Motto = styled.h2`
  font-size: 56px;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #fff;
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: auto;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #818cf8;
  border: none;
  cursor: pointer;
  margin-top: 1rem;
  color: ##000080;
`;
