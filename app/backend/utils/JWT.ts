import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';

export default class JWT {
  private static secret: Secret = process.env.JWT_SECRET || 'secret';
  private static jwtConfig: SignOptions = {
    expiresIn: '10d',
    algorithm: 'HS256',
  };

  static sign(payload: JwtPayload): string {
    return sign(payload, this.secret, this.jwtConfig);
  }

  static verify(token: string): JwtPayload {
    return verify(token, this.secret) as JwtPayload;
  }
}