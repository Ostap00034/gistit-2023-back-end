import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async signIn(email: string, pass: string) {
    const user = await this.userService.getByEmail(email)
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }

    const payload = { email: user.email, sub: user.id }


    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
