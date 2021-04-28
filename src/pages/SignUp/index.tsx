import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/input/index';
import Button from '../../components/Button/index';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: string): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Background />

        <Content>
          <img src={logoImg} alt="GoBarber" />
          <Form onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input icon={FiUser} name="name" placeholder="Nome" />
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha "
            />
            <Button type="submit">Cadstrar</Button>
          </Form>

          <a href="login">
            <FiArrowLeft />
            Voltar para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
