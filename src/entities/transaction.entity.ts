import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('transactionss')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'transaction_id', length: 255 })
  transactionId: string;

  @Column({ type: 'numeric', precision: 15, scale: 6 })
  value: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp without time zone' })
  createdAt: Date;
}
