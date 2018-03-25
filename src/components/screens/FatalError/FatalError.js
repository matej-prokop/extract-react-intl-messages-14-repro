import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FormattedMessage, defineMessages } from "react-intl";

const messages = defineMessages({
  searchNoMatch: `Your search did not match any app.`
});

const Button = styled.div``;

const ErrorWrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1a1919;
`;

const Image = styled.div`
  display: block;
  padding: 35px;
  width: 350px;
  height: 350px;
  vertical-align: middle;
  border: solid 1px black;
`;

const ErrorHeader = styled.div`
  font-size: 30px;
  line-height: normal;
`;

const ErrorDescription = styled.div`
  font-size: 18px;
  line-height: 1.67;
  margin-top: 40px;
`;

const FatalError = ({ message, onTryAgain }) => {
  return (
    <ErrorWrapper>
      <Image />
      <ErrorHeader>
        <FormattedMessage defaultMessage="Looks like today isn’t our day." />
      </ErrorHeader>
      <ErrorDescription>
        {message}
        <br />
        <Button size="large" onClick={onTryAgain}>
          <FormattedMessage defaultMessage="Try again" />
        </Button>
      </ErrorDescription>
    </ErrorWrapper>
  );
};

FatalError.propTypes = {
  message: PropTypes.string.isRequired,
  onTryAgain: PropTypes.func.isRequired
};

export default FatalError;
