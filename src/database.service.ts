import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async saveTransactions(transactions: { data: any[] }): Promise<void> {
    const type = 'USDT';
    for (const transaction of transactions.data.slice(0, 20)) {
      const {
        transaction_id,
        value,
        token_info: { decimals, symbol },
      } = transaction;
      const currentTime = new Date().toISOString();

      const existingTransaction = await this.transactionRepository.findOne({
        where: { transactionId: transaction_id },
      });

      if (!existingTransaction && symbol == type) {
        const convertedValue = parseFloat(value) / Math.pow(10, decimals);

        const newTransaction = this.transactionRepository.create({
          transactionId: transaction_id,
          value: convertedValue,
          createdAt: currentTime,
        });

        try {
          await this.transactionRepository.save(newTransaction);
        } catch (error) {
          console.error('Error saving transaction:', error);
        }
      } else {
        // console.log(
        //   `Transaction with ID ${transaction_id} already exists in the database. Skipping...`,
        // );
      }
    }
  }

  async getTransactionById(transactionId: string): Promise<Transaction> {
    return this.transactionRepository.findOne({
      where: { transactionId: transactionId },
    });
  }
}
