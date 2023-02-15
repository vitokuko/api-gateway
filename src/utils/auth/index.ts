import {
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { INVALID_AUTH_TOKEN, INVALID_BEARER_TOKEN } from '../constants';

const getToken = (authToken: string): string => {
  console.log(authToken);
  const match = authToken.match(/^Bearer (.*)$/);
  if (!match || match.length < 2) {
    throw new HttpException(
      { message: INVALID_BEARER_TOKEN },
      HttpStatus.UNAUTHORIZED,
    );
  }
  console.log(match[1]);
  return match[1];
};

const decodeToken = (tokenString: string) => {
  const decoded = verify(tokenString, process.env.SECRET_TOKEN_KEY);
  if (!decoded) {
    throw new HttpException(
      { message: INVALID_AUTH_TOKEN },
      HttpStatus.UNAUTHORIZED,
    );
  }
  return decoded;
};

const handleAuth = ({ req }) => {
  try {
    if (req.headers.authorization) {
      // const token = getToken(req.headers.authorization);
      // const decoded: any = decodeToken(token);
      return {
        // user: decoded.user,
        user: {
          id: '35352GFG3563',
          firstname: 'Souaibou',
          lastname: 'NDIAYE',
        },
        authorization: `${req.headers.authorization}`,
      };
    }
  } catch (err) {
    throw new UnauthorizedException(
      'User unauthorized with invalid authorization Headers',
    );
  }
};

export { handleAuth };
