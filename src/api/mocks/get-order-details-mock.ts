import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    createdAt: '01/01/2025',
    status: 'pending',
    totalInCents: 5000,
    customer: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+55 11 99999-9999',
    },
    orderItems: [
      {
        id: '1',
        priceInCents: 1000,
        quantity: 2,
        product: {
          name: 'Pizza Margherita',
        },
      },
      {
        id: '2',
        priceInCents: 2000,
        quantity: 1,
        product: {
          name: 'Pizza Queijo',
        },
      },
    ],
  })
})
