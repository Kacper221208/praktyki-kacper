import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello() {
    return { message: 'Hello from NestJS 👋', when: new Date().toISOString() };
  }

  @Get('hi')
  getHi() {
    return { message: 'Hi from NestJS Kacper👋', when: new Date().toISOString() };
  }
}
