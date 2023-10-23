import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';
import axios from 'axios';

@Injectable()
export class TronApiService {
  constructor(private readonly databaseService: DatabaseService) {}
  private readonly apiUrl = 'https://api.trongrid.io/v1/accounts/';
  async fetchTronData(accountAddress: string): Promise<void> {
    const limit = 20;
    const onlyConfirmed = true;
    const only_to= true;

    try {
      const response = await axios.get(
        `${this.apiUrl}${accountAddress}/transactions/trc20`,
        {
          params: {
            limit,
            only_confirmed: onlyConfirmed,
            only_to,
          },
        },
      );

      if (
        response.status === 200 &&
        response.data
      ) {
        await this.databaseService.saveTransactions(response.data);
      } else {
        throw new Error(`HTTP Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching Tron data:', error.message);
    }
  }
}
