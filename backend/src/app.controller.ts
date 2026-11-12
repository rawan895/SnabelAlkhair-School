
import { Controller, Get, Post, Body } from '@nestjs/common';
import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

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

  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      message: 'Backend is healthy',
    };
  }

  @Post('auth/register')
  register(@Body() body: { name: string; email: string; password: string }) {
    const { name, email, password } = body;

    if (!name || !email || !password || password.length < 6) {
      return {
        success: false,
        message: 'Please enter valid information.',
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

  @Post('auth/login')
  login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    const user = this.users.find(
      user => user.email.toLowerCase() === email?.toLowerCase(),
    );

    if (!user || !password) {
      return {
        success: false,
        message: 'Invalid email or password.',
      };
    }

    const passwordHash = scryptSync(password, user.salt, 64);
    const storedHash = Buffer.from(user.passwordHash, 'hex');

    if (!timingSafeEqual(passwordHash, storedHash)) {
      return {
        success: false,
        message: 'Invalid email or password.',
      };
    }

    return {
      success: true,
      message: 'Login successful!',
      name: user.name,
      email: user.email,
    };
  }
}
