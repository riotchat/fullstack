import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 32
	})
	username: string;

	@Column({
		length: 64
	})
	email: string;
};