import React, { useState } from 'react';
import validator from 'email-validator';
import { Swiper } from '../../components/Swiper';

import Form from '../../containers/Form';
import { SignInAndOut } from '../../Layouts/SignInAndOut';
import FormInput from '../../components/FormInput';

import * as S from './styled';
import FormButton from '../../components/FormButton';
import BottomForm from '../../containers/BottomForm';
import GoogleButton from '../../components/GoogleButton';

export const SignUpPage = () => {
  const [userFullName, setUserFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validator.validate(userName);
    setEmailError(!isValidEmail);

    if (!userFullName) {
      setUserNameError(true);
    } else setUserNameError(false);

    if (password.length >= 6) {
      setPasswordError(false);
    } else setPasswordError(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'userName':
        setUserName(value);
        break;

      case 'userFullName':
        setUserFullName(value);
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
    <S.SignInWrapper data-testid="sign-up">
      <SignInAndOut>
        <Swiper />
        <Form onSubmit={(e) => onSubmit(e)} title="Getting Started">
          <FormInput name="userFullName" type="text" label="Full Name" value={userFullName} handleChange={handleChange} />
          {!userNameError ? null : (
            <S.ErrorMessage>
              *Name can´t be empty
            </S.ErrorMessage>
          )}
          <FormInput name="userName" type="text" label="Email" value={userName} handleChange={handleChange} />
          {!emailError ? null : (
            <S.ErrorMessage>
              *Please enter a valid email address
            </S.ErrorMessage>
          )}
          <FormInput name="password" type="password" label="Password" value={password} handleChange={handleChange} />
          {!passwordError ? null : (
            <S.ErrorMessage>
              *Password needs at leat 6 characters
            </S.ErrorMessage>
          )}
          <FormButton type="submmit" label="Sign Up" />
          <BottomForm>
            <GoogleButton title="Sign Up With Google" />
            <p>
              By signing up you agree to
              <strong> Invision </strong>
              <br />
              <a href="/">Terms and conditions</a>
              {' '}
              and
              {' '}
              <a href="/">Privacy Policy</a>
            </p>
            <p>
              Already on
              {' '}
              <strong> Invision </strong>
              ?
              {' '}
              <a href="/">Log In</a>
            </p>
          </BottomForm>
        </Form>
      </SignInAndOut>
    </S.SignInWrapper>
  );
};

export default SignUpPage;
