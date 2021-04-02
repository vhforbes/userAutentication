import React, { useState } from 'react';
import validator from 'email-validator';
import { Link } from 'react-router-dom';
import { SwiperComponent } from '../../components/Swiper';

import Form from '../../containers/Form';
import { SignInAndOut } from '../../Layouts/SignInAndOut';
import FormInput from '../../components/FormInput';

import * as S from './styled';
import FormButton from '../../components/FormButton';
import BottomForm from '../../containers/BottomForm';
import GoogleButton from '../../components/GoogleButton';

export const SignInPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordlError, setPasswordError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validator.validate(userName);
    setEmailError(!isValidEmail);
    if (password) {
      setPasswordError(false);
    } else setPasswordError(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.log('Could not handle change');  // eslint-disable-line
        break;
    }
  };

  return (
    <S.SignInWrapper data-testid="sign-in">
      <SignInAndOut>
        <SwiperComponent />
        <Form onSubmit={(e) => onSubmit(e)} title="Welcome to Invision">
          <FormInput name="userName" type="text" label="User name or Email" value={userName} handleChange={handleChange} />
          {!emailError ? null : (
            <S.ErrorMessage>
              *Please enter a valid email address
            </S.ErrorMessage>
          )}
          <FormInput name="password" type="password" label="Password" value={password} handleChange={handleChange} />
          {!passwordlError ? null : <S.ErrorMessage>*Please fill your password</S.ErrorMessage>}
          <S.ForgotPassword>
            <a href="/">Forgot Password?</a>
          </S.ForgotPassword>
          <FormButton type="submmit" label="Sign In" />
          <BottomForm>
            <GoogleButton title="Sign In With Google" />
            <p>
              New to
              <strong> Invision</strong>
              ?
              {' '}
              <Link to="/sign-up">Create Account</Link>
            </p>
          </BottomForm>
        </Form>
      </SignInAndOut>
    </S.SignInWrapper>
  );
};

export default SignInPage;
