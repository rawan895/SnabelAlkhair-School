
import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomBytes, scryptSync } from 'crypto';

@Controller()
export class AppController {
  private users: {
    name: string;
    email: string;
    passwordHash: string;
    salt: string;
  }[] = [];

  @Get()
  getHello() {
    return 'Snabel Alkhair School API is running!';
  }

  @Post('auth/register')
  register(@Body() body: { name: string; email: string; password: string }) {
    const { name, email, password } = body;

    if (!name || !email || !password || password.length < 6) {
      return {
        success: false,
        message: 'Please enter valid information. Password must be at least 6 characters.',
      };
    }

    const existingUser = this.users.find(
      user => user.email.toLowerCase() === email.toLowerCase(),
    );

    if (existingUser) {
      return {
        success: false,
        message: 'This email is already registered.',
      };
    }

    const salt = randomBytes(16).toString('hex');
    const passwordHash = scryptSync(password, salt, 64).toString('hex');

    this.users.push({ name, email, passwordHash, salt });

    return {
      success: true,
      message: 'Registration successful!',
    };
  }
}
