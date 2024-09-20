import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { CartItem } from '../../cart_item/entities/cart_item.entity';
import { Order } from '../../order/entities/order.entity';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'bigint' })
  user_id: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.carts)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => CartItem, (cartItem) => cartItem.cart)
  cart_items: CartItem[];

  @OneToMany(() => Order, (order) => order.cart)
  orders: Order[];
}
