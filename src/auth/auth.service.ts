import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';


@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string) {
    const user = await this.userService.getByEmail(email)
    console.log(user.name)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return this.login(user)
    }

    return null
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }
    return {
      access_token: await this.jwtService.signAsync(payload)
    }
  }
}
