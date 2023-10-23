import { Controller, Get } from '@nestjs/common';
import { TronApiService } from './app.service';

@Controller('api')
export class ApiController {
  constructor(private readonly tronApiService: TronApiService) {}

  @Get('fetchData')
  async fetchData(): Promise<void> {
    const tronAddress = 'TBxrQVWSdkrbTTXxQqturyKJV9oScqW6XQ';
    await this.tronApiService.fetchTronData(tronAddress);
  }
}
