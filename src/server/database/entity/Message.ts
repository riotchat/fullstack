import { Entity, Column, PrimaryGeneratedColumn, TableInheritance, ManyToOne } from 'typeorm';
import Channel from './Channel';

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default class Message {  
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		length: 2000
	})
	content: string;
	
	@ManyToOne(type => Channel, channel => channel.messages)
    channel: Channel;
}