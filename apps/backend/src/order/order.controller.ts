import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderPrisma } from './order.prisma';
import { Order } from '@gstore/core';

@Controller('orders')
export class OrderController {
    constructor(private readonly repo: OrderPrisma) {}
  
    @Post()
    async save(@Body() order: Order) {
      return this.repo.save(order);
    }
  
    @Get()
    async getOrders() {
      return this.repo.get();
    }
  
    @Get(':id')
    async getOrderById(@Param('id') id: string) {
      return this.repo.getById(+id);
    }
  
    @Delete(':id')
    async removeOrder(@Param('id') id: string) {
      return this.repo.remove(+id);
    }

}
